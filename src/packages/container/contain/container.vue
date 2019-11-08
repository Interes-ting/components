<template>
  <el-container class="mt-container">
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
  </el-container>
</template>
<script>
export default {
  name: 'mtContainer' //标签命名
}
</script>
<style type="text/css">
.el-container {
  flex-direction: column;
}
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
</style>
