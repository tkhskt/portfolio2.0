<template>
  <div class="container">
    <header>
      <Header class="header" />
    </header>
    <main>
      <div class="main-container">
        <section class="left">
          <music />
        </section>
        <section class="right">
          <transition name="technology">
            <technology v-if="!isMusicSelected" class="component-tecnology" />
          </transition>
          <transition name="player">
            <player v-if="isMusicSelected" class="component-player" />
          </transition>
        </section>
        <div class="vinyl">
          <vinyl />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '~/components/Header.vue'
import Music from '~/components/Music.vue'
import Technology from '~/components/Technology.vue'
import Player from '~/components/Player.vue'
import Vinyl from '~/components/Vinyl.vue'

export default {
  components: {
    Header,
    Music,
    Technology,
    Player,
    Vinyl
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('top', ['isMusicSelected', 'isTechnologySelected'])
  },
  watch: {},
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  top: 0;
  z-index: 999;
}

header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 800;
}
main {
  .main-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
    .left {
      position: absolute;
      width: 50%;
    }
    .right {
      position: absolute;
      right: 0;
      width: 50%;
      height: 100%;
      .component-tecnology {
        position: absolute;
        right: 0;
        z-index: 100;
      }
      .component-player {
        position: absolute;
        right: 0;
      }
      .technology-leave-active {
        transition: opacity 0.3s;
      }
      .technology-leave-to {
        opacity: 0;
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
