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
      <div class="image">
        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/mM80fjQZOU8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
          referrerpolicy="no-referrer"></iframe>
      </div>
    </div>

    <div class="works_container">
      <div class="text">
        <h3 class="text_sub">動画シリーズ</h3>
        <p class="text_black">
          YouTubeで公開している、天ノ葉つむぎと武者丸の動画シリーズです。<br>
          本編は全11話、完結済です。
        </p>
      </div>
      <div class="image">
        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/videoseries?list=PLBR98kmPGF9Az__V0vCjRMglP5URaxvk-"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
          referrerpolicy="no-referrer"></iframe>
      </div>
    </div>

    <div class="works_container">
      <div class="text">
        <h3 class="text_sub">公式ウェブサイト</h3>
        <p class="text_black">
          つむぎと武者丸を世界に発信するため、キャラクターやコンテンツの紹介により重点をおいた公式ウェブサイトを制作しています。<br>
          アクセスは <a href="https://habakigumi.netlify.app/" target="_blank" rel="noopener noreferrer">こちら</a>
        </p>
      </div>
      <div class="image">
        <img src="../assets/images/logo.png">
      </div>
    </div>

    <div class="works_container">
      <div class="text">
        <h3 class="text_sub">オリジナルグッズ</h3>
        <p class="text_black">
          つむぎと武者丸のキャラクターグッズを販売しています。
          キャラクターグッズの定番「缶バッチ」や「ステッカー」の他、日常生活の役に立つ「サコッシュ」や「マグカップ」など様々な展開をしています。<br>
          商品詳細・購入は <a href="https://suzuri.jp/_habaki_" target="_blank" rel="noopener noreferrer">こちら</a>
        </p>
      </div>
      <div class="image">
        <img src="../assets/images/promotion_goods.png">
      </div>
    </div>

    <div class="works_container">
      <div class="text">
        <h3 class="text_sub">LINEスタンプ</h3>
        <p class="text_black">
          つむぎと武者丸のLINEスタンプを制作しました。描き下ろしイラスト40種入りです。<br>
          その他のイラスト確認・購入は<a href="https://store.line.me/stickershop/product/14343630" target="_blank" rel="noopener noreferrer">こちら</a>
        </p>
      </div>
      <div class="image">
        <img src="../assets/images/promotion_LINE.png">
      </div>
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
    .image {
      flex-basis: 60%;
      height: 315px;
      iframe {
        height: 100%;
        width: 100%;
      }
      img{
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
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
