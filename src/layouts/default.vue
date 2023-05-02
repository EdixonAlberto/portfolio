<script lang="ts" setup>
type TTheme = 'light' | 'dark' | 'system'
const theme = ref<TTheme>('light')
const route = useRoute()

onMounted(() => {
  const themeInitial = localStorage.getItem('theme') as TTheme
  if (themeInitial) theme.value = themeInitial
  else {
    localStorage.setItem('theme', 'light')
  }
})

watch(theme, value => {
  localStorage.setItem('theme', value)
})
</script>

<template>
  <div class="app" :class="theme">
    <header>
      <div class="naming">
        <Icons name="pinea" />
        <h2>Edixon Piña</h2>
      </div>

      <div class="theme">
        <Icons v-if="theme === 'light'" name="sun" title="Tema Claro" @click="theme = 'dark'" />
        <Icons v-else-if="theme === 'dark'" name="moon" title="Tema Oscuro" @click="theme = 'system'" />
        <Icons v-else name="laptop" title="Tema Igual al Navegador" @click="theme = 'light'" />
      </div>
    </header>

    <nav>
      <ul>
        <li :class="{ active: route.name === 'index' }">
          <NuxtLink to="/">Proyectos</NuxtLink>
          <div class="line"></div>
        </li>
      </ul>
    </nav>

    <main>
      <slot :theme="theme" />
    </main>

    <footer>
      <div class="data">
        <a class="p-link" href="https://github.com/EdixonAlberto/portfolio/" target="_blank" rel="noopener noreferrer">
          <span>(Creado por Edixon Piña)</span>
        </a>
        <a class="p-link" href="https://www.linkedin.com/in/edixonalberto/" target="_blank" rel="noopener noreferrer">
          <span>LinkedIn</span>
        </a>
        <a class="p-link" href="https://github.com/EdixonAlberto/" target="_blank" rel="noopener noreferrer">
          <span>GitHub</span>
        </a>
      </div>

      <div class="data tools">
        <a class="p-link" href="https://nuxt.com/" target="_blank" rel="noopener noreferrer">
          <span>Nuxt3</span>
          <Icons name="nuxt" />
        </a>
        <a class="p-link" href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <span>TypeScript</span>
          <Icons name="typescript" />
        </a>
        <a class="p-link" href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
          <span>Sass</span>
          <Icons name="sass" />
        </a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@mixin theme-dark {
  background: #181818;

  header {
    background: inherit;
  }

  h2,
  span,
  a {
    color: #fff;
  }
}

.app {
  --padding-x: 350px;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  &.dark {
    @include theme-dark();
  }

  &.system {
    @media (prefers-color-scheme: dark) {
      @include theme-dark();
    }
  }

  header {
    width: 100%;
    height: 80px;
    padding: 0 var(--padding-x);
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $color-grey-lite;
    z-index: 1000;

    .naming {
      user-select: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      h2 {
        font-size: 1.5rem;
      }
    }

    .theme {
      user-select: none;
      cursor: pointer;
      padding: 5px;
      background: #fff;
      border: 1px solid $color-grey-lite;
      border-radius: 6px;
    }
  }

  nav {
    user-select: none;
    width: 100%;
    height: 36px;
    padding: 0 var(--padding-x);
    padding-top: 100px;

    ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      li {
        width: max-content;

        a {
          color: #000;
          text-decoration: none;
          font-size: 1.25rem;
        }

        .line {
          height: 3px;
          margin-top: 10px;
        }

        &.active {
          a {
            font-weight: 600;
          }
          .line {
            background: $color-primary;
          }
        }
      }
    }
  }

  main {
    padding: 0 var(--padding-x);
    padding-top: 80px;
  }

  footer {
    width: 100%;
    height: 160px;
    margin-top: 80px;
    padding: 0 var(--padding-x);
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    justify-content: center;

    .data {
      a {
        display: inline;
        margin: auto 25px;
        font-size: 1rem;
      }

      &.tools {
        a {
          width: max-content;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          column-gap: 5px;
        }
      }
    }
  }
}

@media screen and (min-width: 1440px) and (max-width: 1919px) {
  .app {
    --padding-x: 110px;
  }
}

@media screen and (max-width: 1439px) {
  .app {
    --padding-x: 30px;
  }
}

@media screen and (max-width: 720px) {
  .app {
    main {
      padding-top: 40px;
    }

    footer {
      padding: 0;

      .data {
        a {
          margin: auto 5px;
          font-size: 0.9rem;
        }

        &.tools {
          a {
            .p-icon {
              width: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
