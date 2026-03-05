// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  colorMode: {
    classSuffix: '',
  },
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },
  tailwindcss: {
    config: {
      darkMode: 'class',
    },
  },
})
