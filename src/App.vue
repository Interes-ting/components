<template>
  <div id="app">
    <backButton :backButton="this.backButton"></backButton>
    <deleteButton :deleteButton="this.deleteButton"></deleteButton>
    <editButton :editButton="this.editButton"></editButton>
    <defaultButton :defaultButton="this.defaultButton"></defaultButton>
    <saveButton :saveButton="this.saveButton"></saveButton>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      editButton:[{click:this.edit}],
      deleteButton:[{click:this.delete}],
      backButton:[{click:this.back}],
      defaultButton:[{label:'默认',click:this.default,type:"success"}],
      saveButton:[{click:this.save}],
    }
  },
  methods: {
    save(){
      console.log('保存');
    },
    edit(){
      console.log('编辑');
    },
    delete(){
      console.log('删除');
    },
    back(){
      console.log('back');
    },
    default(){
      console.log('默认事件');
    },
    save(){
      console.log('保存');
    }
  },
}
</script>

<style>
</style>
