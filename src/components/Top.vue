<template>
  <div class="top">
    <img src="@/assets/images/jinja.jpg" alt="神社">
    <p>可能性を<br>「そうぞう」してみよう。</p>
  </div>
</template>

<style scoped lang="scss">
@import "../stylesheets/variables";

div.top {
  position: relative;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  p {
    color: $background;
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

    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
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
