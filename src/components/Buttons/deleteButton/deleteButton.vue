
<template>
  <div>
    <el-button type="danger" icon="el-icon-delete" v-for="(btn,index) in this.deleteButton" :key="index" :size="btn.size?btn.size:''" @click="btn.click">删除</el-button>
  </div>
</template>
 
<script>
export default {
  name: 'deleteButton',
  props: {
    deleteButton: {
      type: Array,
      required: true
    }
  }
}
</Script>