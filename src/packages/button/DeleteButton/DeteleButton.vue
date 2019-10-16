<template>
 <el-button-group>
  <el-button v-for="(btn,index) in this.deletebtn" :key="index" :type="btn.type ? btn.type:'primary'"
   :icon="btn.icon" :size="btn.size?btn.size:''" @click="btn.click">{{btn.label}}</el-button>
 </el-button-group>
</template>
  
<script>
export default {
 name: 'mtDeleteButton', // 删除按钮
 props: {
  deletebtn: {
   type: Array,
   required: true
  }
 }
}
</script>
<style scoped>

</style>