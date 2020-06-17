<template>
  <div class="container">
    <Header class="header" />
    <div>
      <h1 class="title">portfolio</h1>
      <h2 class="subtitle">my portfolio</h2>
      <div class="links"></div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
}
</style>
