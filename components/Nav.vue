<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img src="~/static/bulma-logo.png" alt="Bulma logo">
          </nuxt-link>
          <div
            :class="['navbar-burger', 'burger', {'is-active': menuIsActive}]"
            @click="toggleMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-end navbar-menu" :class="{'is-active': menuIsActive}">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link
            class="navbar-item"
            v-for="category in categories"
            :key="category.id"
            :to="/category/ + category.slug"
          >
            {{ category.title }}
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
        </div>
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
