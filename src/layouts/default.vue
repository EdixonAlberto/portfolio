<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div class="app">
    <header>
      <div class="naming">
        <Icons name="pinea" />
        <h2>Edixon Piña</h2>
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
      <slot />
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

.app {
  width: 100vw;
  overflow-x: hidden;

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
      display: flex;
      align-items: center;
      justify-content: flex-start;

      h2 {
        font-size: 1.5rem;
      }
    }
  }

  nav {
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
