<template>
  <section class="main-section">
    <app-heading :title="category.title"/>
    <container>
      <row>
        <column xs="9">
          <post-list :posts="posts" />
        </column>
        <column xs="3">
          <sidebar />
        </column>
      </row>
    </container>
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
