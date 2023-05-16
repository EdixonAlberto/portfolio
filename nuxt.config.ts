const BASE_URL = '/portfolio/'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: BASE_URL,
    head: {
      title: 'Portafolio',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Portafolio de proyectos personales.'
        },
        {
          name: 'google-site-verification',
          content: 'QDso9u7EscVpGI91C9ZfWfK0GFPupviImyV_ebHEaT0'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${BASE_URL}favicon.ico`
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: `${BASE_URL}static/icons/apple-touch-icon.png`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${BASE_URL}static/icons/favicon-32x32.png`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${BASE_URL}static/icons/favicon-16x16.png`
        },
        {
          rel: 'manifest',
          href: `${BASE_URL}site.webmanifest`
        }
      ],
      noscript: [{ children: 'JavaScript is required' }]
    }
  },
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: 'https://api.github.com',
      modeDev: ''
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
