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
        <div class="vinyl">
          <vinyl />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Music from '~/components/Music.vue'
import Technology from '~/components/Technology.vue'
import Vinyl from '~/components/Vinyl.vue'

export default {
  components: {
    Header,
    Music,
    Technology,
    Vinyl
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
    height: 100vh;
    .music {
      position: absolute;
      width: 50%;
    }
    .technology {
      position: absolute;
      right: 0;
      width: 50%;
      height: 100%;
      .component-tecnology {
        position: absolute;
        right: 0;
      }
    }
    .vinyl {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    }
  }
}
</style>
