<template>
  <section class="container">
    <div>
      <h1 class="title">
        Featured categories
      </h1>
      <div class="columns">
        <div
          class="column"
          v-for="category in featuredCategories"
          :key="category.id"
        >
          <nuxt-link class="box nav-item" :to="/category/ + category.slug">
            {{ category.title }}
          </nuxt-link>
        </div>
      </div>
      <h1 class="title">
        Posts
      </h1>
      <post-list :posts="posts" type="regular"/>
    </div>
  </section>
</template>

<script>
  import postList from '~/components/PostsList.vue'

  export default {
    components: {
      postList
    },
    head () {
      return {
        title: 'Posts',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Posts list'
          }
        ]
      }
    },
    async fetch ({store}) {
      await store.dispatch('getPosts')
    },
    computed: {
      posts () {
        return this.$store.state.posts
      },
      featuredCategories () {
        return this.$store.getters.getFeaturedCategories()
      }
    }
  }
</script>
