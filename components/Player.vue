<template>
  <div class="player-container" :style="styleObject">
    <div
      class="player-bg"
      :class="{ 'player-container-clicked': isMusicSelected }"
    ></div>
    <div class="button-container" @click="play">
      <div class="play-button"></div>
    </div>
  </div>
</template>
<script>
import { Howl } from 'howler'
import { mapState } from 'vuex'

export default {
  name: 'Player',
  data() {
    return {
      innerWidth: window.innerWidth,
      innderHeight: window.innerHeight,
      styleObject: {
        width: '0px',
        '--width': '0px'
      },
      howl: null
    }
  },
  computed: {
    ...mapState('top', [
      'isHoverMusic',
      'isHoverTechnology',
      'isMusicSelected',
      'musicPlaying'
    ])
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.handleResize)
      this.setContainerWidth()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    this.stop()
  },
  methods: {
    setContainerWidth() {
      const updatedWidth = `${(1 / 2) * this.innerWidth -
        ((1 / 2) * this.innderHeight) / Math.tan((70 * Math.PI) / 180)}px`
      const borderWidth = `${this.innderHeight /
        Math.tan((70 * Math.PI) / 180)}px`
      this.styleObject = {
        width: updatedWidth,
        '--width': borderWidth
      }
    },
    handleResize() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.innerWidth = window.innerWidth
      this.innderHeight = window.innerHeight
      this.setContainerWidth()
    },
    play() {
      if (this.musicPlaying) {
        return
      }
      this.howl = new Howl({
        src: ['/mp3/tub.mp3'],
        loop: true,
        preload: true
      })
      this.howl.load()
      const track = this.howl.play()
      this.howl.fade(0.5, 1, 2000, track)
      this.howl.fade(0, 0.5, 2000, track)
      this.$store.dispatch('top/updateMusicPlaying', true)
    },
    stop() {
      if (this.musicPlaying) {
        this.howl.stop()
        this.$store.dispatch('top/updateMusicPlaying', false)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.player-bg {
  position: relative;
  background-color: $color-secondary;
  height: 100vh;
  z-index: 50;
  &::after {
    content: '';
    position: absolute;
    display: block;
    left: calc(-1 * var(--width));
    top: 0px;
    width: 0px;
    height: 0px;
    border-top: solid 100vh transparent;
    border-right: solid var(--width) $color-secondary;
  }
}

.button-container {
  position: absolute;
  bottom: 6vh;
  width: 100px;
  height: 100px;
  background: green;
  z-index: 200;
  right: $padding-horizontal;
}

@keyframes down-index {
  to {
    z-index: 0;
  }
}

.player-container-clicked {
  animation: down-index 0.3s step-end;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
</style>
