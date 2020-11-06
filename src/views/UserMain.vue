<template>
  <el-container class="container">
    <el-header height="100%">
      <user-header />
      <div class="top">
        <!-- 图标 -->
        <div id="icon">
          <i :class="'el-icon-platform-eleme'" />
          <span>Elene</span>
        </div>
        <!-- 搜索框 -->
        <div class="search-body">
          <user-form inline />
          <el-button type="primary">
            <i :class="'el-icon-search'" />
          </el-button>
        </div>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script type="text/javascript">

</script>

<script>
import UserHeader from '../components/UserHeader'
import UserForm from '../components/UserForm'
export default {
  components: {
    UserHeader,
    UserForm
  },
  data() {
    return {
      searchFrom: {
        keyword: ''
      },
      formLabel: [
        {
          model: 'keyword',
          label: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  margin: auto;
  // 顶部
  .el-header {
    padding: 0px;
    background: #fff;
    box-shadow: 0 2px 27px 0 rgba(0,0,0,0.10);
  }
  .top {
    display: block;
    width: 950px;
    padding: 20px 20px 0;
    margin: auto;
    // 图标
    #icon {
      display: flex;
      float: left;
      line-height: 42px;
      i {
        font-size: 42px;
        color: rgb(0, 141, 225);
      }
      span {
        margin-left: 10px;
        font-size: 36px;
      }
    }
    // 搜索框
    .search-body {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-right: 110px;
    }
  }
  .el-main {
    padding: 0px;
  }
}
</style>
