<template>
  <div class="works" id="works">
    <h2 class="heading_main">
      <span class="heading__main-text">Works</span>
    </h2>
    <div class="works_container">
      <div class="text">
        <h3 class="text_sub">成果報告映像</h3>
        <p class="text_black">
          2020年度の藤原プロジェクトの活動と、その成果をまとめた映像です。
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
          2020年度プロジェクトで制作した、天ノ葉つむぎと武者丸の動画シリーズです。<br>
          日本にやってきた2人が元の世界に戻るまでを描いたオリジナルストーリーで、全11話です。<br>
          <a href="https://youtube.com/playlist?list=PLBR98kmPGF9Az__V0vCjRMglP5URaxvk-" target="_blank" rel="noopener noreferrer">旧YouTubeチャンネル再生リスト</a>から視聴可能です。
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
        <h3 class="text_sub">ライブ配信シリーズ</h3>
        <p class="text_black">
          2021年度卒業演習3･4からは、活動形態をライブ配信中心に切り替え、
          視聴者と様々なコミュニケーションを行いました。<br>
          身近なテーマを取り扱う雑談配信や、リアルタイムで絵を描く配信などの様々なテーマを企画しました。
        </p>
      </div>
      <div class="image">
        <img src="../assets/images/live_thumbnail.png">
      </div>
    </div>

    <div class="works_container">
      <div class="text">
        <h3 class="text_sub">オリジナルグッズ</h3>
        <p class="text_black">
          つむぎと武者丸のキャラクターグッズを販売しました。<br>
          キャラクターグッズの定番「缶バッチ」や「ステッカー」の他、日常生活の役に立つ「サコッシュ」や「マグカップ」など様々な展開を行いました。<br>
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
          つむぎと武者丸のLINEスタンプを制作しました。<br>
          「おはよう」「了解!!」など日常会話で使いやすいラインナップの描き下ろしイラスト40種入りです。<br>
        </p>
      </div>
      <div class="image">
        <img src="../assets/images/promotion_LINE.png">
      </div>
    </div>

    <div class="works_container">
      <div class="text">
        <h3 class="text_sub">制作記録本「VTuberの制作と技術」</h3>
        <p class="text_black">
          2020年度の活動の記録をまとめた本を制作しました。
          印刷用に制作したデータをインターネット上で公開するために再編集したPDFファイルを公開しています。<br>
          見開き表示での閲覧を推奨しています。<br>
          DLは <a href="./download/HabakiBook_Interactive.pdf" download="藤原プロジェクト2020制作記録本「VTuberの制作と技術」.pdf">こちら</a>
          (PDFファイルがダウンロードされます)
        </p>
      </div>
      <div class="image">
        <img src="../assets/images/book.png">
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
      flex-basis: 50%;
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
      flex-basis: 50%;
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
