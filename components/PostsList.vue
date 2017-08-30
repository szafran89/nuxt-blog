<template>
  <div>
    <div class="box" v-for="post in posts" :key="post.slug">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <nuxt-link :to="'/'+ post.slug">
              <strong>
                {{ post.title }}
              </strong>
            </nuxt-link>
            |
            <span class="post-date">
              Added: {{ post.date | moment("from") }}
            </span>
            <br>
            {{ truncate(post.body) }}
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['posts'],
    methods: {
      truncate: string => `${string.replace(/<(?:.|\n)*?>/gm, '').substring(0, 140)}...`
    }

  }
</script>

<style>
  .post-date {
    font-size: 12px;
  }
</style>
