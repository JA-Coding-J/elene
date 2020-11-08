<template>
  <div>
    <div id="score" :style="{right: distance}">
      <p :style="{left: distance}">
        <i :class="'el-icon-star-on'" />
        <i :class="'el-icon-star-on'" />
        <i :class="'el-icon-star-on'" />
        <i :class="'el-icon-star-on'" />
        <i :class="'el-icon-star-on'" />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    score: {
      value: 5,
      type: Number
    },
    em: {
      value: 1,
      type: Number
    }
  },
  computed: {
    distance() {
      return 6 - this.score + 'em'
    }
  }
}
</script>

<style lang="scss">
#score {
  position: relative;
  margin-right: 8px;
  overflow: hidden;
  width: 6em;
  p {
    position: relative;
  }
  i {
    font-size: 1em;
    color: #ff9900;
  }
}
</style>
