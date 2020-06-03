<template>
  <div class="top">
    <div class="img"></div>
    <p>可能性を<br>「そうぞう」してみよう。</p>
  </div>
</template>

<style scoped lang="scss">
@import "../stylesheets/variables";

div.top {
  position: relative;

  div.img {
    background: #c4c4c4;
    width: 100%;
    height: 400px;
  }

  p {
    color: $black;
    line-height: 52px;
    position: absolute;
    margin: 0;
    right: 0;
    bottom: 0;
    font-size: 36px;
    font-weight: 900;
    white-space: nowrap;
  }
}

@media screen and (max-width: $break-point) {
  div.top {
    width: 100vw;
    margin: 0 calc(50% - 50vw);

    div.img {
      width: 100%;
      height: 180px;
    }

    p {
      width: -moz-fit-content;
      width: fit-content;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -75%);
      font-size: 24px;
      line-height: 35px;
    }
  }
}
</style>
