<template>
  <div>
    <ul class="courselist">
      <!-- 设置点击事件，跳转到对应商品详情页面 -->
      <li v-for="good in goods" :key="good.prop" @click="goDetail(good)">
        <!-- 商品图 -->
        <div class="courseposter">
          <img :src="good.img">
        </div>
        <!-- 商品信息 -->
        <div class="information">
          <!-- 商品名及商家名 -->
          <p class="coursetitle">{{ good.name }}&nbsp;({{ good.merchant }})</p>
          <!-- 商品评分和评论数 -->
          <div class="scorecomment">
            <score-item :score="good.score" :em="1" />
            <p class="level">
              {{ good.score }}分
            </p>
            <p class="comment">{{ good.comments }}条评论</p>
          </div>
          <!-- 商品价格 -->
          <div>
            <p class="price">人均￥&nbsp;{{ good.price }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ScoreItem from './ScoreItem'
export default {
  components: {
    ScoreItem
  },
  props: {
    goods: Array
  },
  methods: {
    goDetail(item) {
      // 以path属性跳转在目标页面刷新时数据不会消失
      // params中的属性对应path中的参数
      this.$store.commit('clearValue')
      this.$store.commit('setValue', item)
      this.$router.push({ path: '/goodDetail/:id', params: { id: item.id }})
      this.$store.commit('selectMenu', this.$store.state.tab.menu[1])
    }
  }
}
</script>

<style lang="scss">
// 商品列表
.courselist {
  overflow: hidden;
  margin-bottom: 93px;
  li {
    display: flex;
    width: 100%;
    padding: 5px;
    margin-bottom: 4px;
    border-bottom: #e5e5e5 solid 1px;
    cursor: pointer;
    // 商品图
    .courseposter {
      height: 125px;
      margin-right: 20px;
      img {
        width: 220px;
        height: 100%;
        border-radius: 5%;
      }
    }
    // 商品信息
    .information {
      display: block;
      width: 100%;
      // 商品名及商家名
      .coursetitle {
        font-size: 16px;
        color: #222;
        margin-top: 5px;
        line-height: 22px;
        font-weight: bold;
      }
      // 商品评分和评论数
      .scorecomment {
        display: inline-flex;
        margin-top: 5px;
        font-size: 13px;
        .level {
          width: 3em;
          text-align: left;
          color: #333;
        }
        .comment {
          margin-left: 10px;
          color: #ff6600;
        }
      }
      // 商品价格
      .price {
        position: relative;
        margin-top: 8px;
        color: #666;
        font-size: 12px;
        line-height: 17px;
      }
    }
  }
  li:last-child {
    border: none;
  }
}
</style>
