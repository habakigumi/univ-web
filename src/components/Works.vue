<template>
  <div class="works" id="works">
    <h2 class="heading_main">
      <span class="heading__main-text">Works</span>
    </h2>
    <div class="works_container">
      <div class="text">
        <h3 class="text_sub">成果報告映像</h3>
        <p class="text_black">
          本年度の藤原プロジェクトの活動とその成果をまとめた映像です。
        </p>
      </div>
      <iframe
        loading="lazy"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mM80fjQZOU8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
        referrerpolicy="no-referrer"></iframe>
    </div>

    <div class="works_container">
      <div class="text">
        <h3 class="text_sub">動画シリーズ</h3>
        <p class="text_black">
          YouTubeで公開している、天ノ葉つむぎと武者丸の動画シリーズです。
        </p>
      </div>
      <iframe
        loading="lazy"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLBR98kmPGF9Az__V0vCjRMglP5URaxvk-"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
        referrerpolicy="no-referrer"></iframe>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Works'
}
</script>

<style scoped lang="scss">
@import "../stylesheets/variables";
.works {
  &_container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 40px;
    iframe {
      flex-basis: 60%;
    }
    .text {
      display: block;
      flex-basis: 40%;
      padding: 4%;

      h3 {
        margin: 0;
        font-size: 24px;
      }

      p {
        margin-top: 25px;
      }
    }
  }
}
@media screen and (max-width: $break-point) {
  .works {
    &_container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    iframe {
      width: 90%;
    }
  }
}
</style>
