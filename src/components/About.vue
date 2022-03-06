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
            藤原プロジェクト2020はオリジナルのVirtual YouTuberを作成し、<br/>さまざまなメディアでの展開を通じてその表現や技術を探求していき、
            活用について検討することを目的としたプロジェクトです。
          </p>
          <p class="text_black">
            現在は大学のプロジェクト・卒業演習としての活動を終え、「鈨組」として活動をしています。<br />
            最新の「むぎむしゃ」情報やお問い合わせは、<a href="https://habakigumi.netlify.app">鈨組公式HP</a>から！<br />
            ※本活動について専修大学及びネットワーク情報学部へのお問い合わせはご遠慮ください。
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
