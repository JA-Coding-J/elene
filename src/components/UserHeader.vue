<template>
  <header>
    <!-- 用户页面头部 -->
    <div class="header-bar">
      <!-- 左侧面包屑 -->
      <div class="l-content">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/userhome' }">首页</el-breadcrumb-item>
          <!-- 子面包屑 -->
          <el-breadcrumb-item v-if="current" :to="current.path">
            {{ current.label }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 右侧用户昵称和头像及下拉菜单 -->
      <div class="r-content">
        <!-- 用户昵称 -->
        <span id="username">username</span>
        <el-dropdown trigger="click">
          <!-- 用户头像 -->
          <span class="el-dropdown-link">
            <img :src="userImg" class="user">
          </span>
          <!-- 定义下拉菜单 -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
            <el-dropdown-item
              icon="el-icon-circle-plus"
              @click.native="logOut"
            >退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data() {
    return {
      userImg: require('../assets/images/user-default.png')
    }
  },
  methods: {
    logOut() {
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 100%;
  width: 100%;
  align-items: center;
  background: #F8F8F8;
  font-size: 12px;
  color: #999;
  .header-bar {
    display: flex;
    justify-content: space-between;
    width: 950px;
    margin: auto;
    .l-content {
      display: flex;
      align-items: center;
    }
    .r-content {
      display: flex;
      align-items: center;
      #username {
        font-size: 20px;
        margin-right: 8px;
      }
      .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}
</style>
<style lang="scss">
.el-breadcrumb {
  margin-left: 20px;
}
</style>
