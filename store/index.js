import Vuex from 'vuex'
import api from '../api/index'

const store = () => {
  return new Vuex.Store({
    state: {
      posts: []
    },
    actions: {
      async nuxtServerInit ({ commit }, { req }) {
        const data = await api.getPosts()
        commit('SET_POSTS', data)
      }
    },
    mutations: {
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
