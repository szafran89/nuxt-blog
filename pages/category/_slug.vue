<template>
  <section>
    <h1 class="page-heading">
      <div class="container">
        {{ category.title }}
      </div>
    </h1>
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
  import sidebar from '~/components/Sidebar.vue'
  import postList from '~/components/PostsList.vue'

  export default {
    components: {
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

<style lang="scss" scoped>
  .page-heading {
    margin-bottom: 0;
    padding: 35px 0;
    font-size: 2rem;
    font-weight: 300;
    color: #000;
    background-color: #f6f6f6;
  }
</style>
