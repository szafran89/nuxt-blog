<template>
  <header class="header">
    <container>
      <row middle-xs class="header__row">
        <column xs="3">
          <nuxt-link class="logo" to="/">
            <img
              src="~/static/bulma-logo.png"
              alt="Bulma logo"
              class="logo__image"
            >
          </nuxt-link>
        </column>
        <column xs="9">
          <nav class="menu">
            <ul class="menu__wrapper">
              <li class="menu__item">
                <nuxt-link class="nav-item" to="/">Home</nuxt-link>
              </li>
              <li
                class="menu__item"
                v-for="category in categories"
                :key="category.id"
              >
                <nuxt-link :to="/category/ + category.slug">
                  {{ category.title }}
                </nuxt-link>
              </li>
              <li class="menu__item">
                <nuxt-link class="nav-item" to="/about">About</nuxt-link>
              </li>
            </ul>
          </nav>
        </column>
      </row>
    </container>
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
  .header {
    &__row {
      padding: 10px 0;
    }
  }

  .logo {
    &__image {
      width: 150px;
    }
  }

  .menu {
    &__wrapper {
      display: flex;
      justify-content: flex-end;
      list-style: none;
    }

    &__item {
      padding: 0 10px;
    }
  }

</style>
