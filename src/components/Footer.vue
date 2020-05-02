<template>
  <footer>
    <hr />
    <p>&copy;2020 藤原プロジェクト All Rights Reserved</p>
  </footer>
</template>

<style lang="scss" scoped>
@import "../stylesheets/variables";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;900&display=swap");

footer {
  hr {
    width: 100vw;
    height: 0px;
    border: 1px solid $sub_transparent;
  }
  p {
    font-weight: 900;
    color: $sub_transparent;
    text-align: center;
    font-size: 24px;
    line-height: 35px;
  }
  @media screen and (max-width: $break-point) {
    //スマホ用
    p {
      font-weight: 900;
      color: $sub_transparent;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
