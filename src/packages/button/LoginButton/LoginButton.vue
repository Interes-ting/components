<template>
 <el-button-group>
  <el-button v-for="(btn,index) in this.loginbtn" :key="index" :type="btn.type ? btn.type:'primary'"
   :icon="btn.icon" :size="btn.size?btn.size:''" @click="btn.click">{{btn.label}}</el-button>
 </el-button-group>
</template>
  
<script>
export default {
 name: 'mtLoginButton', // 登录按钮
 props: {
  loginbtn: {
   type: Array,
   required: true
  }
 }
}
</script>
<style scoped>

</style>