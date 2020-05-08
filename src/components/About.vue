<template>
  <div class="about">
    <h2 class="heading_main"><span class="heading__main-text">About</span></h2>
    <div class="about-container">
      <div class="img"></div>
      <div class="sentence">
        <h3 class="text_sub">プロジェクトについて</h3>
        <p class="text_black"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>Fermentum in at curabitur dolor, metus, purus nulla
          <br>
          faucibus. Eu sit ultrices vulputate velit, habitant <br> faucibus tortor cras. Eu sed iaculis et potenti aliquam
          <br>
          dictum. Sed risus imperdiet eu leo sed.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import "../stylesheets/variables";

div.about-container {
  display: flex;
  margin-top: 51px;

  div.img {
    width: 523px;
    height: 333px;
    background: #c4c4c4;
  }

  div.sentence {
    position: relative;
    height: 333px;
    margin-left: 110px;
    h3 {
      margin: 0;
      font-size: 24px;
    }

</style>
