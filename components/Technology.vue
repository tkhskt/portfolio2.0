<template>
  <div class="technology-container">
    <div
      class="technology-bg"
      :class="{ ccc: isTechnologySelected }"
      :style="styleObject"
    ></div>
    <div class="text-container">
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
        エレクトロニカ、IDM、アンビエントなどの音楽を愛しています。<br />
        音楽をインターフェースとして、私の脳内世界の情景を聴き手の脳内に映し出すべく日々制作しています。
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
        '--width': '0px'
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
        '--width': borderWidth
      }
    },
    handleResize() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.innerWidth = window.innerWidth
      this.innderHeight = window.innerHeight
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
        // this.styleObject = {
        //   width: this.styleObject.width,
        //   '--width': '0px'
        // }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes show-music-concept-opacity {
  50% {
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
    width: 32vw;
  }
}

@keyframes aaa {
  from {
    border-right: solid var(--width) $color-secondary;
  }
  to {
    border-right: solid 0 $color-secondary;
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
      text-align: right;
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
        show-technology-concept-opacity 1s ease,
        technology-concept-margin 0.5s step-end;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }
  // .technology-text {
  //   position: absolute;
  //   transform: translateY(-50%);
  //   top: 50%;
  //   z-index: 1;
  //   font-size: $font-size-extra-large;
  //   font-weight: $font-weight-light;
  //   color: $color-white;
  //   right: $padding-horizontal;
  //   text-align: center;
  //   user-select: none;
  //   transition: filter 0.3s ease;
  // }
  .blur {
    filter: blur(4px);
    transition: filter 0.3s ease;
  }
  .ccc {
    animation: move-container 1s ease 1 forwards;
  }
}
</style>
