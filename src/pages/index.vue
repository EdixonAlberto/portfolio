<script lang="ts" setup>
type TProject = {
  id: number
  created_at: string
  stargazers_count: number
  name: string
  description: string
  html_url: string
  homepage: string
}

definePageMeta({ layout: false })

const config = useRuntimeConfig()

const {
  data: dataUser,
  pending: pendingUser,
  error: errorUser
} = useFetch<{ items: TProject[] }>(() => '/search/repositories?q=user:edixonalberto+topic:portfolio+fork:true', {
  baseURL: config.public.apiBase
})

const {
  data: dataOrg,
  pending: pendingOrg,
  error: errorOrg
} = useFetch<{ items: TProject[] }>(() => '/search/repositories?q=user:pineacode+topic:portfolio', {
  baseURL: config.public.apiBase
})

const projects = computed(() => {
  return [...dataUser.value!.items, ...dataOrg.value!.items]
})
const pending = computed(() => pendingUser.value && pendingOrg.value)
const error = computed(() => errorUser.value || errorOrg.value)

function getYearFromDate(date: string): string {
  return new Date(date).getFullYear().toString()
}
</script>

<template>
  <NuxtLayout name="default">
    <template #default="{ theme }">
      <div class="projects" :class="theme">
        <h1>Proyectos</h1>

        <div v-if="!pending && !error" class="container">
          <div class="project-card" v-for="project of projects" :key="project.id">
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
                v-if="project.homepage"
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

        <div v-else-if="error">Error al obtener los datos, intente de nuevo mas tarde.</div>

        <div v-else>Loading...</div>
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

  .container .project-card {
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
      padding: 25px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      row-gap: 14px;
      background: #fff;
      border: 1px solid $color-grey-lite;
      border-radius: 6px;

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
</style>
