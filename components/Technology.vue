<template>
  <div class="technology-container" :style="styleObject">
    <p class="technology-text">Technology</p>
  </div>
</template>
<script>
export default {
  name: 'Technology',
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
.technology-container {
  position: relative;
  background-color: $color-secondary;
  height: 100vh;
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
  .technology-text {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    z-index: 40;
    font-size: $font-size-extra-large;
    font-weight: $font-weight-light;
    color: $color-white;

    right: $padding-horizontal;
    text-align: center;
    user-select: none;
  }
}
</style>
