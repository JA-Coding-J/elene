<template>
  <div class="user-table">
    <div class="coursewrap">
      <good-list :goods="tableData" />
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
import GoodList from './GoodList'
export default {
  components: {
    GoodList
  },
  props: {
    tableData: Array,
    config: Object
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/userTable';
</style>
