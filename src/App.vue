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
        <mt-table :columns="columns" :data="tableData" @check="checkbox">
          <el-table-column
            slot="table_oper"
            align="center"
            label="操作"
            width="150"
            :resizable="false"
          >
            <template slot-scope="scope">
              <el-button type="text" @click.prevent="editTableData(scope.$index,scope.row)">编辑</el-button>
              <el-button type="text" @click="deleteTableData(scope.$index,scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </mt-table>

        <!-- 分页 -->
        <mt-page
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          :total="total"
          @sizeChange="sizeChange"
          @currentChange="currentChange"
        ></mt-page>

        <!-- 表单 -->
        <!-- label-width为靠右对齐  此属性必须存在，里面的宽度可以自己调节 -->
        <mt-form :col="2" :model="formData" :rules="rules" ref="form">
          <mt-form-item label="姓名" :cc="24" prop="name">
            <el-input v-model="formData.name"></el-input>
          </mt-form-item>
          <mt-form-item label="电话" prop="tel">
            <el-input v-model="formData.name"></el-input>
          </mt-form-item>
          <mt-form-item label="邮箱" prop="email">
            <el-input v-model="formData.name"></el-input>
          </mt-form-item>
          <mt-button
            type="primary"
            icon="el-icon-success"
            label="保存"
            @click="submitForm('ruleForm')"
          ></mt-button>
          <mt-button type="primary" label="登录" @click="resetForm('ruleForm')"></mt-button>
        </mt-form>
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
      formData: {
        name: '',
        tel: '',
        tel: ''
      },

      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        tel: [{}],
        email: [{}]
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

      console.log('一页显示多少条')
      console.log(val)
    },

    currentChange(val) {
      // 翻页处理
      console.log('这是翻页')
      console.log(val)
    },
    submitForm(formName) {
      console.log(formName)
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
