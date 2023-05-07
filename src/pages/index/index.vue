<script lang="ts" setup>
definePageMeta({ layout: false })
const { data: projects, pending, error } = useProjects()

// METHODS _____________________________________________________________________________________________________________

function previewClose(projectId: number): void {
  const projectCard = document.getElementById(projectId.toString())!
  const preview = projectCard.childNodes.item(0) as Element
  if (preview.nodeName !== '#comment') {
    preview.classList.remove('active')
  }
}

function previewActive(projectId: number): void {
  const projectCard = document.getElementById(projectId.toString())!
  const preview = projectCard.childNodes.item(0) as Element
  preview.classList.toggle('active')
}

function getYearFromDate(date: string): string {
  return new Date(date).getFullYear().toString()
}

function isUrlNPM(url: string): boolean {
  return url.search(/^https:\/\/(www.)?npmjs.com/) > -1
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
          <div
            :id="project.id.toString()"
            class="project-card"
            v-for="project of projects"
            :key="project.id"
            @mouseleave="previewClose(project.id)"
          >
            <div
              v-if="project.topics.includes('preview')"
              class="preview"
              :style="{
                backgroundImage: `url(https://raw.githubusercontent.com/EdixonAlberto/${project.name}/main/preview.png)`
              }"
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
