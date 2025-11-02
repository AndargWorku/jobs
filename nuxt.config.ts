export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'], 
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    // "@pinia/nuxt",  
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-marquee',
    '@nuxt/icon',
    '@nuxtjs/color-mode'
    // '@nuxtjs/color-mode',
  ],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode', // This will result in classes like 'dark-mode', 'light-mode' on <html>
    storageKey: 'nuxt-color-mode'
  },
//  colorMode: {
//     classSuffix: '' 
//   },
  tailwindcss: {
    configPath: 'tailwind.config.ts', 
    viewer: true,                    
  },
  //  pinia: {
  //   storesDirs: ['./store/**'],
  // },
})
