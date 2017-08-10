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
      let post = await context.store.getters.getPostBySlug(
        context.route.params.slug
      )
      return {
        post
      }
    }
  }
</script>
