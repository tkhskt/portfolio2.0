<template>
  <div
    class="music-container"
    :class="{ 'music-container-clicked': isMusicSelected }"
    :style="styleObject"
  >
    <div
      class="text-container"
      :class="{ 'text-container-clicked': isMusicSelected }"
    >
      <h1
        class="music-title"
        :class="{ blur: isHoverTechnology }"
        @click="onClickMusic"
        @mouseover="onHoverTitle"
        @mouseleave="onMouseLeaveFromTitle"
      >
        Music
      </h1>

      <p
        class="music-concept"
        :class="{ 'music-concept-clicked': isMusicSelected }"
      >
        エレクトロニカ、IDM、アンビエントなどの音楽を愛しています。<br />
        音楽をインターフェースとして、私の中にある世界の情景を発信しています。
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

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
    },
    onHoverTitle() {
      if (!this.isMusicSelected) {
        this.$store.dispatch('top/musicHovered')
      }
    },
    onMouseLeaveFromTitle() {
      this.$store.dispatch('top/leaveMouse')
    },
    onClickMusic() {
      if (!this.isMusicSelected) {
        this.$store.dispatch('top/comeFromTop')
        this.$router.push('/music')
      }

      // history.pushState(
      //   {},
      //   null,
      //   this.$route.path + '#' + encodeURIComponent('music')
      // )
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

@keyframes show-music-concept-visibility {
  to {
    height: auto;
    visibility: visible;
  }
}

@keyframes music-concept-margin {
  to {
    margin-top: 6vh;
    width: 25vw;
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
  .text-container {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: $padding-horizontal + 7vw;
    z-index: $z-index-title;
    .music-title {
      font-size: $font-size-extra-large;
      font-weight: $font-weight-light;
      user-select: none;
    }
    .music-concept {
      visibility: hidden;
      height: 0;
      width: 0;
      line-height: $line-height-description;
      letter-spacing: $letter-spacing-description;
      font-size: $font-size-normal;
    }
    .music-concept-clicked {
      animation: show-music-concept-visibility 0.5s step-end,
        show-music-concept-opacity 1s ease, music-concept-margin 0.5s step-end;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }
  .text-container-clicked {
    animation: container-up 0.5s ease;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
}

@keyframes up-index {
  to {
    z-index: 50;
  }
}

.music-container-clicked {
  animation: up-index 0.3s step-end;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.blur {
  filter: blur(4px);
  transition: filter 0.3s ease;
}
</style>
