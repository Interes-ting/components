<template>
 <el-button-group>
  <el-button v-for="(btn,index) in this.savebtn" :key="index" :type="btn.type ? btn.type:'primary'"
   :icon="btn.icon" :size="btn.size?btn.size:''" @click="btn.click">{{btn.label}}</el-button>
 </el-button-group>
</template>
  
<script>
export default {
 name: 'mtSaveButton', //保存按钮
 props: {
  savebtn: {
   type: Array,
   required: true
  }
 }
}
</script>
<style scoped>

</style>