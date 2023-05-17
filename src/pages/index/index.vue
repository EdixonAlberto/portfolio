<script lang="ts" setup>
definePageMeta({ layout: false })
const { data: projects, pending, error } = useProjects()
const TECH_NAME_LIST = [
  'GraphQL',
  'Docker',
  'Flask',
  'Python',
  'TypeScript',
  'JavaScript',
  'Deno',
  'Node',
  'Nest',
  // ___________
  'PostCSS',
  'Stylus',
  'Sass',
  'CSS',
  'TailwindCSS',
  'Laravel',
  'PHP',
  'HTML',
  'Angular',
  'React',
  'Next',
  'Vue',
  'Gridsome',
  'Nuxt'
]

// METHODS _____________________________________________________________________________________________________________

function previewClose(projectId: number): void {
  const projectCard = document.getElementById(projectId.toString())!
  const preview = projectCard.childNodes.item(0) as HTMLDivElement
  if (preview.className.split(' ').includes('zoom')) {
    preview.style.visibility = 'hidden'
    preview.classList.remove('active', 'zoom')
    setTimeout(() => (preview.style.visibility = 'visible'), 250)
  } else {
    preview.classList.remove('active')
  }
}

function previewActive(projectId: number): void {
  const projectCard = document.getElementById(projectId.toString())!
  const preview = projectCard.childNodes.item(0) as HTMLDivElement
  if (preview.nodeName !== '#comment') {
    if (preview.className.split(' ').includes('active')) {
      preview.classList.add('zoom')
    } else {
      preview.classList.add('active')
    }
  }
}

function getYearFromDate(date: string): string {
  return new Date(date).getFullYear().toString()
}

function isUrlNPM(url: string): boolean {
  return url.search(/^https:\/\/(www.)?npmjs.com/) > -1
}

function getNamesTechFromTopics(topics: string[]): string[] {
  return TECH_NAME_LIST.filter(name => topics.includes(name.toLowerCase()))
}
</script>

<template>
  <NuxtLayout name="default">
    <template #default="{ theme }">
      <div class="projects" :class="theme">
        <h1>
          Proyectos <span>({{ projects.length }})</span>
        </h1>

        <div v-if="projects.length" class="container">
          <div :id="project.id.toString()" class="project-card" v-for="project of projects" :key="project.id">
            <div
              v-if="project.topics.includes('preview')"
              class="preview"
              :style="{
                backgroundImage: `url(https://raw.githubusercontent.com/EdixonAlberto/${project.name}/main/preview.png)`
              }"
              @mouseleave="previewClose(project.id)"
              @click="previewActive(project.id)"
            ></div>

            <div class="data">
              <div class="header">
                <span v-text="getYearFromDate(project.created_at)"></span>

                <div class="star">
                  <span v-text="project.stargazers_count"></span>
                  <Icons name="star" />
                </div>
              </div>

              <h3 v-text="project.name"></h3>
              <p v-text="project.description"></p>

              <div class="badges">
                <a class="badge" :href="project.html_url" target="_blank" rel="noopener noreferrer">
                  <Icons name="github" />
                  <span>Código</span>
                </a>

                <a
                  v-if="isUrlNPM(project.homepage)"
                  class="badge"
                  :href="project.homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons name="npm" />
                  <span>NPM</span>
                </a>

                <a
                  v-else-if="project.homepage"
                  class="badge"
                  :href="project.homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons name="browser" />
                  <span>Demo</span>
                </a>
              </div>

              <div class="techs">
                <Icons
                  v-for="name of getNamesTechFromTopics(project.topics)"
                  :key="name"
                  class="tech"
                  :title="name"
                  :name="(name.toLowerCase() as any)"
                />
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="pending"><p>Loading...</p></div>

        <div v-else-if="error">
          <p>Error al obtener los datos, intente de nuevo mas tarde.</p>
        </div>

        <div v-else><p>No hay proyectos.</p></div>
      </div>
    </template>
  </NuxtLayout>
</template>

<style lang="scss" scoped src="./Projects.scss" />
