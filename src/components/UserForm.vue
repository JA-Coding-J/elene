<template>
  <!-- 用户页面搜索框 -->
  <el-form ref="form" :inline="inline" :model="form" label-width="auto">
    <el-form-item>
      <el-input placeholder="请输入商品名称" />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    inline: Boolean,
    form: Object
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 500px;
}
</style>
