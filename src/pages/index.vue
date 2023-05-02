<script lang="ts" setup>
definePageMeta({ layout: false })
const { data: projects, pending, error } = useProjects()

// METHODS _____________________________________________________________________________________________________________

function previewClose(projectId: number): void {
  const projectCard = document.getElementById(projectId.toString())!
  const preview = projectCard.childNodes.item(0) as Element
  preview.classList.remove('active')
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

<style lang="scss" scoped>
@mixin theme-dark {
  h1,
  h3,
  p,
  span {
    color: #fff;
  }

  .projects p {
    color: #fff;
  }

  .container .project-card .data {
    background: $color-blue-dark;
    border-color: #2c2c2c;

    .badges .badge {
      background: $color-blue-dark;
      border-color: #2c2c2c;

      .p-icon {
        color: #fff;
      }

      &:hover {
        border-color: $color-grey-lite;
      }
    }
  }
}

.projects {
  width: 100%;

  h1 {
    font-size: 3rem;

    span {
      font-size: 1.5rem;
    }
  }

  &.dark {
    @include theme-dark();
  }

  &.system {
    @media (prefers-color-scheme: dark) {
      @include theme-dark();
    }
  }

  .container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;

    .project-card {
      width: 385px;
      height: 210px;

      position: relative;
      border-radius: 6px;

      .preview {
        cursor: pointer;
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        margin: auto;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-size: cover;
        background-position: left top;
        background-repeat: no-repeat;
        border-radius: inherit;
        z-index: 1;

        & + .data {
          border-top-left-radius: 40px;

          @media screen and (max-width: 720px) {
            border-top-left-radius: 80px;
          }
        }

        &:hover {
          & + .data {
            border-top-left-radius: 80px;
          }
        }

        &.active {
          z-index: 3;
        }
      }

      .data {
        transition: all 0.25s 0s ease;
        width: 100%;
        height: 100%;
        padding: 25px;

        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        row-gap: 14px;

        background: #fff;
        border: 1px solid $color-grey-lite;
        border-radius: inherit;
        z-index: 2;

        .header {
          user-select: none;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .star {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            column-gap: 5px;

            span {
              font-size: 15px;
            }

            .p-icon {
              width: 18px;
            }
          }
        }

        h3 {
          margin: 0;
          font-size: 1rem;
        }

        p {
          height: 333px;
          margin: 0;
          font-size: 0.875rem;
        }

        .badges {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          column-gap: 20px;

          .badge {
            cursor: pointer;
            user-select: none;
            width: 100px;
            padding: 0 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 5px;
            background: $color-white-dark;
            border: 1px solid $color-grey-lite;
            border-radius: 6px;

            .p-icon {
              width: 24px;
            }

            &:hover {
              border-color: $color-grey-dark;
            }
          }
        }
      }
    }
  }
}
</style>
