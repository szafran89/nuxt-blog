import Vuex from 'vuex'
import api from '../api/index'

const store = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      posts: []
    },
    actions: {
      async nuxtServerInit ({ commit }, { req }) {
        const data = await api.getPosts()
        commit('SET_POSTS', data)
      }
    },
    getters: {
      getPostBySlug: (state, getters) => (slug) => {
        return state.posts.find(post => post.slug === slug)
      }
    },
    mutations: {
      TOGGLE_MENU (state) {
        console.log('change')
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
      }
    }
  })
}

export default store
