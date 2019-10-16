<template>
 <el-button-group>
  <el-button v-for="(btn,index) in this.logoutbtn" :key="index" :type="btn.type ? btn.type:'primary'"
   :icon="btn.icon" :size="btn.size?btn.size:''" @click="btn.click">{{btn.label}}</el-button>
 </el-button-group>
</template>
  
<script>
export default {
 name: 'mtLogoutButton', // 退出按钮
 props: {
  logoutbtn: {
   type: Array,
   required: true
  }
 }
}
</script>
<style scoped>

</style>