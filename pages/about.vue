<template>
  <div class="container">
    <div class="curtain"></div>
    <div class="text-container">
      <div class="name-container">
        <h1>Keita Takahashi</h1>
        <div class="me-title">
          <p>
            Mobile/Web Developer <br />
            Trackmaker
          </p>
        </div>
      </div>
      <div class="description-container">
        <p>
          高橋啓太：東京都在住<br />
          地元・北海道の大学を卒業後、大手ファッションECサービスのAndroidアプリケーション開発に従事。<br />
          個人ではMobile/Webアプリケーションの開発の傍ら、音楽制作も行っている。
        </p>
        <div class="link-container">
          <div class="github link">
            <a
              class="link-text"
              href="https://github.com/tkhskt"
              target="_blank"
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
          <div class="mail link">
            <a
              class="link-text"
              href="mailto:luckymortality@gmail.com"
              target="_blank"
              >Mail</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  data() {
    return {
      fromTop: true
    }
  },
  computed: {
    ...mapState('top', [
      'isMusicSelected',
      'isTechnologySelected',
      'comeFromTop'
    ])
  },
  watch: {},
  created() {
    this.$store.dispatch('top/selectMusic')
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@keyframes select-link {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}

@keyframes opacity-animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.loading {
  position: fixed;
  top: 0;
  z-index: 999;
}
.container {
  background-color: $color-primary;
  width: 100%;
  height: 100vh;

  // .curtain {
  //   position: absolute;
  //   height: 100%;
  //   right: 50%;
  //   top: 0;
  //   background-color: $color-primary;
  //   z-index: 4;
  //   // animation: curtain-animation 1.5s linear forwards 1;
  // }
  .text-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    padding: 0 $padding-horizontal;
    animation: opacity-animation 1s ease forwards 1;
    .name-container {
      margin: auto 0;
      h1 {
        font-size: $font-size-extra-large;
        font-weight: normal;
        color: $color-black;
      }
      .me-title {
        margin-top: 10px;
        line-height: 2;
        letter-spacing: $letter-spacing-description;
        font-size: $font-size-normal;
      }
    }
    .description-container {
      margin: auto 0;
      padding-top: 10vmin;
      width: 25vw;
      max-width: $max-width-text-container;
      min-width: 350px;
      line-height: $line-height-description;
      letter-spacing: $letter-spacing-description;
      font-size: $font-size-normal;
      color: $color-black;
    }
    .link-container {
      margin-top: 40px;
      .link {
        position: relative;
        .link-text {
          display: inline-block;
          font-size: $font-size-small;
          color: $color-black;
          user-select: none;
          text-decoration: none;
          width: 5vw;
          padding: 0.45vmin 0;
          &::before {
            position: absolute;
            content: '';
            width: 0.3vw;
            height: 0;
            left: -1vw;
            bottom: 0;
            background-color: $color-green;
            transition: height 0.2s ease;
          }
          &:hover::before {
            position: absolute;
            content: '';
            width: 0.3vw;
            height: 100%;
            left: -1vw;
            top: 0;
            background-color: $color-green;
            transition: height 0.2s ease;
            // animation: select-link 0.2s ease forwards 1;
          }
        }
      }
    }
  }
}
</style>
