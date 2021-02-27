<template>
  <div class="menu-button" :class="menu_button_class" @click="onClick">
    <span class="menu-line menu-line-1"></span>
    <span class="menu-line menu-line-2"></span>
    <span class="menu-line menu-line-3"></span>
  </div>
</template>

<script>
export default {
  name: 'MenuButton',
  data () {
    return {
      opened: false
    }
  },
  computed: {
    menu_button_class () {
      return this.opened ? 'menu-button-opened' : ''
    }
  },
  methods: {
    onClick () {
      this.opened = !this.opened
      this.$emit('toggle', this.opened)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables";

.menu-button {
  display: none;
}

@media screen and (max-width: 980px) {
  .menu-button {
    display: block;
    position: relative;
    height: 15px;
    width: 25px;
    cursor: pointer;
    z-index: 999;

    &-opened {
      .menu-line {
        &-1 {
          top: 50% !important;
          transform: translateY(-50%) rotate(-45deg);
        }

        &-2 {
          opacity: 0;
        }

        &-3 {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }
      }
    }

    .menu-line {
      display: inline-block;
      position: absolute;
      background-color: $sub;
      border-radius: 1px;
      width: 100%;
      height: 1px;
      transition: 0.3s;

      &-1 {
        top: 0;
      }

      &-2 {
        top: calc(50% - 1px);
      }

      &-3 {
        bottom: 0;
      }
    }
  }
}
</style>
