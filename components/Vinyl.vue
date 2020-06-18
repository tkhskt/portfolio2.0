<template>
  <div class="vinyl-container">
    <div class></div>
    <div :class="{ vinyl_label: hover }"></div>
    <div :class="{ vinyl_hole: hover }"></div>
  </div>
</template>
<script>
export default {
  name: 'Vinyl',
  data() {
    return {}
  },
  props: {
    hover: Boolean
  },
  watch: {},
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
@keyframes spin {
  to {
    transform: rotate(180deg) translate3d(0, 0, 0);
  }
}

@mixin LeftParent($radius, $color) {
  position: absolute;
  width: $radius;
  height: $radius;
  transform-origin: center;
  border-radius: 50%;
  background: transparent;
  background-image: linear-gradient(to right, transparent 50%, $color 0);
}

@mixin LeftBefore($color) {
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: $color;
  transform-origin: left;
  animation: spin 0.3s ease;
  //bg3s step-end 180以上回転する時
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.vinyl-container {
  position: relative;
  width: 88vh;
  height: 88vh;
  transform-origin: center;
  transform: rotate(20deg) translate3d(0, 0, 0);
  .vinyl {
    position: absolute;
    left: 0;
    @include LeftParent(100%, $color-black);
    &:before {
      @include LeftBefore($color-black);
    }
  }

  .vinyl_label {
    position: absolute;
    transform: translate(-50%, -50%);
    left: calc(50% + 1px);
    top: 50%;
    @include LeftParent(24vh, $color-red);
    &:before {
      @include LeftBefore($color-red);
    }
  }

  .vinyl_hole {
    position: absolute;
    transform: translate(-50%, -50%);
    left: calc(50% + 1px);
    top: 50%;
    @include LeftParent(3vh, $color-white);
    &:before {
      @include LeftBefore($color-white);
    }
  }
}
</style>
