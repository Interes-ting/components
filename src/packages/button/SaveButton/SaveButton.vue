<template>
 <el-button-group>
  <el-button v-for="(btn,index) in this.savebtn" :key="index" :type="btn.type ? btn.type:'primary'"
   :icon="btn.icon" :size="btn.size?btn.size:''" @click="btn.click">{{btn.label}}</el-button>
 </el-button-group>
</template>
  
<script>
export default {
 name: 'mtSaveButton', // 注意这里的name命名，写的时候首字母开头必须大写  在使用时必须使用back-Button 
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