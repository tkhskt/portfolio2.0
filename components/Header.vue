<template>
  <div class="header-container">
    <nuxt-link
      to="/"
      class="header-title"
      :class="{
        'white-text': white,
        'hide-title': hideTitle && isMobile
      }"
      >Keita Takahashi</nuxt-link
    >
    <template v-if="displayAbout && !isMobile">
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
      hoverAbout: false,
      white: false,
      hideTitle: true,
      isMobile: false
    }
  },
  watch: {
    $route(to, from) {
      this.hoverAbout = false
      this.displayAbout = to.name !== 'about'
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleScroll)
    })
  },
  beforeDestroy() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleScroll)
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
    },
    handleScroll() {
      if (window.innerWidth < 559) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
      const scrollY = window.pageYOffset
      const techTop = window.innerHeight * 2 - 35
      const musicTop = window.innerHeight - 35
      const aboutTop = window.innerHeight * 3 - 35
      if (scrollY > techTop) {
        this.white = true
      } else {
        this.white = false
      }
      if (scrollY <= musicTop || scrollY >= aboutTop) {
        this.hideTitle = true
      } else {
        this.hideTitle = false
      }
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
  @include mq(md) {
    padding: 4vw $padding-horizontal-mobile;
  }
  transition: padding 0.1s ease;
  .header-title {
    float: left;
    min-width: 126px;
    font-size: 13px;
    letter-spacing: 2.3px;
    font-weight: 500;
    user-select: none;
    color: $color-black;
    text-decoration: none;
    opacity: 1;
    transition: opacity 0.1s linear;
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
  .white-text {
    color: $color-white;
  }
  .hide-title {
    opacity: 0;
    transition: opacity 0.1s linear;
  }
}
</style>
