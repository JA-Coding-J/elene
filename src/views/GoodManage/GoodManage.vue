<template>
  <div class="manage">
    <!-- 弹出窗口 -->
    <el-dialog
      :title="operateType === 'add' ? '新增商品' : '更新商品'"
      :visible.sync="isShow"
    >
      <common-form
        :form-label="operateFormLabel"
        :form="operateForm"
      />
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 列表上方的新增和搜索栏目 -->
    <div class="manage-header">
      <el-button type="primary">+ 新增</el-button>
      <common-form inline :form-label="formLabel" :form="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <common-table
      :table-data="tableData"
      :table-label="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editGood"
      @del="delGood"
    />
  </div>
</template>

<script>
import CommonForm from '../../components/CommonForm'
import CommonTable from '../../components/CommonTable'
export default {
  components: {
    CommonForm,
    CommonTable
  },
  data() {
    return {
      operateType: 'add',
      isShow: false,

      // CommonTable.vue
      tableData: [],
      tableLabel: [
        {
          prop: 'name',
          label: '商品名称',
          width: 300
        },
        {
          prop: 'merchant',
          label: '商家',
          width: 300
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },

      // 弹出窗口
      operateForm: {
        name: '',
        merchant: ''
      },
      operateFormLabel: [
        {
          model: 'name',
          label: '商品名称'
        },
        {
          model: 'merchant',
          label: '商家'
        }
      ],

      // 搜索栏目
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
  },
  created() {
    this.getList()
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
    editGood(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
    },
    confirm() {
      if (this.operateType === 'edit') {
        this.$http.post('/api/good/edit', this.operateForm).then(res => {
          console.log(res.data)
          this.isShow = false
          this.getList()
        })
      }
    },
    delGood(row) {
      this.$confirm('此操作将永久删除该项目, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          const id = row.id
          this.$http
            .get('/api/good/del', {
              params: {
                id
              }
            })
            .then(res => {
              console.log(res.data)
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/common';
</style>
