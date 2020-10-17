<template>
  <footer>
    <p>&copy;2020 藤原プロジェクト All Rights Reserved</p>
  </footer>
</template>

<style lang="scss" scoped>
@import "../stylesheets/variables";

footer {
  border-top: 2px solid $sub_transparent;
  margin: 0;
  padding: 0;
  width: 100%;
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
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
