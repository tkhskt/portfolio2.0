<template>
  <div class="music-container" :style="styleObject"></div>
</template>
<script>
export default {
  name: 'Music',
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
.music-container {
  position: relative;
  background-color: $color-primary;
  height: 100vh;
  &::after {
    content: '';
    position: absolute;
    display: block;
    right: calc(-1 * var(--width));
    top: 0px;
    width: 0px;
    height: 0px;
    border-bottom: solid 100vh transparent;
    border-left: solid var(--width) $color-primary;
  }
}
</style>
