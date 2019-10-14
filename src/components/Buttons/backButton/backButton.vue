<template>
  <div>
    <el-button icon="el-icon-back" v-for="(btn,index) in this.backButton" :key="index" :size="btn.size?btn.size:''" @click="btn.click">返回</el-button>
  </div>
</template>
 
<script>
export default {
  name: 'backButton', // 返回按钮
  props: {
    backButton: {
      type: Array,
      required: true
    }
  }
}
</Script>