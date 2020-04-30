<template>
  <footer>
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
  p {
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: 900;
    color: $sub;
    opacity: 0.6;
  }
}
</style>
