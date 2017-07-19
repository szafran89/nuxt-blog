<template>
  <section class="container">
    <div>
      <h1 class="title">
        Posts
      </h1>
      <div class="box" v-for="post in posts" :key="post">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <nuxt-link :to="'/'+ post.slug">
                <strong>
                  {{ post.title }}
                </strong>
              </nuxt-link>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  head () {
    return {
      title: 'Posts',
      meta: [
        { hid: 'description', name: 'description', content: 'Posts list' }
      ]
    }
  },
  data () {
    return {
      posts: this.$store.state.posts
    }
  }
}
</script>
