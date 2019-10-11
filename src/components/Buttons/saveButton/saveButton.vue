<template>
  <div>
    <el-button v-for="(btn,index) in this.saveButton" :key="index" :size="btn.size?btn.size:''" @click="btn.click" type="primary" icon="el-icon-check">保存</el-button>
  </div>
</template>
 
<script>
export default {
  name: 'saveButton',
  props: {
    saveButton: {
      type: Array,
      required: true
    }
  }
}
</Script>