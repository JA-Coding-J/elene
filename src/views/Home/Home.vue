<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <!-- 管理员相关信息 -->
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg">
          <div class="userInfo">
            <p class="name">JA</p>
            <p class="access">超管</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登陆时间：<span>Time</span></p>
          <p>上次登陆地点：<span>深圳</span></p>
        </div>
      </el-card>
      <!-- 表格数据 -->
      <el-card shadow="hover" style="height:438px; margin-top:20px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          />
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <!-- 统计数据 -->
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          shadow="hover"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          />
          <div class="detail">
            <p class="num">￥ {{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <!-- 折线图 -->
      <el-card shadow="hover">
        <echart style="height: 280px" :chart-data="echartData.order" />
      </el-card>
      <div class="graph">
        <!-- 柱状图 -->
        <el-card shadow="hover">
          <echart
            style="height: 260px"
            :chart-data="echartData.user"
          />
        </el-card>
        <!-- 饼图 -->
        <el-card shadow="hover">
          <echart
            style="height: 260px"
            :chart-data="echartData.video"
            :is-axis-chart="false"
          />
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Echart from '../../components/EChart'
export default {
  components: {
    Echart
  },
  data() {
    return {
      // 管理员头像
      userImg: require('../../assets/images/user.png'),
      // 统计数据
      countData: [
        {
          name: '今日成交订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 1234,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月成交订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 1234,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ],
      // 表格数据
      tableData: [],
      // 表头
      tableLabel: {
        name: '外卖',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      // echart数据
      echartData: {
        // 折线图
        order: {
          xData: [],
          series: []
        },
        // 柱状图 用户情况
        user: {
          xData: [],
          series: []
        },
        // 饼图
        video: {
          series: []
        }
      }
    }
  },
  created() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      this.$http.get('/home/getData').then(res => {
        res = res.data
        this.tableData = res.data.tableData
        // 订单折线图
        const order = res.data.orderData
        this.echartData.order.xData = order.date
        // 第一步取出series中的name部分——键名
        const keyArray = Object.keys(order.data[0])
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
        // 用户柱状图
        const user = res.data.userData
        this.echartData.user.xData = user.map(item => item.date)
        this.echartData.user.series.push({
          name: '新增用户',
          data: user.map(item => item.new),
          type: 'bar'
        })
        this.echartData.user.series.push({
          name: '活跃用户',
          data: user.map(item => item.active),
          type: 'bar',
          barGap: 0
        })
        // 饼图
        this.echartData.video.series.push({
          data: res.data.videoData,
          type: 'pie'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home';
</style>
