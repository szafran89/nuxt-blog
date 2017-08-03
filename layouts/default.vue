<template>
  <div>
    <app-nav></app-nav>
    <section class="section">
      <div class="container">
        <nuxt></nuxt>
      </div>
    </section class="section">
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Nav from '~/components/Nav.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      appNav: Nav,
      appFooter: Footer
    }
  }
</script>
