<template>
  <div class="container">
    <div class="name-container">
      <div class="name">
        <h1>Keita Takahashi</h1>
      </div>
      <div class="title">
        <p>Mobile/Web Developer</p>
        <p>Trackmaker</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState('top', [
      'isMusicSelected',
      'isTechnologySelected',
      'isHoverMusic',
      'isHoverTechnology'
    ])
  },
  watch: {},
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: $color-primary;
  .name-container {
    padding: 0 $padding-horizontal-mobile;
    h1 {
      font-size: $font-size-extra-large-mobile;
      font-weight: normal;
      color: $color-black;
    }
    .title {
      margin-top: 3vw;
      p {
        margin-bottom: 1vw;
        font-size: 4vw;
      }
    }
  }
}
</style>
