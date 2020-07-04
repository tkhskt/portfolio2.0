<template>
  <div class="container">
    <div class="name-container">
      <div class="name">
        <h1>Keita Takahashi</h1>
      </div>
      <div class="title">
        <p>Mobile/Web Developer</p>
        <p>Trackmaker</p>
      </div>
    </div>
    <div class="button-container" @click="scrollToAbout">
      <div class="about-button">
        <p class="about-text">about</p>
      </div>
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
  methods: {
    scrollToAbout() {
      this.$scrollTo('#mobile-about')
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: $color-primary;
  overflow: hidden;
  .name-container {
    padding: 0 $padding-horizontal-mobile;
    h1 {
      font-size: $font-size-extra-large-mobile;
      font-weight: normal;
      color: $color-black;
    }
    .title {
      margin-top: 3vmin;
      p {
        margin-bottom: 1vmin;
        font-size: 4vmin;
      }
    }
  }
  .button-container {
    position: absolute;
    width: 50vmin;
    height: 50vmin;
    transform: translateX(50%) translateY(50%);
    bottom: 0;
    right: 0;
    .about-button {
      position: relative;
      width: 100%;
      height: 100%;
      background: $color-green;
      border-radius: 50vmin;
      .about-text {
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
        color: $color-white;
        left: 30%;
        top: 30%;
        font-size: $font-size-normal-mobile;
      }
    }
  }
}
</style>
