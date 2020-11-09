<template>
  <div class="content">
    <!-- 商品详情 -->
    <div class="details clear">
      <!-- 商品详细信息 -->
      <el-col :span="16" class="d-left">
        <div class="name">
          {{ item.name }}&nbsp;({{ item.merchant }})
        </div>
        <div class="score clear">
          <div class="star-cont">
            <score-item :score="item.score" :em="1" />
          </div>
          <div id="scoreNumber">{{ item.score }}分
            <span>人均￥{{ item.price }}</span>
          </div>
        </div>
        <div class="address">
          <p>地址：{{ item.addr }}
            <b />
          </p>
          <p>电话：0755-{{ item.phoneNumber }}</p>
          <p>营业时间：周一至周日 11:30-15:00 17:00-22:00</p>
        </div>
        <ul class="tags clear">
          <li>
            <img src="https://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png">
            提供Wifi
          </li>
          <li>
            <img src="https://p1.meituan.net/codeman/4b1c5696fe5bf2c4d23fb01659b3e68b1960.png">
            停车位
          </li>
        </ul>
      </el-col>
      <!-- 商品详情图 -->
      <el-col :span="8" class="d-right">
        <div class="big">
          <div class="imgbox" style="height: 100%; width: 100%;">
            <img :src="item.img">
          </div>
        </div>
        <el-row :gutter="10">
          <el-col v-for="(img, index) in item.detailImg" :key="index" :span="6">
            <div class="imgbox" style="height: 100%; width: 100%;">
              <img :src="img">
            </div>
          </el-col>
        </el-row>
      </el-col>
    </div>
    <!-- 评论栏目 -->
    <div class="btm-cont clear">
      <div class="comment">
        <div class="total">
          <!-- 评论排序方式 -->
          <div class="sort">
            <span :class="{ on: orderByQuality}" @click="orderQuality">质量排序</span>
            <span :class="{ on: orderByTime}" @click="orderTime">时间排序</span>
          </div>
          {{ item.comments }}条网友评论
        </div>
        <!-- 用户评论列表 -->
        <good-comment ref="CommentDetail" :comment-detail="item.commentDetail" />
      </div>
    </div>
  </div>
</template>

<script>
import GoodComment from '../../components/GoodComment'
import ScoreItem from '../../components/ScoreItem'
export default {
  components: {
    GoodComment,
    ScoreItem
  },
  data() {
    return {
      item: null,
      orderByQuality: true,
      orderByTime: false
    }
  },
  computed: {
    detail() {
      return this.$store.state.goodDetail.detail
    }
  },
  created() {
    this.item = this.detail
  },
  methods: {
    distance(score) {
      const dis = 65 - score * 13 + 'px'
      return dis
    },
    orderQuality() {
      this.orderByQuality = true
      this.orderByTime = false
    },
    orderTime() {
      this.orderByQuality = false
      this.orderByTime = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/goodDetail';
</style>
