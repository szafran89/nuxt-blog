<template>
  <div class="posts-list">
    <article
      class="post posts-list__item"
      v-for="post in posts" :key="post.slug"
    >
      <div class="post__date">Added {{ post.date | moment("from") }}</div>
      <nuxt-link class="post__link" :to="'/'+ post.slug">
        {{ post.title }}
      </nuxt-link>
      <div class="post__intro">
        Lorem ipsum dolo dolor, sit amet consectetur adipisicing elit. Deleniti consequuntur deserunt ar, sit amet consectetur adipisicing elit. Deleniti consequuntur deserunt aperiam ipsa totam nisi dolore voluptates quae, ducimus hic quaerat modi? Ducimus nesciunt debitis possimus asperiores, officia expedita fugiat?
      </div>
    </article>
    <div class="box has-text-centered" v-if="!posts.length">
      No results
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      posts: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .posts-list {
    margin: 20px 0;
    &__item {
      border-bottom: 1px solid #f1f1f1;
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .post {
    padding: 20px 0;

    &__date {
      font-size: 12px;
    }

    &__link {
      display: block;
      margin: 10px 0;
      text-decoration: none;
      font-weight: bold;
      color: #000;
    }

    &__intro {
      line-height: 1.5;
    }
  }
</style>
