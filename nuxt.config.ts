// https://nuxt.com/docs/api/configuration/nuxt-config

const siteUrl = 'https://www.benjamin-heath.com'
const siteName = 'Ben Heath'
const siteDescription = 'Boston-based software engineer and Engineering Manager at Recharge, leading the team behind storefront widgets, the Merchant Portal, and Customer Portals.'
const siteImage = `${siteUrl}/og-card.png`

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  css: ['~/assets/main.css'],

  runtimeConfig: {
    public: {
      siteUrl,
      siteName,
      siteDescription,
      siteImage
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: siteName,
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteDescription },
        { name: 'author', content: siteName },
        { property: 'og:site_name', content: siteName },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: siteName },
        { property: 'og:description', content: siteDescription },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: siteImage },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Ben Heath — software engineer and Engineering Manager at Recharge' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteName },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: siteImage }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
        { rel: 'icon', type: 'image/png', href: '/icon.png' },
        { rel: 'apple-touch-icon', href: '/icon.png' }
      ]
    }
  },

  tailwindcss: {
    configPath: '~/tailwind.config.js'
  }
})
