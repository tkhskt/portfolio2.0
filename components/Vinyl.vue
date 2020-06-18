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
    transform: rotate(180deg);
  }
}

@keyframes bg {
  50% {
    background: #655;
  }
}

.vinyl-container {
  position: relative;
  width: 88vh;
  height: 88vh;
  transform-origin: center;
  transform: rotate(20deg);
  .vinyl {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: transparent;
    background-image: linear-gradient(
      to right,
      transparent 50%,
      $color-black 0
    );

    &:before {
      content: '';
      display: block;
      margin-left: 50%;
      height: 100%;
      border-radius: 0 100% 100% 0 / 50%;
      background-color: inherit;
      transform-origin: left;
      animation: spin 1.5s linear;
      //bg3s step-end 180以上回転する時
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }

  .vinyl-label {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 24vh;
    height: 24vh;
    border-radius: 50%;
    background: transparent;
    background-image: linear-gradient(to right, transparent 50%, $color-red 0);

    &:before {
      content: '';
      display: block;
      margin-left: 50%;
      height: 100%;
      border-radius: 0 100% 100% 0 / 50%;
      background-color: inherit;
      transform-origin: left;
      animation: spin 1.5s linear;
      //bg3s step-end 180以上回転する時
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }

  .vinyl-hole {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 3vh;
    height: 3vh;
    border-radius: 50%;
    background: transparent;
    background-image: linear-gradient(
      to right,
      transparent 50%,
      $color-white 0
    );

    &:before {
      content: '';
      display: block;
      margin-left: 50%;
      height: 100%;
      border-radius: 0 100% 100% 0 / 50%;
      background-color: inherit;
      transform-origin: left;
      animation: spin 1.5s linear;
      //bg3s step-end 180以上回転する時
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }
}
</style>
