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
    async asyncData (context) {
      const slug = context.route.params.slug
      const post = context.store.getters.getPostBySlug(slug)
      return {
        post
      }
    }
  }
</script>
