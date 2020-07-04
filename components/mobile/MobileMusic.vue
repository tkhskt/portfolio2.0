<template>
  <div class="container">
    <div class="music">
      <h1>Music</h1>
    </div>
    <div class="vinyl-container">
      <div class="vinyl">
        <div class="black"></div>
        <div class="red"></div>
        <div class="white"></div>
      </div>
    </div>
    <div class="text-container">
      <p>
        エレクトロニカ、IDM、アンビエントなどの音楽を愛しています。<br />
        音楽をインターフェースとして、私の中にある世界の情景を発信しています。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: $color-primary;
  overflow: hidden;
  .music {
    padding: 20vmin $padding-horizontal-mobile;
    h1 {
      font-size: $font-size-extra-large-mobile;
      font-weight: normal;
      color: $color-black;
    }
  }
  .vinyl-container {
    position: absolute;
    top: 45%;
    transform: translateX(50%) translateY(-50%);
    right: 0;
    width: 65vh;
    height: 65vh;
    .vinyl {
      position: relative;
      width: 100%;
      height: 100%;
      .black {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 65vh;
        background-color: $color-black;
      }
      .red {
        position: absolute;
        width: 20vh;
        height: 20vh;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 20vh;
        background-color: $color-red;
        z-index: 2;
      }
      .white {
        position: absolute;
        width: 3vh;
        height: 3vh;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 3vh;
        background-color: $color-white;
        z-index: 4;
      }
    }
  }
  .text-container {
    position: absolute;
    bottom: 10vmin;
    padding: 0 $padding-horizontal-mobile;
    p {
      font-size: $font-size-normal-mobile;
      color: $color-black;
      line-height: $line-height-description;
      letter-spacing: $letter-spacing-description;
    }
  }
}
</style>
