<template>
  <header>
    <!-- 页面头部左侧 -->
    <div class="l-content">
      <!-- 左侧菜单伸缩按钮 -->
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="collapseMenu"
      />
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- 子面包屑 -->
        <el-breadcrumb-item v-if="current" :to="current.path">
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 页面头部右侧头像下拉菜单 -->
    <div class="r-content">
      <el-dropdown trigger="click">
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
      userImg: require('../assets/images/user.png')
    }
  },
  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
    },
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
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-content {
  display: flex;
  align-items: center;
}
.r-content {
  .user {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
}
</style>
<style lang="scss">
.el-breadcrumb {
  margin-left: 20px;
}
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #fff;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #f4f4f4;
    }
  }
}
</style>
