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
        <br />技術を用いた日常の様々な課題の解決方法や、新しい体験について研究しています。
      </p>
    </div>
    <swiper ref="swiper" class="slide-container" :options="swiperOptions">
      <swiper-slide class="content"
        ><img src="~/assets/img/vue.png"
      /></swiper-slide>
      <swiper-slide class="content"
        ><img src="~/assets/img/android.png"
      /></swiper-slide>
      <swiper-slide class="content"
        ><img src="~/assets/img/firebase.png"
      /></swiper-slide>
      <swiper-slide class="content"
        ><img src="~/assets/img/django.png"
      /></swiper-slide>
      <swiper-slide class="content"
        ><img src="~/assets/img/go.png"
      /></swiper-slide>
      <swiper-slide class="content"
        ><img src="~/assets/img/docker.png"
      /></swiper-slide>
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
@import '@/assets/css/swiper.min.css';
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
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
    img {
      height: 100%;
      width: 100%;
      object-position: center;
      object-fit: contain;
    }
  }
}
</style>
