<template>
  <div class="header-container">
    <nuxt-link to="/" class="header-title">Keita Takahashi</nuxt-link>
    <template v-if="displayAbout">
      <span class="circle" :class="{ hover: hoverAbout }"></span>
      <nuxt-link
        to="/about"
        class="about"
        :class="{ enter: displayAbout }"
        @mouseover.native="onHoverAbout"
        @mouseleave.native="onMouseLeaveFromAbout"
        >about</nuxt-link
      >
    </template>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      displayAbout: true,
      hoverAbout: false
    }
  },
  watch: {
    $route(to, from) {
      this.hoverAbout = false
      this.displayAbout = to.name !== 'about'
    }
  },
  created() {
    this.hoverAbout = false
    this.displayAbout = this.$nuxt.$route.name !== 'about'
  },
  methods: {
    onHoverAbout() {
      this.hoverAbout = true
    },
    onMouseLeaveFromAbout() {
      this.hoverAbout = false
    }
  }
}
</script>
<style scoped lang="scss">
@keyframes about {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes hoverAbout {
  from {
    // opacity: 0;
    background: $color-green;
  }
  to {
    // opacity: 1;
    background: $color-red;
  }
}
.header-container {
  width: 100%;
  padding: 30px $padding-horizontal;
  display: flex;
  align-items: center;
  .header-title {
    float: left;
    min-width: 126px;
    font-size: 13px;
    letter-spacing: 2.3px;
    font-weight: 500;
    user-select: none;
    color: $color-black;
    text-decoration: none;
  }
  .circle {
    display: inline-block;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    margin-left: 10px;
    background: $color-green;
  }
  .about {
    font-size: 13px;
    margin-left: 10px;
    min-width: 50px;
    color: $color-black;
    text-decoration: none;
    font-style: italic;
    user-select: none;
  }
  .enter {
    animation: about 0.3s ease 1 forwards;
  }
  .hover {
    animation: hoverAbout 0.1s linear forwards;
  }
}
</style>
