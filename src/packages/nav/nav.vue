<template>
  <el-menu
    :default-active="active"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-menu-item index="2">处理中心</el-menu-item>
    <el-menu-item index="3">处理中心</el-menu-item>
    <el-menu-item index="4">处理中心</el-menu-item>
    <el-menu-item index="5">处理中心</el-menu-item>
    <el-menu-item index="6">处理中心</el-menu-item>
    <el-menu-item index="7">处理中心</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'mtNav',
  prop: {
    active: {
      type: String,
      default: '1'
    },
    bgcolor: {
      type: String,
      default: '#545c64'
    },
    txtcolor: {
      type: String,
      default: '#fff'
    },
    activecolor: {
      type: String,
      default: '"#ffd04b'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>