import Vuex from 'vuex'
import api from '../api/index'
import slugify from './slugify'
const store = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      posts: [],
      currentPost: {},
      categories: []
    },
    actions: {
      async nuxtServerInit ({ commit }, {store, isClient, isServer, route, params}) {
        if (isServer && (route.name === 'index' || route.name === 'category-slug')) {
          const data = await api.getPosts()
          commit('SET_POSTS', data)
        }
        if (isServer && params.slug && route.name === 'slug') {
          const post = await api.getPostBySlug(params.slug)
          commit('SET_POST', post)
        }
        const categories = await api.getCategories()
        commit('SET_CATEGORIES', categories)
      },
      async getPosts ({commit, state}) {
        if (state.posts.length === 0) {
          const posts = await api.getPosts()
          commit('SET_POSTS', posts)
        }
      },
      async getPost ({commit, store}, slug) {
        const post = await api.getPostBySlug(slug)
        commit('SET_POST', post)
      }
    },
    getters: {
      getPostsByCategorySlug: (state) => (slug) => {
        return state.posts.filter(post => {
          return post.categories.find(category => slugify(category.fields.title) === slug) !== undefined
        })
      },
      getFeaturedCategories: (state) => (slug) => {
        return state.categories.filter(category => {
          return category.featured
        })
      },
      getCategoryBySlug: (state) => (slug) => {
        return state.categories.find(category => category.slug === slug)
      }
    },
    mutations: {
      TOGGLE_MENU (state) {
        state.menuIsActive = !state.menuIsActive
      },
      SET_POSTS: (state, posts) => {
        state.posts = []
        posts.forEach(item => {
          if (item) {
            let entry = {
              title: item.fields.title,
              slug: item.fields.slug,
              body: item.fields.body,
              date: item.fields.date,
              featuredImage: item.fields.featuredImage,
              categories: item.fields.category
            }
            state.posts.push(entry)
          }
        })
      },
      SET_CATEGORIES: (state, categories) => {
        categories.forEach(item => {
          if (item) {
            let entry = {
              id: item.sys.id,
              title: item.fields.title,
              slug: slugify(item.fields.title),
              featured: item.fields.featured
            }
            state.categories.push(entry)
          }
        })
      },
      SET_POST: (state, post) => {
        state.currentPost = {
          id: post.sys.id,
          title: post.fields.title,
          slug: post.fields.slug,
          body: post.fields.body,
          date: post.fields.date,
          featuredImage: post.fields.featuredImage,
          categories: post.fields.category
        }
      }
    }
  })
}

export default store
