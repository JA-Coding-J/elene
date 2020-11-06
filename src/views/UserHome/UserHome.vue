<template>
  <div class="container">
    <!-- 轮播图 -->
    <div class="slide" style="padding-top: 5px;">
      <!-- 取vuex中的列表数据前六条的商品图作为轮播图图片 -->
      <div v-for="(item, index) in tableData.slice(0, 6)" v-show="index === mark" :key="index" class="slideshow">
        <a href="#">
          <img :src="item.img" style="width:100%;height:350px;">
        </a>
      </div>
      <!-- 轮播图下方小点 -->
      <div class="bar">
        <span v-for="(item, index) in tableData.slice(0, 6)" :key="index" :class="{ 'active':index === mark }" />
      </div>
    </div>
    <!-- 分类 -->
    <div class="filter">
      <div class="condition">
        <!-- 根据食品种类分类 -->
        <div class="cont clear">
          <div class="classification">分类</div>
          <div class="all on">全部</div>
          <ul class="more clear">
            <li v-for="(classify, index) in classifies" :key="index">
              <a class="" href="#">{{ classify }}</a>
            </li>
          </ul>
        </div>
        <!-- 根据区域分类 -->
        <div class="cont clear">
          <div class="classification">区域</div>
          <div class="all on">全部</div>
          <ul class="more clear">
            <li v-for="(addr, index) in addrs" :key="index">
              <a href="">{{ addr }}</a>
            </li>
          </ul>
        </div>
        <!-- 根据用餐人数分类 -->
        <div class="cont clear">
          <div class="classification">用餐人数</div>
          <div class="all on">全部</div>
          <ul class="more clear" style="border-bottom:0;">
            <li v-for="(diner, index) in diners" :key="index">
              <a class="" href="#">{{ diner }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <!-- 排序方式 -->
      <div class="orderby">
        <span><a href="#" class="on">默认</a></span>
        <span><a href="#">好评</a></span>
        <span><a href="#">销量</a></span>
        <span><a href="#">距离</a></span>
      </div>
      <!-- 商品列表 -->
      <user-table
        :table-data="tableData"
        :config="config"
        @changePage="getList()"
      />
    </div>
  </div>
</template>

<script>
import UserTable from '../../components/UserTable'
export default {
  components: {
    UserTable
  },
  data() {
    return {
      // 轮播图计数
      mark: 0,
      // 分类:
      classifies: [
        '代金券',
        '蛋糕甜点',
        '火锅',
        '自助餐',
        '小吃快餐',
        '日韩料理',
        '西餐',
        '聚餐宴请',
        '烧烤烤肉',
        '东北菜',
        '川湘菜',
        '江浙菜',
        '香锅烤鱼',
        '粤菜',
        '中式烧烤/烤串',
        '西北菜',
        '咖啡酒吧',
        '京菜鲁菜',
        '云贵菜',
        '东南亚菜',
        '海鲜',
        '素食',
        '台湾/客家菜',
        '创意菜',
        '汤/粥/炖菜',
        '蒙餐',
        '新疆菜',
        '其他美食'
      ],
      // 区域
      addrs: ['福田区',
        '南山区',
        '罗湖区',
        '宝安区',
        '龙岗区',
        '龙华区',
        '盐田区',
        '南澳大鹏新区',
        '坪山区',
        '光明区'
      ],
      // 用餐人数
      diners: [
        '单人餐',
        '双人餐',
        '3-4人',
        '5-6人',
        '7-8人',
        '9-10人',
        '10人以上',
        '其他'
      ],
      // UserTable.vue
      tableData: [],
      config: {
        page: 1,
        total: 30,
        loading: false
      }
    }
  },
  created() {
    this.getList()
    this.play()
  },
  mounted() {
    this.play
  },
  methods: {
    getList() {
      this.config.loading = true
      this.$http
        .get('/api/good/getGood', {
          // 请求后端接口
          params: {
            page: this.config.page,
            name
          }
        })
        .then(res => {
          this.tableData = res.data.list.map(item => {
            return item
          })
          this.config.total = res.data.count
          this.config.loading = false
        })
    },
    // 轮播图
    autoPlay() {
      this.mark++
      if (this.mark === 3) { // 当遍历到最后一张图片置零
        this.mark = 0
      }
    },
    play() {
      setInterval(this.autoPlay, 4000)
    },
    change(i) {
      this.mark = i
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/userHome';
</style>
