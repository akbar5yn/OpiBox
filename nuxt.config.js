export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  server: {
    // false,
  },

  ssr: false,

  head: {
    title: 'opibox',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/swiper/swiper-bundle.min.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://opibox.fly.dev/'
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'data'
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          logout: { url: 'auth/logout', method: 'delete' },
          user: {
            url: 'me',
            method: 'get',
            propertyName: 'data'
          }
        }
      }
    },

    redirect: {
      login: '/login',
      logout: '/',
      home: '/Beranda'
    }
  },

  router: {
    extendRoutes (routes, resolve) {
      routes.push(
        {
          name: 'Proyek Saya',
          path: '/beranda/my-project',
          component: resolve(__dirname, 'pages/Beranda/MyProject')
        },
        {
          name: 'LihatProyek',
          path: '/project/:id',
          component: resolve(__dirname, 'pages/project')
        },
        // {
        //   name: 'Notifikasi',
        //   path: '/mainpage/notifikasi',
        //   component: resolve(__dirname, 'pages/mainpage/')
        // },
        // {
        //   name: 'KirimKomentar',
        //   path: '/comments/:id',
        //   component: resolve(__dirname, 'pages/comments/AddComment')
        // },
        {
          name: 'Tim',
          path: '/teams/:id',
          component: resolve(__dirname, 'pages/teams')
        },
        {
          name: 'CreateProject',
          path: '/create-project',
          component: resolve(__dirname, 'pages/create-project')
        }
      )
    }
  },

  toast: {
    position: 'top-center',
    duration: 2000,
    theme: 'bubble'
  },


  scrollBehavior: '~/app/router.scrollBehavior.js',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  }
}
