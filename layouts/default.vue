<template>
  <div class="page-wrapper">
    <app-nav/>
    <nuxt/>
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
    & > .main-section {
      flex: 1;
    }
  }
</style>
