<template>
  <div class="about" id="about">
    <h2 class="heading_main"><span class="heading__main-text">About</span></h2>
    <div class="about-container">
      <div class="image">
        <img src="../assets/about.png" alt="logo">
      </div>
      <div class="sentence-outer">
        <div class="sentence">
          <h3 class="text_sub">プロジェクトについて</h3>
          <p class="text_black">
            藤原プロジェクト2020ではオリジナルのVirtual YouTuberを作成し、
            さまざまなメディアでの展開を通じて、その表現や技術、活用について検討しました。<br>
            2020年度は主に動画制作を、2021年度は調査とライブ配信を行い、プロジェクトとしての活動を終了しました。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../stylesheets/variables";

div.about-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 51px;

  div.image {
    line-height: 1;
    img {
      width: 75%;
    }
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
        margin: 10px 0;
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

    div.image {
      img {
        width: 100%;
      }
      margin-bottom: 8px;
    }

    div.sentence-outer {
      margin: 0 auto;
      width: 95%;
      text-align: center;

      div.sentence {
        display: inline-block;
        text-align: left;
        p {
          margin: 10px 0;
        }
      }
    }
  }
}
</style>
