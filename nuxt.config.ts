// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
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
