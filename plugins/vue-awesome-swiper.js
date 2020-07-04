import Vue from 'vue'
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay
} from 'swiper/js/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/css/swiper.css'

// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay])

// Global use
Vue.use(getAwesomeSwiper(SwiperClass))
