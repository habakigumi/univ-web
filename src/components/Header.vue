<template>
  <header>
    <div class="project_name">
      <h1 class="text_sub">藤原プロジェクト2020</h1>
    </div>
    <nav class="menu">
      <div class="horizontal" v-if="windowSize >= 980">
        <ul>
          <li><a href="#" class="text_sub">About</a></li>
          <li><a href="#" class="text_sub">Character</a></li>
          <li><a href="#" class="text_sub">Member</a></li>
          <li><a href="#" class="text_sub">Activities</a></li>
          <li><a href="#" class="text_sub">Link</a></li>
        </ul>
      </div>
      <div class="hamburger" v-else>
        <div id="hamburger-icon" v-on:click="toggleMenu">
          <span/>
        </div>
        <div class="hamburger-content" v-if="isOpen">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Character</a></li>
            <li><a href="#">Member</a></li>
            <li><a href="#">Activities</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      windowSize: window.innerWidth,
      isOpen: false
    }
  },
  methods: {
    handleResize () {
      this.windowSize = window.innerWidth
    },
    toggleMenu: function () {
      this.isOpen = !this.isOpen
      const hamburgerIcon = document.getElementById('hamburger-icon')
      hamburgerIcon.classList.toggle('active')
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
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
    height: 100%;
    width: 5px;
    background: $purple;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    height: 50%;
    width: 5px;
    background: $theme-color;
  }
}

nav.menu  {
  font-size: 24px;
  font-weight: bold;
  width: 542px;
  margin-right: 24px;
  div.horizontal {
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

  div.hamburger {
    #hamburger-icon {
      position: relative;
      vertical-align: middle;
      width: 25px;
      height: 25px;
      cursor: pointer;
      z-index: 99;
      span {
        display: block;
        width: 100%;
        height: 1px;
        margin-top: 11px;
        background: $sub;

        &::before {
          top: 7px;
          position: absolute;
          content: "";
          width: 100%;
          height: 1px;
          background: $sub;
        }

        &::after {
          top: 14px;
          position: absolute;
          content: "";
          width: 100%;
          height: 1px;
          background: $sub;
        }
      }
    }

    div.hamburger-content {
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
        /*justify-content: center;*/
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

  nav.menu {
    width: 25px;
    margin-right: 7px;
  }
}
</style>
