<template>
  <main>
    <div class="banner">
      <img src="~/static/Screenshot at kwi 27 01-30-35.png" alt="">
    </div>
    <container>
      <row>
        <column xs="4" class="home-box">
          <nuxt-link class="home-box__link" to="/about">
            <img
              class="home-box__image"
              src="http://ddthemesdemo.com/pesto-blog/wp-content/themes/pesto-blog/images/promo1.jpg"
              alt=""
            >
          </nuxt-link>
        </column>
        <column xs="4" class="home-box">
          <nuxt-link class="home-box__link" to="/category">
            <img
              class="home-box__image"
              src="http://ddthemesdemo.com/pesto-blog/wp-content/themes/pesto-blog/images/promo2.jpg"
              alt=""
            >
          </nuxt-link>
        </column>
        <column xs="4" class="home-box">
          <nuxt-link class="home-box__link" to="/category">
            <img
              class="home-box__image"
              src="http://ddthemesdemo.com/pesto-blog/wp-content/themes/pesto-blog/images/promo3.jpg"
              alt=""
            >
          </nuxt-link>
        </column>
      </row>
      <row>
        <column xs="9">
          <post-list :posts="posts" />
        </column>
        <column xs="3">
          <sidebar />
        </column>
      </row>
    </container>
  </main>
</template>

<script>
  import postList from '~/components/PostsList.vue'
  import sidebar from '~/components/Sidebar.vue'

  export default {
    components: {
      postList,
      sidebar
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

<style lang="scss" scoped>
  .banner img {
    width: 100%;
    vertical-align: top;
    margin-bottom: $spacer--small;
  }

  .home-box {
    padding: $spacer--small;

    &__image {
      width: 100%;
    }
  }
</style>
