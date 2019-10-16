<template>
 <el-button-group>
  <el-button v-for="(btn,index) in this.passbtn" :key="index" :type="btn.type ? btn.type:'primary'"
   :icon="btn.icon" :size="btn.size?btn.size:''" @click="btn.click">{{btn.label}}</el-button>
 </el-button-group>
</template>
  
<script>
export default {
 name: 'mtPassButton', // 查询按钮
 props: {
  passbtn: {
   type: Array,
   required: true
  }
 }
}
</script>
<style scoped>

</style>