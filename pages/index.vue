<template>
  <div class="container">
    <header>
      <Header class="header" />
    </header>
    <main>
      <div class="main-container">
        <section class="music">
          <music />
        </section>
        <section class="technology">
          <technology class="component-tecnology" />
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Music from '~/components/Music.vue'
import Technology from '~/components/Technology.vue'

export default {
  components: {
    Header,
    Music,
    Technology
  }
}
</script>

<style scoped lang="scss">
header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
}
main {
  .main-container {
    position: relative;
    .music {
      position: absolute;
      width: 50%;
    }
    .technology {
      position: absolute;
      right: 0;
      width: 50%;
      .component-tecnology {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
