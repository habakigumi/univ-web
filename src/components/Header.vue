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
      <div class="hamburger" v-else v-on:click="!isOpen">
        <span/>
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
    handleResize: function () {
      this.windowSize = window.innerWidth
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
}

h1::before {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  border-left: 5px solid $purple;
}

h1::after {
  content: "";
  position: absolute;
  left: 0;
  height: 50%;
  border-left: 5px solid $theme-color;
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
    position: relative;
    vertical-align: middle;
    width: 100%;
    height: 25px;
    cursor: pointer;
    span {
      display: block;
      width: 100%;
      height: 1px;
      margin-top: 11px;
      background: $sub;
    }

    span::before {
      top: 7px;
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background: $sub;
    }

    span::after {
      top: 14px;
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background: $sub;
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
    border-width: 3px;
  }

  h1::after {
    border-width: 3px;
  }

  nav.menu {
    width: 25px;
    margin-right: 7px;
  }
}
</style>
