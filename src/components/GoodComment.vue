<template>
  <div class="com-cont">
    <div>
      <div v-for="(item, index) in commentDetail" :key="index" class="list clear">
        <div class="header">
          <div class="imgbox" style="height: 100%;width: 100%">
            <img :src="item.header">
          </div>
        </div>
        <div class="info">
          <!-- 评论用户昵称 -->
          <div class="name">{{ item.commenter }}</div>
          <!-- 评论日期 -->
          <div class="date">
            <span>{{ item.commentdate }}</span>
          </div>
          <!-- 评分 -->
          <div class="source">
            <score-item :score="item.score" />
          </div>
          <!-- 评论 -->
          <div class="desc">{{ item.comment }}</div>
          <!-- 右下角点赞 -->
          <div class="like-cont">
            <div class="like">
              <b />
              <span>赞</span>
            </div>
          </div>
          <div class="line" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreItem from './ScoreItem'
export default {
  components: {
    ScoreItem
  },
  props: {
    commentDetail: Array
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/goodComment';
</style>
