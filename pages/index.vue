<template>
  <div class="container">
    <header>
      <Header class="header" />
    </header>
    <main>
      <section class="music">
        <Music />
      </section>
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Music from '~/components/Music.vue'

export default {
  components: {
    Header,
    Music
  }
}
</script>

<style scoped lang="scss">
header {
  width: 100%;
  position: fixed;
  top: 0;
}
main {
  .music {
    height: 100%;
  }
}
</style>
