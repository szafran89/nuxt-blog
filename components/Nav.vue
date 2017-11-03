<template>
  <header>
    <nav class="nav">
      <div class="nav-left">
        <nuxt-link class="nav-item" to="/">
          <img src="~/static/bulma-logo.png" alt="Bulma logo">
        </nuxt-link>
      </div>
      <div class="nav-center">
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
      </div>
      <span class="nav-toggle" :class="{'is-active': menuIsActive}" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu" :class="{'is-active': menuIsActive}">
        <nuxt-link class="nav-item" to="/">Home</nuxt-link>
        <nuxt-link
          class="nav-item"
          v-for="category in categories"
          :key="category.id"
          :to="/category/ + category.slug"
        >
          {{ category.title }}
        </nuxt-link>
        <nuxt-link class="nav-item" to="/about">About</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState([
      'menuIsActive',
      'categories'
    ]),
    methods: {
      toggleMenu () {
        this.$store.commit('TOGGLE_MENU')
      }
    }
  }
</script>

<style lang="scss">
  .nav {
    background-color: #f1f1f1;
  }
</style>
