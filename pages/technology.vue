<template>
  <div class="container">
    <loading v-if="!comeFromTop" class="loading" />
    <main>
      <div class="main-container">
        <section class="left">
          <skill class="component-skill" />
        </section>
        <section class="right">
          <transition name="technology">
            <technology class="component-tecnology" />
          </transition>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Technology from '~/components/Technology.vue'
import Loading from '~/components/Loading.vue'
import Skill from '~/components/Skill.vue'

export default {
  components: {
    Technology,
    Loading,
    Skill
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('top', [
      'isMusicSelected',
      'isTechnologySelected',
      'isHoverMusic',
      'isHoverTechnology',
      'comeFromTop'
    ])
  },
  watch: {},
  created() {
    this.$store.dispatch('top/selectTechnology')
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  top: 0;
  z-index: 999;
}
main {
  .main-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
    background-color: $color-primary;
    .left {
      position: absolute;
      width: 53%;
    }
    .right {
      position: absolute;
      right: 0;
      width: 47%;
      height: 100%;
      .component-tecnology {
        position: absolute;
        right: 0;
        // z-index: 50;
      }
      .component-player {
        position: absolute;
        right: 0;
      }
      .technology-leave-active {
        transition: opacity 0.3s;
      }
      .technology-leave-to {
        opacity: 0;
      }
    }
  }
  .hide {
    display: none;
  }
}
</style>
