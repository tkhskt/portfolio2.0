<template>
  <div class="player-container" :style="styleObject">
    <div
      class="player-bg"
      :class="{ 'player-container-clicked': isMusicSelected }"
    ></div>
    <div class="button-container" @click="play">
      <div
        class="play-button"
        :class="{
          paused: musicPlaying && !musicPaused
        }"
      ></div>
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
      'musicPlaying',
      'musicPaused'
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
      if (this.musicPlaying && !this.musicPaused) {
        this.pause()
        return
      }
      if (this.howl == null) {
        this.howl = new Howl({
          src: ['/mp3/tub.mp3'],
          loop: true,
          preload: true
        })
        this.howl.load()
      }
      const track = this.howl.play()
      this.howl.fade(0.5, 1, 2000, track)
      this.howl.fade(0, 0.5, 2000, track)
      this.$store.dispatch('top/updateMusicPlaying', true)
      this.$store.dispatch('top/updateMusicPause', false)
    },
    pause() {
      this.howl.pause()
      this.$store.dispatch('top/updateMusicPause', true)
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
  width: 60px;
  height: 60px;
  z-index: 200;
  right: $padding-horizontal;
  .play-button {
    border: 0;
    background: transparent;
    width: 0;
    height: 100%;

    border-color: transparent transparent transparent $color-white;
    transition: 100ms all ease;
    cursor: pointer;

    // play state
    border-style: solid;
    border-width: 30px 0 30px 60px;

    &.paused {
      border-style: double;
      border-width: 0px 0 0px 60px;
    }

    &:hover {
      border-color: transparent transparent transparent #d4d4d4;
    }
  }
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
