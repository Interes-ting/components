<template>
  <div>
    <el-button v-for="(btn,index) in this.editButton" :key="index" :size="btn.size?btn.size:''" @click="btn.click" icon="el-icon-edit">编辑</el-button>
  </div>
</template>
<script>
export default {
  name: 'editButton', 
  props: {
    editButton: {
      type: Array,
      required: true
    }
  }
}
</Script>