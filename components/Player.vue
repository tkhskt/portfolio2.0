<template>
  <div
    class="player-container"
    :class="{ 'player-container-clicked': isMusicSelected }"
    :style="styleObject"
  ></div>
</template>
<script>
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
      }
    }
  },
  computed: {
    ...mapState('top', ['isHoverMusic', 'isHoverTechnology', 'isMusicSelected'])
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
    }
  }
}
</script>

<style scoped lang="scss">
.player-container {
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
