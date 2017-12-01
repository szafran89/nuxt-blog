<template>
  <section class="main-section">
    <app-heading :title="category.title"/>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <post-list :posts="posts" type="regular"/>
          </div>
          <div class="column is-3">
            <sidebar/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import appHeading from '~/components/elements/AppMainHeading.vue'
  import sidebar from '~/components/Sidebar.vue'
  import postList from '~/components/PostsList.vue'

  export default {
    components: {
      appHeading,
      sidebar,
      postList
    },
    head () {
      return {
        title: `${this.category.title} - posts`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Posts list'
          }
        ]
      }
    },
    async asyncData (context) {
      await context.store.dispatch('getPosts')
      const posts = await context.store.getters.getPostsByCategorySlug(
        context.route.params.slug
      )
      const category = await context.store.getters.getCategoryBySlug(
        context.route.params.slug
      )
      return {
        posts,
        category
      }
    }
  }
</script>
