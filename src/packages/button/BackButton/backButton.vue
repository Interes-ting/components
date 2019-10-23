<template>
 <el-button-group>
  <el-button v-for="(btn,index) in this.backbtn" :key="index" :type="btn.type ? btn.type:'primary'"
   :icon="btn.icon" :size="btn.size?btn.size:''" @click="btn.click">{{btn.label}}</el-button>
 </el-button-group>
</template>
  
<script>
export default {
 name: 'mtBackButton', // 注意这里的name命名，创建组件时使用驼峰命名，调用组件的时候需要将驼峰改为横线-写法 
 props: {
  backbtn: {
   type: Array,
   required: true
  }
 }
}
</script>
<style scoped>

</style>