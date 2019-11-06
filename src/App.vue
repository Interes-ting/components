<template>
  <div id="app">
    <mt-container>
      <!-- 工具栏区域 -->
      <mt-toolbar slot="header">
        <!-- 标签 -->
        <mt-button type="danger" label="11111"></mt-button>
        <mt-button type="primary" icon="el-icon-success" label="保存" @click="add"></mt-button>
        <mt-button type="primary" label="登录"></mt-button>
      </mt-toolbar>

      <!-- 列表界面内容区域 -->
      <mt-list-content slot="main">
        <!-- 表格 -->
        <!-- 需求：:columns="columns" 不写在mt-table的时候可以使用原生element标签 -->
        <mt-table :data="tableData" :columns="columns" @check="checkbox">
          <template slot="table_oper">
            <el-table-column align="center" label="操作" width="150" :resizable="false">
              <!-- 单行操作按钮 -->
              <template slot-scope="scope">
                <el-button type="text" @click.prevent="editTableData(scope.$index,scope.row)">编辑</el-button>
                <el-button type="text" @click="deleteTableData(scope.$index,scope.row)">删除</el-button>
              </template>
            </el-table-column>
            <!--使用原生的element标签报错-->
            <template v-if="isEmptyObject(columns)">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </template>
          </template>
        </mt-table>

        <!-- 分页 -->
        <mt-page
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          :total="total"
          @size-change="sizeChange"
          @current-change="currentChange"
        ></mt-page>
        <!-- 折叠面板 -->
        <mt-collapse :showHeight="100">
          <el-form :inline="true">
            <el-form-item label="审批人">
              <el-input placeholder="审批人"></el-input>
            </el-form-item>
          </el-form>
          <el-form :inline="true">
            <el-form-item label="审批人">
              <el-input placeholder="审批人"></el-input>
            </el-form-item>
          </el-form>
          <el-form :inline="true">
            <el-form-item label="审批人">
              <el-input placeholder="审批人"></el-input>
            </el-form-item>
          </el-form>
          <el-form :inline="true">
            <el-form-item label="审批人">
              <el-input placeholder="审批人"></el-input>
            </el-form-item>
          </el-form>
          <el-form :inline="true">
            <el-form-item label="审批人">
              <el-input placeholder="审批人"></el-input>
            </el-form-item>
          </el-form>
        </mt-collapse>
      </mt-list-content>
    </mt-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      //用来保存每次多选框的值
      message: null,
      isActive: true,

      // 表格表头属性设置
      columns: [
        {
          prop: 'id',
          label: 'ID',
          width: '150',
          align: 'left'
        },
        {
          prop: 'name',
          label: '姓名',
          width: '200',
          align: 'center',
          formatter: this.formatter
        },
        {
          prop: 'address',
          label: '地址',
          align: 'center'
        },
        {
          prop: 'phone',
          label: '手机号码',
          align: 'center'
        },
        {
          prop: 'email',
          label: '电子邮箱',
          align: 'center'
        }
      ],

      //表格数据源
      tableData: [],

      // 分页数据
      currentPage: 1, //当前页
      pageSize: 10, //每页显示条目个数
      pageSizes: [10, 20, 50, 10], //每页显示个数选择器的选项设置
      total: 50, //	总条目数

      // 表单属性
      ruleForm: {
        name: '',
        tel: '',
        tel: ''
      },

      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  // 将表格数据 挂载到 vue实例挂载完成之后
  mounted() {
    this.tableData = [
      {
        id: '1',
        name: '111111',
        address: '上海市普陀区金沙江路 1518 弄',
        phone: '12345649',
        email: '1456892156@qq.com'
      },
      {
        id: '2',
        name: '111111',
        address: '上海市普陀区金沙江路 1518 弄',
        phone: '12345649',
        email: '1456892156@qq.com'
      },
      {
        id: '3',
        name: '111111',
        address: '上海市普陀区金沙江路 1518 弄',
        phone: '12345649',
        email: '1456892156@qq.com'
      },
      {
        id: '4',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        phone: '12345649',
        email: '1456892156@qq.com'
      },
      {
        id: '5',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        phone: '12345649',
        email: '1456892156@qq.com'
      },
      {
        id: '6',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        phone: '12345649',
        email: '1456892156@qq.com'
      },
      {
        id: '7',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        phone: '12345649',
        email: '1456892156@qq.com'
      },
      {
        id: '18',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        phone: '12345649',
        email: '1456892156@qq.com'
      },
      {
        id: '49',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        phone: '12345649',
        email: '1456892156@qq.com'
      }
    ]
  },

  methods: {
    checkbox(checkval) {
      //多选框的值
      this.message = checkval
    },

    add() {
      console.log('111')
    },

    isEmptyObject(obj) {
      for (var key in obj) {
        return false //返回false，不为空对象
      }
      return true //返回true，为空对象
    },

    delete() {
      //批量删除事件
      console.log(this.message)
    },

    editTableData(row) {
      //单行编辑按钮事件
      // console.log('bianji ',row);
      // this.columns.splice(index,1);
    },

    deleteTableData(index, row) {
      //单行删除按钮事件
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          // 删除当前行
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },

    sizeChange(val) {
      // 改变分页数据显示条数
      console.log('111')

      console.log('一页显示多少条')
      console.log(val)
    },

    currentChange(val) {
      // 翻页处理
      console.log('111')

      console.log('这是翻页')
      console.log(val)
    },
    submitForm(formName) {
      // console.log(this.$refs[formName].$children[0].validate)

      this.$refs[formName].$children[0].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm() {
      this.$refs[formName].$refs.Form.ruleForm()
    }
  }
}
</script>
<style>
.container {
  background-color: red;
  position: relative;
  transition: 0.3s;
}

.description {
  background-color: pink;
  width: 100%;
  margin: 0 auto;
}
</style>
