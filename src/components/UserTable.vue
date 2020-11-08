<template>
  <div class="user-table">
    <div class="coursewrap">
      <ul class="courselist">
        <!-- 设置点击事件，跳转到对应商品详情页面 -->
        <li v-for="item in tableData" :key="item.prop" @click="goDetail(item)">
          <!-- 商品图 -->
          <div class="courseposter">
            <img :src="item.img">
          </div>
          <!-- 商品信息 -->
          <div class="information">
            <!-- 商品名及商家名 -->
            <p class="coursetitle">{{ item.name }}&nbsp;({{ item.merchant }})</p>
            <!-- 商品评分和评论数 -->
            <div class="scorecomment">
              <score-item :score="item.score" :em="1"></score-item>
              <p class="level">
                {{ item.score }}分
              </p>
              <p class="comment">{{ item.comments }}条评论</p>
            </div>
            <!-- 商品价格 -->
            <div>
              <p class="price">人均￥&nbsp;{{ item.price }}</p>
            </div>
          </div>
        </li>
      </ul>
      <el-pagination
        class="pager"
        layout="prev, pager, next"
        :total="config.total"
        :current-page.sync="config.page"
        @current-change="changePage"
      />
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
    tableData: Array,
    config: Object
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page)
    },
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

<style lang="scss" scoped>
@import '~@/assets/scss/userTable';
</style>
