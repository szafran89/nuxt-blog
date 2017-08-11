const { createClient } = require('contentful')
const apiConfig = require('./api/config')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Blog App',
    titleTemplate: 'Front.Love | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Front.Love main description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['assets/main.css'],
  loading: { color: '#3B8070' },
  plugins: ['~/plugins/buefy.js'],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/icon'
  ],
  router: {
    // base: '/nuxt-blog/',
    middleware: 'menu'
  },
  generate: {
    routes: function () {
      return createClient({
        space: apiConfig.space,
        accessToken: apiConfig.accessToken
      }).getEntries({
        content_type: apiConfig.contentTypes.posts
      })
      .then(function (entries) {
        return entries.items.map((item) => {
          return item.fields.slug
        })
      })
    }
  }
}
