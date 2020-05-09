<template>
  <div class="about">
    <h2 class="heading_main"><span class="heading__main-text">About</span></h2>
    <div class="about-container">
      <img src="../assets/logo.png" alt="logo">
      <div class="sentence-outer">
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
  </div>
</template>

<style scoped lang="scss">
@import "../stylesheets/variables";

div.about-container {
  display: flex;
  margin-top: 51px;

  img {
    width: 333px;
  }

  div.sentence-outer {
    margin-left: 110px;

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

    img {
      width: 100%;
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
