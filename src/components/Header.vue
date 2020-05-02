<template>
  <header>
    <div class="project_name">
      <h1 class="text_sub">藤原プロジェクト2020</h1>
    </div>
    <nav class="menu">
      <ul class>
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

@media screen and (max-width: $break-point) {
  h1 {
    font-size: 18px;
  }
}
</style>
