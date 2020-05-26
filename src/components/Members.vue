<template>
  <div class="members" id="members">
    <h2 class="heading_main">
      <span class="heading__main-text">Members</span>
    </h2>
    <div class="members__member-wrapper">
      <div
        class="members__member"
        v-for="(member, index) in members"
        :key="member.id"
        :class="`members__member_${mod(index)}`"
      >
        <div class="members__thumb">
          <img
            :src="member.image"
            class="members__thumb-image"
            :class="`members__thumb-image_${member.attribute}`"
            :alt="member.name"
          />
        </div>
        <div class="members__member-info">
          <div class="members__id" :class="`members__id_${mod(index)}`">{{ member.id }}</div>
          <div class="members__name" :class="`members__name_${mod(index)}`">{{ member.name }}</div>
          <div
            class="members__position"
            :class="`members__position_${mod(index)}`"
          >{{ member.position }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { members } from '../utils/members'
export default {
  data () {
    return {
      members: members
    }
  },
  methods: {
    mod (index) {
      return index % 2 ? 'odd' : 'even'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/stylesheets/variables";
.members {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__member-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__member {
    display: flex;
    box-sizing: border-box;
    width: 45%;
    min-width: 380px;
    max-height: 118px;
    margin-bottom: 20px;
    padding: 8px;
    font-weight: 900;

    &_even {
      background-image: url("../assets/member_bg.svg");
    }

    &_odd {
      background-image: url("../assets/member_bg_alt.svg");
    }
  }

  &__thumb {
    width: 168px;
    line-height: 100%;
    flex-shrink: 0;
  }

  &__thumb-image {
    margin: -7px 0;
    height: calc(100% + 14px);
    object-fit: contain;
    color: $background_transparent;

    &_rounded {
      border-radius: 15px;
    }
  }

  &__member-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__id {
    &_even {
      color: $background_transparent;
    }
    &_odd {
      color: $sub;
    }
  }

  &__name {
    margin-left: 20%;
    font-size: 36px;

    &_even {
      color: $background;
    }

    &_odd {
      color: $black;
    }
  }

  &__position {
    align-self: flex-end;

    &_even {
      color: $background_transparent;
    }

    &_odd {
      color: $sub;
    }
  }
}

@media screen and (max-width: $break-point) {
  .members {
    &__member-wrapper {
      justify-content: center;
    }
    &__member {
      max-width: 540px;
      width: 90%;
    }
  }
}
</style>
