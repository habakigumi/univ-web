<template>
  <header>
    <div class="project_name">
      <h1 class="text_sub">藤原プロジェクト2020</h1>
    </div>
    <nav>
      <div class="menu" ref="menu">
        <ul>
          <li><a href="#" class="text_sub">About</a></li>
          <li><a href="#" class="text_sub">Character</a></li>
          <li><a href="#" class="text_sub">Member</a></li>
          <li><a href="#" class="text_sub">Activities</a></li>
          <li><a href="#" class="text_sub">Link</a></li>
        </ul>
      </div>
      <div class="hamburger-icon" v-on:click="toggleMenu" ref="hamburgerIcon">
        <span/>
        <span/>
        <span/>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu: function () {
      this.$refs.menu.classList.toggle('hamburger-open')
      this.$refs.hamburgerIcon.classList.toggle('close')
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
  width: 542px;
  margin-right: 24px;

  div.menu {
    ul {
      padding: 0;
      display: flex;
      justify-content: space-between;
      list-style: none;

      li {
        a {
          text-decoration: none;
          padding-bottom: 3.25px;
          border-bottom: 0.3px solid $sub;
        }
      }
    }
  }

  div.hamburger-icon {
    display: none;
    position: relative;
    width: 25px;
    height: 15px;
    cursor: pointer;
    z-index: 99;

    span {
      position: absolute;
      width: 100%;
      height: 1px;
      background: $sub;

      &:nth-of-type(1) {
        top: 0;
      }

      &:nth-of-type(2) {
        top: 7px;
      }

      &:nth-of-type(3) {
        bottom: 0;
      }
    }

    &.close {
      height: 26px;

      span {
        background: $hamburger_text;
        margin: 0;

        &:nth-of-type(1) {
          transform: translateY(12.5px) rotate(45deg);
        }

        &:nth-of-type(2) {
          display: none;
        }

        &:nth-of-type(3) {
          transform: translateY(-12.5px) rotate(-45deg);
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
          padding: 10px 0;
          border: 1px solid $hamburger_text;
          border-left: 0;
          border-right: 0;
          text-align: center;

          &:nth-of-type(1) {
            margin-top: 78px;
          }

          a {
            display: block;
            width: 100%;
            color: $hamburger_text;
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
