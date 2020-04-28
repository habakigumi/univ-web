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

h1 {
  margin-left: 50px;
}
</style>
