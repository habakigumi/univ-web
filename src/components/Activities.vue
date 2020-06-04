<template>
  <div class="activities" id="activities">
    <h2 class="heading_main">
      <span class="heading__main-text">Activities</span>
    </h2>
    <div class="activities__timeline">
      <div
        class="activities__activity"
        v-for="(activity, index) in convertedActivities"
        :key="`time-${index}`"
        :class="activityClass(activity.type, index)"
      >
        <div
          class="activities__time"
          :class="`activities__time_${activity.type}`"
        >{{ activity.time }}</div>
        <div
          class="activities__activity-content"
          :class="activityContentClass(activity.type)"
          v-html="activity.content"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { activities } from '../utils/activities'
export default {
  data () {
    return {
      activities: activities
    }
  },
  computed: {
    convertedActivities () {
      const val = []
      this.activities.forEach(year => {
        val.push({ time: year.year, content: '', type: 'year' })
        year.activities.forEach(activity => {
          val.push({
            time: activity.month,
            content: activity.content,
            type: 'month'
          })
        })
      })
      return val
    }
  },
  methods: {
    activityClass (type, index) {
      const styles = []
      if (type === 'year') styles.push('activities__activity_year')
      if (index === 0) styles.push('activities__activity_first')
      return styles.join(' ')
    },
    activityContentClass (type) {
      if (type === 'year') return 'activities__activity-content_none'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/stylesheets/variables.scss";

.activities {
  &__timeline {
    color: $sub;
    display: flex;
    flex-wrap: wrap;
  }
  &__activity {
    display: flex;
    align-items: stretch;
    width: 100%;
    padding: 16px;
    margin: 16px 0;

    &_year {
      margin-top: -1px;
    }

    &_first {
      margin-top: -48px;
    }
  }
  &__time {
    box-sizing: border-box;
    width: calc(15% + 40px);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-right: 2px solid $sub-transparent;

    &_year {
      font-size: 36px;
      margin: -15px 0 -32px 0;
      padding: 15px 40px 16px 0;
    }
    &_month {
      font-size: 24px;
      position: relative;
      margin: -32px 0;
      padding: 32px 40px 32px 0;

      &::before {
        position: absolute;
        right: -10px;
        content: "●";
        font-size: 16px;
      }

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        width: 44px;
        right: -52px;
        border-top: 1px solid $sub;
      }
    }
  }
  &__activity-content {
    box-sizing: border-box;
    width: calc(85% - 40px);
    position: relative;
    margin-left: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    &_none {
      content: "";
    }

    &:not(&_none) {
      min-height: 3em;

      &::before,
      &::after {
        position: absolute;
        top: -20%;
        content: "";
        width: 40px;
        height: 140%;
        border-top: 1px solid $sub;
        border-bottom: 1px solid $sub;
        box-sizing: border-box;
      }

      &::before {
        left: -20px;
        border-left: 1px solid $sub;
      }

      &::after {
        right: -20px;
        border-right: 1px solid $sub;
      }
    }
  }
}

.activity {
  display: block;
}

@media screen and (max-width: $break-point) {
  .activities {
    &__activity {
      &_first {
        margin-top: -38px;
      }
    }

    &__time {
      margin-left: -16px;
      width: calc(35% + 15px);
      &_year {
        font-size: 24px;
        padding: 15px 10px 16px 0;
      }
      &_month {
        font-size: 16px;
        padding: 32px 10px 32px 0;
      }
    }
    &__activity-content {
      width: calc(85% - 15px);
      font-size: 15px;
      &:not(&_none) {
        min-height: 4em;

        &::before,
        &::after {
          top: -5%;
          height: 110%;
        }
      }
    }
  }
}
</style>
