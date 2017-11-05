<template>
  <div class="box">
    <div class="about">
      <h4 class="title is-4 is-spaced">About me</h4>
      <p class="content">
        Excepteur ut enim duis consequat est.Eu fugiat deserunt do incididunt dolor consectetur. Duis laboris consectetur quis consequat ullamco labore laboris irure ut sint nisi est. Reprehenderit enim laborum sunt irure ullamco non velit. Adipisicing ullamco Lorem nulla nulla proident dolore.
      </p>
    </div>
    <br>
    <div class="recent-posts">
      <h4 class="title is-4 is-spaced">Recent posts</h4>
      <post-list :posts="recentPosts" type="recent"/>
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

