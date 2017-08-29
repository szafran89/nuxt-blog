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
            <br>
            {{ post.intro }}
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['posts']
  }
</script>
