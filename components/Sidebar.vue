<template>
  <div class="sidebar">
    <div class="widget">
      <h4 class="widget__header is-6 has-text-centered">
        About me
      </h4>
      <p class="widget__content content">
        Excepteur ut enim duis consequat est. Eu fugduis consequat est.Eu fugiat deseruntiat deserunt do incididunt dolor consectetur. Duis laboris consectetur quis consequat ullamco labore laboris irure ut sint nisi est. Reprehenderit enim laborum sunt irure ullamco non velit. Adipisicing ullamco Lorem nulla nulla proident dolore.
      </p>
    </div>
    <div class="widget">
      <h4 class="widget__header is-6 has-text-centered">
        Recent posts
      </h4>
      <div class="widget__content">
        <post-list :posts="recentPosts" type="recent"/>
      </div>
    </div>
  </div>
</template>

<script>
  import postList from '~/components/PostsList.vue'

  export default {
    components: {
      postList
    },
    computed: {
      recentPosts () {
        return this.$store.getters.getRecentPosts()
      }
    }
  }
</script>

<style lang="scss">
</style>
