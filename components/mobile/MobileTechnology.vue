<template>
  <div class="container">
    <!-- <div class="filter"></div> -->

    <div class="technology">
      <h1>Technology</h1>
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
        モバイルやウェブの開発をしています。
        <br />様々な技術を用いて、課題解決や新しい体験の探求をしています。
      </p>
    </div>
    <swiper ref="swiper" class="slide-container" :options="swiperOptions">
      <swiper-slide class="content">
        <div class="content-img vue"></div>
      </swiper-slide>
      <swiper-slide class="content">
        <div class="content-img android"></div>
      </swiper-slide>
      <swiper-slide class="content">
        <div class="content-img firebase"></div>
      </swiper-slide>
      <swiper-slide class="content">
        <div class="content-img django"></div>
      </swiper-slide>
      <swiper-slide class="content">
        <div class="content-img go"></div>
      </swiper-slide>
      <swiper-slide class="content">
        <div class="content-img docker"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        speed: 500,
        centeredSlides: false,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    }
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
  background-color: $color-secondary;
  .filter {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background: #252627;
    opacity: 0.4;
    z-index: 3;
  }
  .technology {
    position: absolute;
    z-index: 5;
    transform: translateX(-50%);
    left: 50%;
    width: 100%;
    padding: 20vmin $padding-horizontal-mobile;
    h1 {
      font-size: $font-size-extra-large-mobile;
      font-weight: normal;
      color: $color-white;
    }
  }
  .text-container {
    position: absolute;
    bottom: 10vmin;
    width: 100%;
    padding: 0 $padding-horizontal-mobile;
    z-index: 5;
    p {
      font-size: $font-size-normal-mobile;
      color: $color-white;
      line-height: $line-height-description;
      letter-spacing: $letter-spacing-description;
    }
  }
  .slide-container {
    width: 100vw;
    height: 100vh;
  }
  .content {
    .content-img {
      height: 100%;
      width: 100%;
      background-size: contain;
      background-position: center;
    }
    .vue {
      background-image: url('~assets/img/vue.png');
    }
    .android {
      background-image: url('~assets/img/android.png');
    }
    .firebase {
      background-image: url('~assets/img/firebase.png');
    }
    .django {
      background-image: url('~assets/img/django.png');
    }
    .go {
      background-image: url('~assets/img/go.png');
    }
    .docker {
      background-image: url('~assets/img/docker.png');
    }
  }
}
</style>
