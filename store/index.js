import Vuex from 'vuex'
import api from '../api/index'

const store = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      posts: [],
      categories: []
    },
    actions: {
      async nuxtServerInit ({ commit }, { req }) {
        const data = await api.getPosts()
        const categories = await api.getCategories()
        commit('SET_POSTS', data)
        commit('SET_CATEGORIES', categories)
      }
    },
    getters: {
      getPostBySlug: (state, getters) => (slug) => {
        return state.posts.find(post => post.slug === slug)
      }
    },
    mutations: {
      TOGGLE_MENU (state) {
        state.menuIsActive = !state.menuIsActive
      },
      SET_POSTS: (state, posts) => {
        posts.forEach(item => {
          if (item) {
            let entry = {
              title: item.fields.title,
              body: item.fields.body,
              slug: item.fields.slug,
              tags: item.fields.tags,
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
              title: item.fields.title
            }
            state.categories.push(entry)
          }
        })
      }
    }
  })
}

export default store
