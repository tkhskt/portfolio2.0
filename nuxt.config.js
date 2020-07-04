export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Keita Takahashi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'config',
        name: 'Keita Takahashi',
        content: 'thorn in my side'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'swiper/css/swiper.css',
    '@/assets/css/ress.css',
    '@/assets/css/base.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/vue-awesome-swiper', ssr: false },
    '~plugins/vue-scrollto'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-device-detect',
    'nuxt-purgecss'
  ],
  purgeCSS: {
    whitelistPatternsChildren: [/swiper/]
  },
  styleResources: {
    scss: ['@assets/css/_constants.scss']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['vue-awesome-swiper'],
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(vert|frag|glsl)$/i,
        use: ['raw-loader']
      })
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
