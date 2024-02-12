// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components:[
    { path: '~/components/UI', pathPrefix: false },
    { path: '~/components', pathPrefix: false },
  ],

  vue: {  
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('swiper-')
    },
  },
  vite:
  {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;'
        }
      }
    },
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})