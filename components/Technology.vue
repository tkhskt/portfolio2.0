<template>
  <div class="technology-container">
    <div
      class="technology-bg"
      :class="{ 'move-container': isTechnologySelected }"
      :style="styleObject"
    >
      <div class="triangle" :class="{ shrink: isTechnologySelected }"></div>
    </div>
    <div
      class="text-container"
      :class="{ 'text-container-clicked': isTechnologySelected }"
    >
      <h1
        class="technology-title"
        :class="{ blur: isHoverMusic }"
        @click="onClickTechnology"
        @mouseover="onHoverTitle"
        @mouseleave="onMouseLeaveFromTitle"
      >
        <span
          class="label"
          :class="{ 'label-expand': isHoverTechnology }"
        ></span>
        <span class="line" :class="{ 'line-expand': isHoverTechnology }"></span>
        Technology
      </h1>
      <p
        class="technology-concept"
        :class="{ 'technology-concept-clicked': isTechnologySelected }"
      >
        モバイルやウェブの開発をしています。<br />
        技術を用いて日常の様々な課題の解決方法や、新しい体験について日々研究しています。
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Technology',
  data() {
    return {
      innerWidth: window.innerWidth,
      innderHeight: window.innerHeight,
      styleObject: {
        width: '0px',
        '--width': '0px',
        '--w': '0px'
      }
    }
  },
  computed: {
    ...mapState('top', [
      'isHoverMusic',
      'isHoverTechnology',
      'isTechnologySelected'
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
  },
  methods: {
    setContainerWidth() {
      const updatedWidth = `${(1 / 2) * this.innerWidth -
        ((1 / 2) * this.innderHeight) / Math.tan((70 * Math.PI) / 180)}px`
      const borderWidth = `${this.innderHeight /
        Math.tan((70 * Math.PI) / 180)}px`
      this.styleObject = {
        width: updatedWidth,
        '--width': borderWidth,
        '--w': updatedWidth
      }
    },
    handleResize() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.innerWidth = window.innerWidth
      this.innderHeight = window.innerHeight
      if (this.isTechnologySelected) {
        return
      }
      this.setContainerWidth()
    },
    onHoverTitle() {
      if (!this.isTechnologySelected) {
        this.$store.dispatch('top/technologyHovered')
      }
    },
    onMouseLeaveFromTitle() {
      this.$store.dispatch('top/leaveMouse')
    },
    onClickTechnology() {
      if (!this.isTechnologySelected) {
        this.$store.dispatch('top/comeFromTop')
        this.$router.push('/technology')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes show-technology-concept-opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes show-technology-concept-visibility {
  to {
    height: auto;
    width: 25vw;
    visibility: visible;
  }
}

@keyframes technology-concept-margin {
  to {
    margin-top: 6vh;
  }
}

@keyframes clear {
  to {
    transform: rotate(180deg);
  }
}

@keyframes container-up {
  to {
    transform: translateY(0);
    top: 14vh;
    left: $padding-horizontal;
  }
}

@keyframes expand {
  from {
    width: 0;
  }
  to {
    width: 120%;
  }
}

@keyframes shrink {
  from {
    width: 120%;
  }
  to {
    width: 0;
  }
}

@keyframes move-container {
  to {
    width: 32vw + $padding-horizontal;
  }
}

@keyframes move-triangle {
  from {
    border-right: solid var(--width) $color-secondary;
  }
  to {
    border-right: solid 0 $color-secondary;
  }
}

@keyframes move-text-container {
  from {
    width: 23vw; // FIXME いい感じにしたい
  }
  to {
    transform: translateY(0);
    width: 25vw;
    top: 14vh;
  }
}

.technology-container {
  position: relative;
  background-color: $color-secondary;
  height: 100vh;
  .technology-bg {
    position: relative;
    background-color: $color-secondary;
    height: 100vh;
    z-index: 45;
    .triangle {
      position: absolute;
      display: block;
      right: 100%;
      top: 0px;
      width: 0px;
      height: 0px;
      border-top: solid 100vh transparent;
      border-right: solid var(--width) $color-secondary;
    }
    .shrink {
      animation: move-triangle 1.5s ease 1 forwards;
    }
  }
  .text-container {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: $padding-horizontal;
    z-index: $z-index-title;
    color: $color-white;
    .technology-title {
      position: relative;
      font-size: $font-size-extra-large;
      font-weight: $font-weight-light;
      user-select: none;
      // text-align: left;
      .label {
        position: absolute;
        display: inline-block;
        height: 140%;
        background-color: $color-black;
        right: -10%;
        top: -20%;
        z-index: -1;
        animation: shrink 0.3s ease 1 forwards;
      }
      .label-expand {
        right: auto;
        left: -10%;
        animation: expand 0.3s ease 1 forwards;
      }
      .line {
        position: absolute;
        display: inline-block;
        height: 5%;
        background-color: $color-green;
        right: -10%;
        bottom: -20%;
        z-index: -1;
        animation: shrink 0.3s ease 1 forwards;
      }
      .line-expand {
        left: -10%;
        right: auto;
        animation: expand 0.5s ease 1 forwards;
      }
    }
    .technology-concept {
      visibility: hidden;
      height: 0;
      width: 0;
      line-height: $line-height-description;
      letter-spacing: $letter-spacing-description;
    }
    .technology-concept-clicked {
      animation: show-technology-concept-visibility 0.5s step-end,
        show-technology-concept-opacity 0.5s ease 0.5s,
        technology-concept-margin 0.5s step-end;
      // animation-delay: 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }
  .text-container-clicked {
    animation: move-text-container 0.5s ease 1 forwards;
  }
  .blur {
    filter: blur(4px);
    transition: filter 0.3s ease;
  }
  .move-container {
    animation: move-container 1s ease 1 forwards;
  }
}
</style>
