<template>
  <section class="container">
    <div>
      <h1 class="title">
        Posts
      </h1>
      <post-list :posts="posts"></post-list>
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
    fetch ({store}) {
      store.dispatch('getPosts')
    },
    computed: {
      posts () {
        return this.$store.state.posts
      }
    }
  }
</script>
