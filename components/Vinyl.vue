<template>
  <div class="vinyl-container">
    <div class="vinyl"></div>
    <div class="vinyl-label"></div>
    <div class="vinyl-hole"></div>
  </div>
</template>
<script>
export default {
  name: 'Vinyl',
  data() {
    return {}
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

@mixin parent($radius, $color) {
  position: absolute;
  width: $radius;
  height: $radius;
  transform-origin: center;
  border-radius: 50%;
  background: transparent;
  background-image: linear-gradient(to right, transparent 50%, $color 0);
}

@mixin before($color) {
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: $color;
  transform-origin: left;
  animation: spin 1.5s linear;
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
    @include parent(100%, $color-black);
    &:before {
      @include before($color-black);
    }
  }

  .vinyl-label {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    @include parent(24vh, $color-red);
    &:before {
      @include before($color-red);
    }
  }

  .vinyl-hole {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    @include parent(3vh, $color-white);
    &:before {
      @include before($color-white);
    }
  }
}
</style>
