import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
      '~/assets/css/main.css',
      '~/assets/css/style.css'
  ],
  modules: ['@nuxt/ui', '@nuxt/content'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})