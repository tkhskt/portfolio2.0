<template>
  <div class="skill-container">
    <div id="tech-container">
      <canvas ref="canvas" class="tech-canvas"></canvas>
      <div class="progress-cotnainer">
        <p>skill level</p>
        <div class="progress-bar" :style="currentLevel"></div>
      </div>
    </div>
    <div class="slider-container">
      <div
        class="left-arrow-container arrow-container"
        @click="changePreviousSkill"
      >
        <div class="arrow"></div>
      </div>
      <p class="skill-text"></p>
      <div
        class="right-arrow-container arrow-container"
        @click="changeNextSkill"
      >
        <div class="arrow"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import baffle from 'baffle'
import ArtworkGL from './artwork/ArtworkGL'

export default {
  name: 'Skill',
  data() {
    return {
      innerWidth: window.innerWidth,
      innderHeight: window.innerHeight,
      skills: [
        {
          name: 'Vue.js',
          level: '60',
          img: require('@/assets/img/vue.png')
        },
        {
          name: 'Android',
          level: '90',
          img: require('@/assets/img/android.png')
        },
        {
          name: 'firebase',
          level: '78',
          img: require('@/assets/img/firebase.png')
        },
        {
          name: 'django',
          level: '70',
          img: require('@/assets/img/django.png')
        },
        {
          name: 'Go(Server)',
          level: '65',
          img: require('@/assets/img/go.png')
        },
        {
          name: 'Docker',
          level: '70',
          img: require('@/assets/img/docker.png')
        }
      ],
      currentLevel: {
        '--level': ''
      },
      currentDisplaySkill: {
        index: 0,
        name: '',
        level: '',
        img: ''
      }
    }
  },
  computed: {
    ...mapState('top', [
      'isHoverMusic',
      'isHoverTechnology',
      'isTechnologySelected'
    ])
  },
  watch: {},
  created() {
    this.currentDisplaySkill = {
      index: 0,
      name: 'Vue.js',
      level: '60',
      img: require('@/assets/img/vue.png')
    }
    this.currentLevel['--level'] = this.currentDisplaySkill.level + '%'
  },
  mounted() {
    this.artworkGL = new ArtworkGL({
      $canvas: this.$refs.canvas,
      img: require('@/assets/img/vue.png')
    })
    this.baffle = baffle('.skill-text')
    this.baffle.text((currentText) => this.currentDisplaySkill.name)
    this.baffle.reveal(500)
  },
  beforeDestroy() {
    this.artworkGL.destroy()
    this.artworkGL = null
  },
  methods: {
    changePreviousSkill() {
      let nextIndex = this.currentDisplaySkill.index
      if (nextIndex === 0) {
        nextIndex = this.skills.length - 1
      } else {
        nextIndex = this.currentDisplaySkill.index - 1
      }
      this.currentDisplaySkill = {
        index: nextIndex,
        name: this.skills[nextIndex].name,
        level: this.skills[nextIndex].level,
        img: this.skills[nextIndex].img
      }
      this.currentLevel['--level'] = this.currentDisplaySkill.level + '%'
      this.artworkGL.changeImg(this.currentDisplaySkill.img)
      this.startBaffle(this.currentDisplaySkill.name)
    },
    changeNextSkill() {
      let nextIndex = this.currentDisplaySkill.index
      if (nextIndex === this.skills.length - 1) {
        nextIndex = 0
      } else {
        nextIndex = this.currentDisplaySkill.index + 1
      }
      this.currentDisplaySkill = {
        index: nextIndex,
        name: this.skills[nextIndex].name,
        level: this.skills[nextIndex].level,
        img: this.skills[nextIndex].img
      }
      this.currentLevel['--level'] = this.currentDisplaySkill.level + '%'
      this.artworkGL.changeImg(this.currentDisplaySkill.img)
      this.startBaffle(this.currentDisplaySkill.name)
    },
    startBaffle(text) {
      this.baffle.text((currentText) => text)
      this.baffle.reveal(500)
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.skill-container {
  opacity: 0;
  animation: appear 0.5s ease 1 forwards;
  animation-delay: 1s;
  .progress-cotnainer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 38vh;
    p {
      user-select: none;
      color: $color-black;
    }
    .progress-bar {
      position: relative;
      margin-top: 10px;
      height: 3vmin;
      width: 20vw;
      background-color: $color-gray;
      border-radius: 1.5vmin;
      &::before {
        position: absolute;
        content: '';
        height: 100%;
        width: var(--level);
        top: 0;
        left: 0;
        border-radius: 1.5vmin;
        background-color: $color-green;
        transition: width 0.5s ease;
      }
    }
  }
  .slider-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    bottom: 18vh;
    .arrow-container {
      width: calc(4vmin * 0.76);
      height: calc(4vmin * 1.28);
    }
    .arrow {
      border-radius: 2.5px;
      height: 5px;
      width: 4vmin;
      max-width: 70px;
      background-color: $color-green;
      position: relative;
      top: 50%;
      transform-origin: left center;
      transform: rotate(-40deg) translateX(-1.5px) translateY(-1.5px);
      &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        left: 0;
        top: 0;
        border-radius: 2.5px;
        background-color: $color-green;
        transform-origin: left center;
        transform: rotate(80deg) translateX(-1.5px) translateY(-1.5px);
      }
    }
    .right-arrow-container {
      transform: rotate(180deg);
    }
    .skill-text {
      font-family: 'Andale Mono';
      font-size: 2.8vw;
      color: $color-black;
    }
  }
}
</style>
