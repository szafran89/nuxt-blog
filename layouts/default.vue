<template>
  <div>
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

<style src="vue-flexboxgrid/dist/vue-flexboxgrid.css"/>

<style lang="scss">
  html{
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
