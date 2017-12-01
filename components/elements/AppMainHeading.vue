<template>
  <h1 class="main-heading">
    <div class="container">
      {{ title }}
    </div>
  </h1>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .main-heading {
    margin-bottom: 0;
    padding: 35px 0;
    font-size: 2rem;
    font-weight: 300;
    color: #000;
    background-color: #f6f6f6;
  }
</style>
