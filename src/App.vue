<template>
  <div id="app">
      <mt-back-button :backbtn="this.backbtn"></mt-back-button>
      <mt-save-button :savebtn="this.savebtn"></mt-save-button>
      <mt-select-button :selectbtn="this.selectbtn"></mt-select-button>
      <mt-export-button :exportbtn="this.exportbtn"></mt-export-button>
      <mt-add-button :addbtn="this.addbtn"></mt-add-button>
      <mt-delete-button :deletebtn="this.deletebtn"></mt-delete-button>
      <mt-pass-button :passbtn="this.passbtn"></mt-pass-button>
      <mt-refuse-button :refusebtn="this.refusebtn"></mt-refuse-button>
      <mt-login-button :loginbtn="this.loginbtn"></mt-login-button>
      <mt-reset-button :resetbtn="this.resetbtn"></mt-reset-button>
      <mt-logout-button :logoutbtn="this.logoutbtn"></mt-logout-button>

      <!-- 表格 -->
      <div>
          <mt-table :columns="columns" :data="tableData" @check="checkbox">
            <el-table-column slot="table_oper" align="center" label="操作" width="150" :resizable="false">
              <!-- 按钮组 -->
              <template slot-scope="scope">
                <el-button type="text" @click.native.prevent="editTableData(scope.$index,scope.row)">编辑</el-button>
                <el-button type="text" @click="deleteTableData(scope.$index,scope.row)">删除</el-button>
              </template>
            </el-table-column>
        </mt-table>
      </div>
  

  </div>  
</template>

<script>


export default {

  name: 'app',
  data () {
    return {
      //返回按钮属性
      backbtn:[
        {label:'返回',icon:'el-icon-back',click:this.back,size:''}
      ],
      //保存按钮属性
       savebtn:[
        {label:'保存',icon:'el-icon-check',click:this.save}
      ],
       //查询按钮属性
      selectbtn:[
        {label:'查询',click:this.select}
      ],
      //导出按钮属性
      exportbtn:[
        {label:'导出',click:this.export}
      ],
      //添加按钮属性
      addbtn:[
        {label:'添加',click:this.add}
      ],
      //删除按钮属性
      deletebtn:[
        {label:'批量删除',type:'',icon:'el-icon-delete',click:this.delete}
      ],
      //通过按钮属性
      passbtn:[
        {label:'通过',click:this.pass}
      ],
      //通过按钮属性
      refusebtn:[
        {label:'拒绝',click:this.refuse}
      ],
      //  登录按钮属性
      loginbtn:[
        {label:'登录',click:this.login}
      ],
      //重置按钮属性
      resetbtn:[
        {label:'重置',click:this.reset}
      ],
      //退出按钮属性
      logoutbtn:[
        {label:'退出',click:this.logout}
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

   }
  },
  // 将表格数据 挂载到 vue实例挂载完成之后
  mounted() {
    this.tableData = [
    {id: '1', name: '111111', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '2', name: '111111', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '3', name: '111111', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '111111', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '111111', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},
    {id: '15348749', name: '111111', address: '上海市普陀区金沙江路 1518 弄',phone:'12345649',email:'1456892156@qq.com'},

    ];
  },

  methods: {
    back(){console.log('返回')},
    save(){console.log('保存')},
    select(){console.log('查询');},
    export(){console.log('导出');},
    add(){console.log('保存');},

    pass(){console.log('通过');},
    refuse(){console.log('拒绝');},
    login(){console.log('登录');},
    reset(){console.log('重置');},
    logout(){console.log('退出');},


    checkbox(checkval) { //多选框的值
        this.message = checkval;
    },
    
    delete(){ //批量删除事件
      console.log(this.message);
      
    },
    editTableData(row) {  //编辑按钮事件
      // console.log('bianji ',row);
      // this.columns.splice(index,1);
    }, 
    deleteTableData(index,row) { //删除按钮事件
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
    }

  }
}
</script>
