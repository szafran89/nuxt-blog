<template>
  <div>
    <app-nav/>
    <section class="section">
      <div class="container">
        <nuxt/>
      </div>
    </section>
    <app-footer/>
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
