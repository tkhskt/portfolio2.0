<template>
  <div
    class="black-bg"
    :class="{
      expand: isHoverTechnology,
      shrink: !isHoverTechnology && !isTechnologySelected
    }"
    :style="{ '--width': labelWidth }"
  ></div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'BlackLabel',
  props: {
    labelWidth: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('top', [
      'isHoverMusic',
      'isHoverTechnology',
      'isMusicSelected',
      'isTechnologySelected',
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
    width: calc(50vw + var(--width));
  }
}

@keyframes shrink {
  from {
    width: calc(50vw + var(--width));
  }
  to {
    width: 0;
  }
}

.black-bg {
  position: relative;
  height: 24vh;
  width: 0;
  background-color: $color-black;
  &::before {
    position: absolute;
    height: 5px;
    width: 100%;
    left: calc(-1 * var(--left));
    bottom: 10%;
    content: '';
    background-color: $color-green;
  }
}

.expand {
  animation: expand 0.5s ease 1 forwards;
}

.shrink {
  animation: shrink 0.5s ease 1 forwards;
}
</style>
