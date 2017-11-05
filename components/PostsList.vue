<template>
  <div>
    <div class="box" v-for="post in posts" :key="post.slug">
      <article :class="['media', 'post', { 'post--recent': isRecentType }]">
        <figure class="media-left">
          <p class="image is-64x64">
            <img
              :src="post.featuredImage.fields.file.url"
              :alt="post.featuredImage.fields.description"
            >
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <nuxt-link class="post__link" :to="'/'+ post.slug">
              {{ post.title }}
            </nuxt-link>
            <span class="post__date" v-if="!isRecentType">
              | Added: {{ post.date | moment("from") }}
            </span>
            <br v-if="!isRecentType">
            <template v-if="!isRecentType">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </template>
          </div>
        </div>
      </article>
    </div>
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
      },
      type: {
        type: String,
        required: true,
        validator: function (value) {
          return [
            'regular',
            'recent'
          ].indexOf(value) !== -1
        }
      }
    },
    computed: {
      isRecentType () {
        return this.type === 'recent'
      }
    }
  }
</script>

<style lang="scss">
  .post {
    &__link {
      font-weight: 700;
      .post--recent & {
        display: block;
        font-size: 13px;
      }
    }
    &__date {
      font-size: 13px;
    }
  }
</style>
