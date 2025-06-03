// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  // Configuration des modules
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },



  // Configuration de l'application
  app: {
    head: {
      title: 'PJ-Camer - Annuaire des entreprises du Cameroun',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Trouvez les meilleures entreprises locales au Cameroun. Services, avis, et contacts en un clic !' },
        { name: 'theme-color', content: '#FCD116' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap' }
      ]
    }
  },

  // Configuration de TailwindCSS
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: '#FCD116',
            secondary: '#007A5E',
            accent: '#CE1126',
            dark: '#000000',
            light: '#FFFFFF'
          },
          fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
            heading: ['Montserrat', 'sans-serif']
          },
          borderRadius: {
            'button': '8px',
            'card': '12px'
          },
          boxShadow: {
            'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }
        }
      },
      plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
      ]
    }
  },

  // Configuration du runtime
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      appName: 'PJ-Camer',
      appVersion: '1.0.0',
      environment: process.env.NODE_ENV || 'development'
    },
    // Clés API et autres secrets
    apiSecret: process.env.API_SECRET,
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET
  },

  // Configuration du build
  build: {
    transpile: ['@headlessui/vue']
  },

  // Configuration du SSR
  ssr: true,
  
  // Configuration des types
  typescript: {
    strict: true,
    typeCheck: true
  },

  // Configuration des imports automatiques
  imports: {
    dirs: [
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
      'stores',
      'types'
    ]
  }
})
