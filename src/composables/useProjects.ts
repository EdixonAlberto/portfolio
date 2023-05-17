export default function useProjects() {
  const config = useRuntimeConfig()
  const data = useState<TProject[]>('projects', () => [])
  const pending = useState<boolean>('pending', () => true)
  const error = useState<string>('error', () => '')

  new Promise(async resolve => {
    try {
      let dataUser: TProject[] = [],
        dataOrg: TProject[] = []
      const { modeDev, apiBase } = config.public

      if (modeDev) {
        const { items } = await $fetch<{ items: TProject[] }>('/static/projects.json')
        dataUser = items
        dataOrg = []
      } else {
        // TODO: create pagination in template to use better api of github
        const perPage = 30
        const page_list = [1, 2]
        const data1_list: TProject[] = []

        for (const page of page_list) {
          const { items: data1 } = await $fetch<{ items: TProject[] }>(
            `${apiBase}/search/repositories?q=user:edixonalberto+topic:portfolio+fork:true&per_page=${perPage}&page=${page}`
          )
          data1_list.push(...data1)
        }

        const { items: data2 } = await $fetch<{ items: TProject[] }>(
          `${apiBase}/search/repositories?q=user:pineacode+topic:portfolio`
        )
        dataUser = data1_list
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
