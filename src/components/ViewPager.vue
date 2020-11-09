<template>
  <div id="slide">
    <!-- 取vuex中的列表数据前六条的商品图作为轮播图图片 -->
    <div v-for="(img, index) in pages" v-show="index === mark" :key="index" class="slideshow">
      <a href="#">
        <img :src="img">
      </a>
    </div>
    <!-- 轮播图下方小点 -->
    <div class="bar">
      <span v-for="(img, index) in pages" :key="index" @click="change(index)" :class="{ active:index === mark }" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pages: Array
  },
  data() {
    return {
      // 轮播图计数
      mark: 0,
      interval: Function
    }
  },
  created() {
    this.play()
  },
  mounted() {
    this.play()
  },
  methods: {
    // 轮播图
    autoPlay() {
      this.mark++
      if (this.mark === 6) { // 当遍历到最后一张图片置零
        this.mark = 0
      }
    },
    play() {
      clearInterval(this.interval)
      this.interval = setInterval(this.autoPlay, 4000)
    },
    change(i) {
      this.mark = i
    }
  }
}
</script>

<style lang="scss">
#slide {
  overflow: hidden;
  position: relative;
  .slideshow {
    width: 100%;
    height: 100%;
    margin: auto;
    img {
      width: 100% !important;
      height: 100% !important;
    }
  }
  // 轮播图下方小点
  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
    span {
      width: 20px;
      height: 5px;
      border: 1px solid;
      background: white;
      display: inline-block;
      margin-right: 10px;
      &:hover {
        background: #6f4b2a;
      }
    }
    .active {
      background: #6f4b2a;
    }
  }
}
</style>
