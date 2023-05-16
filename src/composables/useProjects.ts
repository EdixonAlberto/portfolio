export default function useProjects() {
  const config = useRuntimeConfig()
  const data = useState<TProject[]>('projects', () => [])
  const pending = useState<boolean>('pending', () => true)
  const error = useState<string>('error', () => '')

  new Promise(async resolve => {
    try {
      let dataUser: TProject[] = [],
        dataOrg: TProject[] = []

      if (config.public.modeDev) {
        const { items } = await $fetch<{ items: TProject[] }>('/static/projects.json')
        dataUser = items
        dataOrg = []
      } else {
        const { items: data1 } = await $fetch<{ items: TProject[] }>(
          config.public.apiBase + '/search/repositories?q=user:edixonalberto+topic:portfolio+fork:true'
        )
        const { items: data2 } = await $fetch<{ items: TProject[] }>(
          config.public.apiBase + '/search/repositories?q=user:pineacode+topic:portfolio'
        )
        dataUser = data1
        dataOrg = data2
      }

      const dataTotal = [...dataUser, ...dataOrg]
      const result = dataTotal.sort((a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      })

      data.value = result
      resolve(null)
    } catch (err) {
      const errorMessage =
        (err as { response?: { _data: TErrorApiGithub } }).response?._data.errors.map(err => err.message).join(', ') ||
        (err as Error).message

      error.value = `ERROR: ${errorMessage}`
    } finally {
      pending.value = false
    }
  })

  return { data, pending, error }
}
