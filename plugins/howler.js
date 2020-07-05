import Vue from 'vue'
import { Howl } from 'howler'

Vue.prototype.$howler = new Howl({
  src: [require('@/assets/mp3/tub.mp3')],
  loop: true,
  preload: true
})
require('@/assets/img/vue.png')
require('@/assets/img/android.png')
require('@/assets/img/firebase.png')
require('@/assets/img/django.png')
require('@/assets/img/go.png')
require('@/assets/img/docker.png')
