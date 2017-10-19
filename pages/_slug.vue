<template>
  <div>
    <h1>{{ post.title }}</h1>
    <vue-markdown>{{ post.body }}</vue-markdown>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    head () {
      return {
        title: this.post.title
      }
    },
    async fetch ({ store, params }) {
      if (store.state.currentPost.slug !== params.slug) {
        await store.dispatch('getPost', params.slug)
      }
    },
    computed: {
      post () {
        return this.$store.state.currentPost
      }
    },
    components: {
      VueMarkdown
    }
  }
</script>
