// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio/'
  },
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: 'https://api.github.com'
    }
  },
  srcDir: 'src/',
  devServer: {
    port: 8000
  },
  css: ['~/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/scss/_global.scss" as *;'
        }
      }
    }
  },
  postcss: {
    plugins: { autoprefixer: {} }
  }
})
