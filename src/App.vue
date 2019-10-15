<template>
  <div id="app">
      <mt-back-button :backbtn="this.backbtn"></mt-back-button>
      <mt-save-button :savebtn="this.savebtn"></mt-save-button>
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
        {label:'返回',icon:'el-icon-check',click:this.back}
      ]
    }
  },
  methods: {
    back(){
      console.log('返回')
    },
    save(){
      console.log('保存')
    }
  }
}
</script>
