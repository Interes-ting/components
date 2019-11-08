<template>
  <div id="app">
    <mt-container>
      <!-- 工具栏区域 -->
      <mt-toolbar :menuList="menuList" slot="header">
        <!-- 标签 -->
        <mt-button type="danger" label="11111"></mt-button>
        <mt-button type="primary" icon="el-icon-success" label="保存" @click="add"></mt-button>
        <mt-button type="primary" label="登录"></mt-button>
      </mt-toolbar>

      <!-- 列表界面内容区域 -->
      <mt-list-content slot="main">
        <!-- 
          menuList: 导航栏列表
          menuNum: 默认一行最多显示
          bgc: 背景色 （仅支持 hex 格式: eg: #fff）
          txc: 菜单的文字颜色 （仅支持 hex 格式: eg: #fff）
          atc:
        -->
        <mt-topbar
          :menuList="menuList"
          :menuNum="this.menuList.length"
          @select="handleSelect"
          :bgc="bgc"
          :txc="txc"
          :atc="atc"
        ></mt-topbar>

        <!-- 表格 -->
        <!-- :columns="columns" 不写在mt-table的时候可以使用原生element标签 -->
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
      bgc: '#545c64',
      txc: '#fff',
      atc: '#ffd04b',
      menuList: [
        {
          id: 1,
          title: '首页'
        },
        {
          id: 2,
          title: '业务管理'
        },
        {
          id: 3,
          title: '油卡管理'
        },
        {
          id: 4,
          title: '财务管理'
        },
        {
          id: 5,
          title: '投诉管理'
        },
        {
          id: 6,
          title: '车辆监控'
        },
        {
          id: 7,
          title: '车辆管理'
        },
        {
          id: 8,
          title: '司机管理'
        },
        {
          id: 9,
          title: '统计分析'
        },
        {
          id: 10,
          title: '系统管理'
        },
        {
          id: 11,
          title: '导航11'
        },
        {
          id: 12,
          title: '导航12'
        },
        {
          id: 13,
          title: '导航13'
        },
        {
          id: 14,
          title: '导航14'
        },
        {
          id: 15,
          title: '导航15'
        },
        {
          id: 16,
          title: '业务管理'
        },
        {
          id: 17,
          title: '油卡管理'
        },
        {
          id: 18,
          title: '财务管理'
        },
        {
          id: 19,
          title: '投诉管理'
        },
        {
          id: 20,
          title: '车辆监控'
        },
        {
          id: 21,
          title: '车辆管理'
        },
        {
          id: 22,
          title: '司机管理'
        },
        {
          id: 23,
          title: '统计分析'
        },
        {
          id: 24,
          title: '系统管理'
        }
      ],
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
    },
    handleSelect(key, keyPath) {
      // 菜单激活回调
      console.log(key, keyPath)
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
