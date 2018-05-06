<template>
  <main>
    <app-heading :title="post.title" />
    <container>
      <row class="post">
        <column xs="12">
          <vue-markdown>{{ post.body }}</vue-markdown>
        </column>
      </row>
    </container>
  </main>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import appHeading from '~/components/elements/AppMainHeading.vue'

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
      VueMarkdown,
      appHeading
    }
  }
</script>

<style lang="scss" scoped>
  .post {
    margin: $spacer--large 0;
    line-height: 1.5;
  }
</style>
