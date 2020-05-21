<template>
  <div id="app">
    <Header />
    <main class="container">
      <Top />
      <About />
      <Characters />
      <Members />
      <Activities />
      <Links />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Top from './components/Top'
import About from './components/About'
import Characters from './components/Characters'
import Members from './components/Members'
import Activities from './components/Activities'
import Links from './components/Links'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Top,
    About,
    Characters,
    Members,
    Activities,
    Links,
    Footer
  }
}
</script>

<style lang="scss">
@import "stylesheets/variables";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;900&display=swap");

html,
body,
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: $background;
  scroll-behavior: smooth;
}

#app {
  font-family: "Noto Sans JP", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  &_black {
    color: $black;
  }
  &_sub {
    color: $sub;
  }
}

.container {
  box-sizing: border-box;
  margin: 0 10%;
  width: 80%;
  max-width: 1200px;
}

.heading {
  &_main {
    position: relative;
    display: inline-block;
    width: 40%;
    padding: 0 30%;
    color: $sub;
    text-align: center;

    &::first-letter {
      color: $theme-color;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      display: inline-block;
      width: 30%;
      height: 1px;
      background-color: $sub;
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }
  }

  &__main-text {
    display: block;
    font-size: 36px;
    &::first-letter {
      color: $theme-color;
    }
  }
}

@media screen and (max-width: $break-point) {
  .container {
    margin: 0 5%;
    width: 90%;
  }
  .heading {
    &__main-text {
      font-size: 24px;
    }
    &_main {
      &:before,
      &:after {
        width: calc(((100% - 24px * 6)) / 2);
      }
    }
  }
}
</style>
