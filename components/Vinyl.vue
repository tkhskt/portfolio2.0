<template>
  <div class="vinyl-container">
    <div :class="{ vinyl: isMusicSelected }"></div>
    <div
      :class="{
        vinyl_label_hover: isHoverMusic,
        vinyl_label_out: !isHoverMusic && !isMusicSelected,
        vinyl_label_selected: isMusicSelected
      }"
      class="label"
    ></div>
    <div
      :class="{
        vinyl_hole_hover: isHoverMusic,
        vinyl_hole_out: !isHoverMusic && !isMusicSelected,
        vinyl_hole_selected: isMusicSelected
      }"
      class="hole"
    ></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Vinyl',
  data() {
    return {}
  },
  computed: {
    ...mapState('top', ['isHoverMusic', 'isHoverTechnology', 'isMusicSelected'])
  },
  watch: {},
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
@keyframes fill {
  to {
    transform: rotate(180deg);
  }
}

@keyframes clear {
  to {
    transform: rotate(180deg);
  }
}

@keyframes fullSpin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes changeColorPrimary {
  to {
    background: $color-primary;
  }
}

@keyframes changeColorRed {
  to {
    background-color: $color-red;
  }
}

@keyframes changeColorWhite {
  to {
    background-color: $color-white;
  }
}

@keyframes leftTransition {
  to {
    left: calc(50% - 1px);
  }
}

@mixin LeftParent($radius, $color, $background-color) {
  position: absolute;
  width: $radius;
  height: $radius;
  transform-origin: center;
  border-radius: 50%;
  background: $background-color;
  // 左色:右色
  background-image: linear-gradient(to right, $background-color 50%, $color 0);
}

@mixin before($color) {
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: $color;
  transform-origin: left;
}

@mixin triggerFill() {
  animation: fill 0.3s ease;
  //bg3s step-end 180以上回転する時
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@mixin triggerClear() {
  animation: clear 0.3s ease;
  //bg3s step-end 180以上回転する時
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@mixin triggerVinylAnimation() {
  animation: clear 1s ease;
  //bg3s step-end 180以上回転する時
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;
}

@mixin triggerLabelFullSpin() {
  animation: fullSpin 0.6s linear, changeColorRed 0.3s step-end;
  //bg3s step-end 180以上回転する時
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@mixin triggerHoleFullSpin() {
  animation: fullSpin 0.6s linear, changeColorWhite 0.3s step-end;
  //bg3s step-end 180以上回転する時
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@mixin triggerLeftTransition() {
  animation: leftTransition 0.3s step-end;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.vinyl-container {
  position: relative;
  width: 88vh;
  height: 88vh;
  transform-origin: center;
  transform: rotate(20deg);
  .vinyl {
    position: absolute;
    left: 0;
    @include LeftParent(100%, $color-black, transparent);
    &:before {
      @include before($color-secondary);
      @include triggerVinylAnimation();
    }
  }

  .label {
    position: absolute;
    transform: translate(-50%, -50%);
    left: calc(50% + 1px);
    top: 50%;
  }

  .vinyl_label_selected {
    @include LeftParent(24vh, $color-secondary, $color-red);
    @include triggerLeftTransition();
    &:before {
      @include before($color-primary);
      @include triggerLabelFullSpin();
    }
  }

  .vinyl_label_hover {
    @include LeftParent(24vh, $color-red, transparent);
    &:before {
      @include before($color-red);
      @include triggerFill();
    }
  }

  .vinyl_label_out {
    @include LeftParent(24vh, transparent, $color-red);
    animation: changeColorPrimary 0.3s step-end;
    //bg3s step-end 180以上回転する時
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    &:before {
      @include before($color-primary);
      @include triggerClear();
    }
  }

  .hole {
    position: absolute;
    transform: translate(-50%, -50%);
    left: calc(50% + 1px);
    top: 50%;
  }

  .vinyl_hole_selected {
    @include LeftParent(3vh, $color-secondary, $color-white);
    @include triggerLeftTransition();
    &:before {
      @include before($color-primary);
      @include triggerHoleFullSpin();
    }
  }

  .vinyl_hole_hover {
    @include LeftParent(3vh, $color-white, transparent);
    &:before {
      @include before($color-white);
      @include triggerFill();
    }
  }

  .vinyl_hole_out {
    @include LeftParent(3vh, $color-primary, $color-white);
    &:before {
      @include before($color-primary);
      @include triggerClear();
    }
  }
}
</style>
