<template>
  <header>
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
        </a>
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

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">
        <nuxt-link class="nav-item" to="/">Home</nuxt-link>
        <nuxt-link class="nav-item" to="/posts">Posts</nuxt-link>
        <nuxt-link class="nav-item" to="/about">About</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
  .nav {
    background-color: #f1f1f1;
  }
</style>
