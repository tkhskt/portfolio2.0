<template>
  <div class="container">
    <loading class="loading" />
    <div v-if="$device.isDesktop">
      <main>
        <div class="main-container">
          <section class="left">
            <music />
          </section>
          <section class="right">
            <transition name="technology">
              <technology v-if="!isMusicSelected" class="component-tecnology" />
            </transition>
          </section>
          <div class="vinyl">
            <vinyl />
          </div>
        </div>
      </main>
    </div>
    <div v-else>
      <main>
        <mobile-top class="mobile-top mobile-component" />
        <mobile-music class="mobile-music mobile-component" />
      </main>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Music from '~/components/Music.vue'
import Technology from '~/components/Technology.vue'
import Vinyl from '~/components/Vinyl.vue'
import Loading from '~/components/Loading.vue'
import MobileTop from '~/components/mobile/MobileTop.vue'
import MobileMusic from '~/components/mobile/MobileMusic.vue'

export default {
  components: {
    Music,
    Technology,
    Vinyl,
    Loading,
    MobileTop,
    MobileMusic
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('top', [
      'isMusicSelected',
      'isTechnologySelected',
      'isHoverMusic',
      'isHoverTechnology'
    ])
  },
  watch: {},
  created() {
    this.$store.dispatch('top/clearSelection')
    this.$store.dispatch('top/updateMusicPlaying', false)
    this.$store.dispatch('top/updateMusicPause', false)
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  top: 0;
  z-index: $z-index-loading;
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
        // z-index: 50;
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
  .hide {
    display: none;
  }

  .mobile-component {
    width: 100vw;
    height: 100vh;
  }
}
</style>
