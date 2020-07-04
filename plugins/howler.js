import Vue from 'vue'
import { Howl } from 'howler'

Vue.prototype.$howler = new Howl({
  src: [require('@/assets/mp3/tub.mp3')],
  loop: true,
  preload: true
})
