<template>
  <div id="app">
    <!-- <input type="text" v-model="msg"> -->
    <saveButton :saveButton="this.saveButton"></saveButton>
    <backButton :backButton="this.backButton"></backButton>
    <deleteButton :deleteButton="this.deleteButton"></deleteButton>
    <editButton :editButton="this.editButton"></editButton>
    <defaultButton :defaultButton="this.defaultButton"></defaultButton>

  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      // msg:'123',
      saveButton:[{click:this.save}],
      editButton:[{click:this.edit}],
      deleteButton:[{click:this.delete}],
      backButton:[{click:this.back}],
      defaultButton:[{label:'默认',icon:'el-icon-user',click:this.default}],

    }
  },
  methods: {
    save(){
      console.log('保存');
    },
    edit(){
      console.log('编辑');
      // this.msg = '编辑'
    },
    delete(){
      console.log('删除');
    },
    back(){
      console.log('back');
    },
    default(){
      console.log('默认事件');
    }
  },
}
</script>

<style>
</style>
