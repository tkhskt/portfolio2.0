<template>
  <div>
    <header>
      <Header class="header" />
    </header>
    <nuxt />
  </div>
</template>
<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 800;
}
</style>
