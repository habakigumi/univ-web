<template>
  <div class="links" id="links">
    <h2 class="heading_main"><span class="heading__main-text">Link</span></h2>
    <div class="link_icons">
      <a href="https://fjpj2020.blogspot.com/" target="_blank" rel="noopener noreferrer">
        <font-awesome-layers>
          <font-awesome-icon :icon="['fas', 'circle']" />
          <font-awesome-icon :icon="['fab', 'blogger-b']" class="icon" transform="shrink-5" />
        </font-awesome-layers>
      </a>
      <a href="https://twitter.com/nevpj" target="_blank" rel="noopener noreferrer">
        <font-awesome-layers>
          <font-awesome-icon :icon="['fas', 'circle']" />
          <font-awesome-icon :icon="['fab', 'twitter']" class="icon" transform="shrink-5" />
        </font-awesome-layers>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <font-awesome-layers>
          <font-awesome-icon :icon="['fas', 'circle']" />
          <font-awesome-icon :icon="['fab', 'youtube']" class="icon" transform="shrink-5 left-1" />
        </font-awesome-layers>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../stylesheets/variables";

.links {
  .link_icons {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    a {
      font-size: 100px;
      color: $black;
      .icon {
        color: $background;
      }
    }
    @media screen and (max-width: $break-point) {
      a {
        font-size: 60px;
      }
    }
  }
}
</style>
