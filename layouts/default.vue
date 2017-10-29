<template>
  <div class="page-wrapper">
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

<style lang="scss">
  .page-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    & > .section {
      flex: 1;
    }
  }
</style>
