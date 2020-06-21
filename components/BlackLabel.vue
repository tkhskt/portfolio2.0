<template>
  <div class="black-bg" :class="{ expand: isHoverTechnology }"></div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'BlackLabel',
  data() {
    return {}
  },
  computed: {
    ...mapState('top', [
      'isHoverMusic',
      'isHoverTechnology',
      'isMusicSelected',
      'musicPlaying',
      'musicPaused'
    ])
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style scoped lang="scss">
@keyframes expand {
  to {
    width: 50vw;
  }
}

.black-bg {
  position: relative;
  height: 24vh;
  background-color: $color-black;
  &::before {
    position: absolute;
    height: 5px;
    width: 100%;
    left: 0;
    bottom: 10%;
    content: '';
    background-color: $color-green;
  }
}

.expand {
  animation: expand 0.3s ease 1 forwards;
}
</style>
