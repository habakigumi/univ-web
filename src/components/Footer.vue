<template>
  <footer>
    <hr />
    <p>&copy;2020 藤原プロジェクト All Rights Reserved</p>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "../stylesheets/variables";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;900&display=swap");

footer {
  hr {
    width: 100vw;
    height: 0px;
    border: 1px solid $background_transparent;
  }
  p {
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 900;
    color: $background_transparent;
    text-align: center;
    @media screen and (max-width: 767px) {
      //スマホ用
      font-size: 14px;
      line-height: 20px;
    }
    font-size: 24px;
    line-height: 35px;
  }
}
</style>
