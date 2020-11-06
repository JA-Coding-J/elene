<template>
  <el-menu
    :collapse="isCollapse"
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h5 v-show="!isCollapse"><i :class="'el-icon-eleme'" />后台管理系统</h5>
    <h5 v-show="isCollapse">JA</h5>
    <!-- 菜单项列表 -->
    <el-menu-item
      v-for="item in noChildren"
      :key="item.path"
      :index="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon" />
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home'
        },
        {
          path: '/goods',
          name: 'goods',
          label: '商品管理',
          icon: 'goods'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user'
        }
      ]
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter(item => !item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    menu() {
      return this.$store.state.tab.menu
    }
  },
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
  h5 {
    color: #ffffff;
    line-height: 50px;
    text-align: center;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
