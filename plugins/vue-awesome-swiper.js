import Vue from 'vue'
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay
} from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay])

// -------------------------------------------------
// Global use
Vue.use(getAwesomeSwiper(SwiperClass))

// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// Vue.use(VueAwesomeSwiper)
