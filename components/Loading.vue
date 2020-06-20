<template>
  <div class="loading-container"></div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Loading',
  data() {
    return {}
  },
  computed: {
    ...mapState('top', ['isInitialized'])
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
@keyframes hide {
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes visibility {
  to {
    visibility: hidden;
  }
}

.loading-container {
  width: 100%;
  height: 100vh;
  background-color: $color-primary;
  animation: hide 1s ease, visibility 1s step-end;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
</style>
