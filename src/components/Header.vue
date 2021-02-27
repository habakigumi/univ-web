<template>
  <header>
    <div class="project_name">
      <h1 class="text_sub">藤原プロジェクト2020</h1>
    </div>
    <nav>
      <div class="menu" ref="menu">
        <ul>
          <li><a href="#about" class="text_sub" @click="toggleMenu">About</a></li>
          <li><a href="#characters" class="text_sub" @click="toggleMenu">Character</a></li>
          <li><a href="#works" class="text_sub" @click="toggleMenu">Works</a></li>
          <li><a href="#members" class="text_sub" @click="toggleMenu">Member</a></li>
          <li><a href="#activities" class="text_sub" @click="toggleMenu">Activities</a></li>
          <li><a href="#links" class="text_sub" @click="toggleMenu">Link</a></li>
        </ul>
      </div>
      <menu-button ref="menuButton" @toggle="toggleMenu"></menu-button>
    </nav>
  </header>
</template>

<script>
import menuButton from "../utils/menu_button";
export default {
  components: {
    menuButton
  },
  methods: {
    toggleMenu: function () {
      if (window.innerWidth > 979) {
        return
      }
      this.$refs.menu.classList.toggle('hamburger-open')
    }
  }
}
</script>

<style scoped lang="scss">
@import "../stylesheets/variables";

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-size: 36px;
  position: relative;
  padding-left: 11px;
  margin-left: 34px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 82%;
    width: 5px;
    bottom: 8%;
    background: $purple;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    height: 42.55%;
    width: 5px;
    top: 10%;
    background: $theme-color;
  }
}

nav {
  font-size: 24px;
  font-weight: bold;
  margin-right: 24px;

  div.menu {
    ul {
      padding: 0;
      display: flex;
      justify-content: space-between;
      list-style: none;

      li {
        margin-left: 8px;

        a {
          text-decoration: none;
          padding-bottom: 3.25px;
          border-bottom: 0.3px solid $sub;
        }
      }
    }
  }
}

@media screen and (max-width: $break-point) {
  h1 {
    font-size: 18px;
    padding-left: 8px;
    margin-left: 14px;
  }

  h1::before {
    width: 3px;
  }

  h1::after {
    width: 3px;
  }

  nav {
    width: 25px;
    margin-right: 7px;
    div.menu {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 98;
      background-color: $hamburger_background;
      width: 100vw;
      height: 100vh;

      ul {
        padding: 0;
        height: 100%;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        list-style: none;

        li {
          width: 200px;
          margin-top: 20px;
          margin-left: 0;
          text-align: center;

          &:nth-of-type(1) {
            margin-top: 78px;
          }

          a {
            display: block;
            width: 100%;
            padding: 10px 0;
            color: $hamburger_text;
            border: 1px solid $hamburger_text;
            border-left: 0;
            border-right: 0;
            text-decoration: none;
          }
        }
      }
      &.hamburger-open {
        display: block;
      }
    }

    div.hamburger-icon {
      display: block;
    }
  }
}
</style>
