const { createClient } = require('contentful')
const apiConfig = require('./api/config')
const slugify = require('./store/slugify')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Blog App',
    titleTemplate: 'Blog Name | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Front.Love main description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: 'assets/css/buefy-overrides.scss' },
    { src: 'assets/css/main.scss' }
  ],
  loading: {
    color: '#3B8070',
    failedColor: '#FF0000'
  },
  plugins: [
    '~/plugins/buefy.js',
    '~/plugins/moment'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  router: {
    base: '/nuxt-blog/',
    middleware: 'menu'
  },
  generate: {
    routes: function () {
      const posts = createClient({
        space: apiConfig.space,
        accessToken: apiConfig.accessToken
      }).getEntries({
        content_type: apiConfig.contentTypes.posts
      })
      .then(function (entries) {
        return entries.items.map((item) => {
          return item.fields.slug + '/'
        })
      })

      const categories = createClient({
        space: apiConfig.space,
        accessToken: apiConfig.accessToken
      }).getEntries({
        content_type: apiConfig.contentTypes.categories
      })
      .then(function (entries) {
        return entries.items.map((item) => {
          return 'category/' + slugify(item.fields.title) + '/'
        })
      })

      return Promise.all([posts, categories]).then(values => {
        return values.join().split(',')
      })
    }
  },
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
