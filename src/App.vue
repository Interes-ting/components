<template>
  <div id="app">
    <mt-container>
      <!-- 工具栏区域 -->
      <mt-toolbar slot="header">
        <mt-delete-button :deletebtn="this.deletebtn"></mt-delete-button>
        <!-- <mt-back-button :backbtn="this.backbtn"></mt-back-button> 
        <mt-save-button :savebtn="this.savebtn"></mt-save-button>
        <mt-select-button :selectbtn="this.selectbtn"></mt-select-button>
        <mt-export-button :exportbtn="this.exportbtn"></mt-export-button>
        <mt-add-button :addbtn="this.addbtn"></mt-add-button>
        <mt-delete-button :deletebtn="this.deletebtn"></mt-delete-button>
        <mt-pass-button :passbtn="this.passbtn"></mt-pass-button>
        <mt-refuse-button :refusebtn="this.refusebtn"></mt-refuse-button>
        <mt-login-button :loginbtn="this.loginbtn"></mt-login-button>
        <mt-reset-button :resetbtn="this.resetbtn"></mt-reset-button>
        <mt-logout-button :logoutbtn="this.logoutbtn"></mt-logout-button>  -->
      </mt-toolbar>

      <!-- 列表界面内容区域 -->
      <mt-list-content slot="main">
        <!-- 表格 -->
        <!-- <mt-table :columns="columns" :data="tableData" @check="checkbox">
          <el-table-column slot="table_oper" align="center" label="操作" width="150" :resizable="false">
            <template slot-scope="scope">
              <el-button type="text" @click.native.prevent="editTableData(scope.$index,scope.row)">编辑</el-button>
              <el-button type="text" @click="deleteTableData(scope.$index,scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </mt-table> -->
        <!-- 分页 -->
        <!-- <mt-page 
          :current-page="currentPage" 
          :page-sizes="pageSizes" 
          :page-size="pageSize" 
          :total="total"
          @sizeChange="sizeChange" 
          @currentChange="currentChange"
        ></mt-page> -->
        
        <mt-form>
          <el-form-item label="工号" prop="jobNo" style="padding-right:100px">
            <el-input  placeholder="工号" style="width:300px"></el-input>
          </el-form-item>
                    <el-form-item label="工号" prop="jobNo" style="padding-right:100px">
            <el-input  placeholder="工号" style="width:300px"></el-input>
          </el-form-item>
                    <el-form-item label="工号" prop="jobNo" style="padding-right:100px">
            <el-input  placeholder="工号" style="width:300px"></el-input>
          </el-form-item>
            <el-form-item label="活动形式">
    <el-input type="textarea" style="width:728px;padding-right:100px"></el-input>
  </el-form-item>
                            <el-form-item label="工号" prop="jobNo" style="padding-right:100px">
            <el-input  placeholder="工号" style="width:300px"></el-input>
          </el-form-item>
        </mt-form>

      </mt-list-content>
       <!-- 表单 -->

    </mt-container>
  </div>  

</template>

<script>


export default {

  name: 'app',
  data () {
    return {
      //删除按钮属性
      deletebtn:[
        {label:'批量删除',type:'',icon:'el-icon-delete',click:this.delete}
      ],

      //用来保存每次多选框的值
      message: null,

      // 表格表头属性设置
      columns: [
        {prop: 'id', label: 'ID', width: '150', align: 'left'},
        {prop: 'name', label: '姓名', width: '200', align: 'center', formatter: this.formatter},
        {prop: 'address', label: '地址', align: 'center'},
        {prop: 'phone', label: '手机号码', align: 'center'},
        {prop: 'email', label: '电子邮箱', align: 'center'}
      ],

      //表格数据源 
      tableData: [],

      // 分页数据
      currentPage: 1, //当前页
      pageSize: 10 ,//每页显示条目个数
      pageSizes: [10,20,50,10], //每页显示个数选择器的选项设置
      total:50 //	总条目数
   }
  },
    // 将表格数据 挂载到 vue实例挂载完成之后
    mounted() {
      this.tableData = [
        {id: '1', name: '111111', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
        {id: '2', name: '111111', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
        {id: '3', name: '111111', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
        {id: '4', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
        {id: '5', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
        {id: '6', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
        {id: '7', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
        {id: '18', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
        {id: '49', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
      ];
    },

  methods: {
    checkbox(checkval) { //多选框的值
        this.message = checkval;
    },
    
    delete(){ //批量删除事件
      console.log(this.message); 
    },

    editTableData(row) {  //单行编辑按钮事件
      // console.log('bianji ',row);
      // this.columns.splice(index,1);
    }, 

    deleteTableData(index,row) { //单行删除按钮事件
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
        }).then(() => {
          // 删除当前行
          this.tableData.splice(index,1);
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
      }); 
    },

    
    sizeChange(val) { // 改变表格数据显示条数
      console.log('一页显示多少条');
      console.log(val);
    },
    
    currentChange(val) {  // 翻页处理
      console.log('这是翻页');
      console.log(val);
    },
  }
}
</script>
<style>
html body {
  margin: 0;
  padding: 0;
}
</style>