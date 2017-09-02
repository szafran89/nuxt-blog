<template>
  <div>
    <h1 class="title">
     {{ post.title }}
    </h1>
    <div v-html="post.body"></div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: this.post.title
      }
    },
    fetch ({ store, params }) {
      if (store.state.currentPost.slug !== params.slug) {
        store.dispatch('getPost', params.slug)
      }
    },
    computed: {
      post () {
        return this.$store.state.currentPost
      }
    }
  }
</script>
