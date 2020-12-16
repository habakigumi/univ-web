<template>
  <div class="works" id="works">
    <h2 class="heading_main">
      <span class="heading__main-text">Works</span>
    </h2>
    <div class="works_container">
      <iframe
        loading="lazy"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLBR98kmPGF9Az__V0vCjRMglP5URaxvk-"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
        referrerpolicy="no-referrer"></iframe>
      <iframe
        loading="lazy"
        width="560"
        height="315"
        frameborder="0"
        src="https://www.youtube.com/embed/?list=UU6sjImHi5w_9mVVfkXauF3g"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
        referrerpolicy="no-referrer"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Works",
}
</script>

<style scoped lang="scss">
@import "../stylesheets/variables";
.works {
  &_container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
}
</style>
