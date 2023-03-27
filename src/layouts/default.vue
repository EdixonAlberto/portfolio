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
          <NuxtLink to="/">Projects</NuxtLink>
          <div class="line"></div>
        </li>
      </ul>
    </nav>

    <main>
      <slot :theme="theme" />
    </main>

    <footer>
      <div class="data">
        <span>(Creado por Edixon Piña)</span>
        <a class="p-link" href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a class="p-link" href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div class="tools">
        <a class="p-link" href="#" target="_blank" rel="noopener noreferrer">Nuxt3</a>
        <a class="p-link" href="#" target="_blank" rel="noopener noreferrer">TypeScript</a>
        <a class="p-link" href="#" target="_blank" rel="noopener noreferrer">GitHubAction</a>
        <a class="p-link" href="#" target="_blank" rel="noopener noreferrer">GitHubPage</a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
$padding-x: 360px;

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
  width: 100vw;
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
    padding: 0 $padding-x;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $color-grey-lite;

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
    padding: 0 $padding-x;
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
    padding: 0 $padding-x;
    padding-top: 80px;
  }

  footer {
    width: 100%;
    height: 160px;
    margin-top: 80px;
    padding: 0 $padding-x;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    justify-content: center;

    .data,
    .tools {
      span,
      a {
        margin: 0 25px;
        font-size: 1.25rem;
      }
    }
  }
}
</style>
