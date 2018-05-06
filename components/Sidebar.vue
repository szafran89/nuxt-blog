<template>
  <div class="sidebar">
    <div class="widget">
      <nuxt-link
        class="widget__header"
        to="/"
      >
        About me
      </nuxt-link>
      <p class="widget__content">
        <img
          class="widget__image"
          src="http://ddthemesdemo.com/pesto-blog/wp-content/uploads/sites/28/2017/10/about-widget.jpg"
        >
        Except. Duis labori velit. Adipisicing ullamco Lorem nulla nulla proident dolore.
      </p>
    </div>
    <!-- <div class="widget">
      <h4 class="widget__header is-6 has-text-centered">
        Recent posts
      </h4>
      <div class="widget__content">
        <post-list :posts="recentPosts" type="recent"/>
      </div>
    </div> -->
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
  .widget {
    margin: 40px 0;

    &__header {
      display: block;
      padding: $spacer--large;
      border: 1px solid $color-secondary;
      color: $color-secondary;
      text-decoration: none;
      text-align: center;
      margin-bottom: $spacer--large;
    }

    &__content {
      line-height: 1.5;
      text-align: center;
    }

    &__image {
      width: 100%;
      margin-bottom: $spacer--large;
    }
  }
</style>
