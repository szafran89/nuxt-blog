<template>
  <div>
    <h1 class="title">
      {{ post.title }}
    </h1>
    <div>
      {{ post.body }}
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: this.post.title
      }
    },
    async asyncData (context) {
      const slug = context.route.params.slug
      const post = context.store.getters.getPostBySlug(slug)
      return {
        post
      }
    }
  }
</script>
