<template>
  <div class="characters" id="characters">
    <h2 class="heading_main">
      <span class="heading__main-text">Character</span>
    </h2>
    <div class="characters__charas-container">
      <div v-for="chara in characters" :key="chara.key" class="characters__chara">
        <div
          class="characters__image-container"
          :class="`characters__image-container_${chara.key}`"
        >
          <img
            :src="chara.image"
            :alt="chara.name"
            class="characters__image"
            :class="`characters__image_${chara.key}`"
          />
        </div>
        <div class="characters__info">
          <div class="characters__name">{{chara.name}}</div>
          <div class="characters__eng-name">{{chara.eng_name}}</div>
          <div class="characters__description">{{chara.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mushamaru from "@/assets/images/mushamaru_1.png";
import tsumugi from "@/assets/images/tsumugi_1.png";

export default {
  data() {
    return {
      characters: [
        {
          key: "tsumugi",
          name: "天ノ葉 つむぎ",
          eng_name: "Tsumugi Amanoha",
          image: tsumugi,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum in at curabitur dolor, metus, purus nulla faucibus. Eu sit ultrices vulputate velit, habitant faucibus tortor cras. Eu sed iaculis et potenti aliquam dictum. Sed risus imperdiet eu leo sed."
        },
        {
          key: "mushamaru",
          name: "武者丸",
          eng_name: "Mushamaru",
          image: mushamaru,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum in at curabitur dolor, metus, purus nulla faucibus. Eu sit ultrices vulputate velit, habitant faucibus tortor cras. Eu sed iaculis et potenti aliquam dictum. Sed risus imperdiet eu leo sed."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/variables";

.characters {
  &__charas-container {
    display: flex;
    justify-content: space-around;
  }
  &__chara {
    box-sizing: border-box;
    width: 48%;
  }
  &__image-container {
    width: 100%;
    height: 500px;
    line-height: 100%;
    text-align: center;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  &__image {
    width: 100%;
    object-fit: contain;
    &_tsumugi {
      height: 100%;
    }
    &_mushamaru {
      height: 60%;
    }
  }
  &__info {
    box-shadow: 0px 0px 3px $background_transparent;
    position: relative;
    font-weight: 900;
    margin-top: -100px;
    background-color: $background_transparent;
    z-index: 20;
  }
  &__name {
    color: $name;
    font-size: 28px;
  }
  &__eng-name {
    color: $sub;
    margin-left: 28px;
    font-size: 24px;
  }
  &__description {
    color: $black;
    margin-left: 28px;
  }
}

@media screen and (max-width: $break-point) {
  .characters {
    &__charas-container {
      flex-wrap: wrap;
    }
    &__chara {
      box-sizing: border-box;
      width: 100%;
    }
    &__image-container {
      &_mushamaru {
        height: 300px;
      }
    }
    &__image {
      &_mushamaru {
        height: 100%;
      }
    }
  }
}
</style>
