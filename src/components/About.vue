<template>
  <div class="about">
    <h2 class="heading_main"><span class="heading__main-text">About</span></h2>
    <div class="about-container">
      <img src="../assets/about.png" alt="logo">
      <div class="sentence-outer">
        <div class="sentence">
          <h3 class="text_sub">プロジェクトについて</h3>
          <p class="text_black">
            藤原プロジェクト2020はオリジナルのVTuberを作成し、<br>さまざまなメディアでの展開を通じてその表現や技術を探求していくことで
            <br>活用について検討していくことを目的としたプロジェクトです。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../stylesheets/variables";

div.about-container {
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  margin-top: 51px;

  img {
    width: 50%;
  }

  div.sentence-outer {

    div.sentence {
      display: flex;
      flex-direction: column;
      height: 100%;

      h3 {
        margin: 0;
        font-size: 24px;
      }

      p {
        margin: auto 0;
      }
    }
  }
}

@media screen and (max-width: $break-point) {
  div.about-container {
    display: block;
    border: 1px solid $sub;
    margin-top: 31px;
    text-align: center;

    img {
      width: 70%;
      /*margin: 0 auto;*/
    }

    div.sentence-outer {
      margin: 0 auto;
      width: 95%;
      text-align: center;

      div.sentence {
        display: inline-block;
        text-align: left;
        p {
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
