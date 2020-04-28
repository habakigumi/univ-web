<template>
  <header>
    <div class="project-name text_sub">
      <h1>藤原プロジェクト2020</h1>
    </div>
    <nav class="menu">
      <ul>
        <li><a href="#" class="text_sub">About</a></li>
        <li><a href="#" class="text_sub">Character</a></li>
        <li><a href="#" class="text_sub">Member</a></li>
        <li><a href="#" class="text_sub">Activities</a></li>
        <li><a href="#" class="text_sub">Link</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

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
  position: relative;
  padding-left: 11px;
  margin-left: 50px;
}

h1::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-left: 5px solid $purple;
}

h1::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 50%;
  border-left: 5px solid $theme-color;
}

nav.menu  {
  font-size: 24px;
  font-weight: bold;
  width: 40%;
  margin-right: 24px;
  ul {
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
</style>
