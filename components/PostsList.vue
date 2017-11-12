<template>
  <div>
    <article
      :class="['post', { 'post--recent': isRecentType }]"
      v-for="post in posts" :key="post.slug"
    >
      <div class="post__thub">
        <img
          class="post__thumb-img"
          :src="post.featuredImage.fields.file.url"
          :alt="post.featuredImage.fields.description"
        >
      </div>
      <div class="post__content">
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

<style lang="scss" scoped>
  .post {
    display: flex;
    padding-bottom: 35px;
    margin-bottom: 35px;
    border-bottom: 2px solid #f6f6f6;
    &:last-child {
      border-bottom: none;
    }

    &--recent {
        padding-bottom: 0;
        margin-bottom: 20px;
        border-bottom: none;
    }

    &__thumb {
      flex: 1 250px;
      max-width: 250px;
      .post--recent & {
        flex: 1 90px;
        max-width: 90px;
      }

      &-img {
        width: 250px;
        vertical-align: top;
        .post--recent & {
          width: 90px;
          max-width: 90px;
        }
      }
    }

    &__content {
      margin-left: 35px;
      .post--recent & {
        margin-left: 15px;
      }
    }

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
