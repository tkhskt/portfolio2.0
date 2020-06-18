<template>
  <div class="header-container">
    <p class="header-title">Keita Takahashi</p>
    <span class="circle"></span>
    <nuxt-link to="/" class="about">about</nuxt-link>
  </div>
</template>
<style scoped lang="scss">
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
}
</style>
