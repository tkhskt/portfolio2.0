<template>
  <div class="container">
    <div class="main-content">
      <div class="name">
        <h1>Keita<br />Takahashi</h1>
        <div class="title">
          <p>Mobile/Web Developer</p>
          <p>Trackmaker</p>
        </div>
      </div>
      <div class="text-container">
        <p>
          高橋啓太：東京都在住<br />
          地元・北海道の大学を卒業後、大手ファッションECサービスのAndroidアプリケーション開発に従事。<br />
          個人ではMobile/Webアプリケーションの開発の傍ら、音楽制作も行っている。
        </p>
      </div>
      <div class="link-container">
        <div class="github link">
          <a class="link-text" href="https://github.com/tkhskt" target="_blank"
            >GitHub</a
          >
        </div>
        <div class="soundcloud link">
          <a
            class="link-text"
            href="https://soundcloud.com/gericass"
            target="_blank"
            >SoundCloud</a
          >
        </div>
        <div class="twitter link">
          <a
            class="link-text"
            href="https://twitter.com/gericass"
            target="_blank"
            >Twitter</a
          >
        </div>
      </div>
    </div>
    <div class="button-container">
      <div class="top-button" @click="scrollToTop">
        <div class="top-text">
          top
        </div>
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
    scrollToTop() {
      this.$scrollTo('#mobile-top')
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
  .main-content {
    max-height: 100%;
    width: 100%;
    padding: 10vmin 0;
    .name {
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
    .text-container {
      padding: 0 $padding-horizontal-mobile;
      margin-top: 15vmin;
      p {
        font-size: $font-size-normal-mobile;
        color: $color-black;
        line-height: $line-height-description;
        letter-spacing: $letter-spacing-description;
      }
    }
    .link-container {
      padding: 0 $padding-horizontal-mobile;
      margin-top: 10vmin;
      .link {
        .link-text {
          display: inline-block;
          font-size: $font-size-normal-mobile;
          color: $color-black;
          user-select: none;
          text-decoration: none;
          width: 5vw;
          margin-bottom: 3vmin;
        }
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
    .top-button {
      position: relative;
      width: 100%;
      height: 100%;
      background: $color-red;
      border-radius: 50vmin;
      .top-text {
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
