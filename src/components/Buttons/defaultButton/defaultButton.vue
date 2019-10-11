<template>
  <div>
    <el-button v-for="(btn,index) in this.defaultButton" :type="btn.type ? btn.type:''"
      :icon="btn.icon" :key="index" 
    :size="btn.size?btn.size:''" @click="btn.click">{{btn.label}}</el-button>
  </div>
</template>
 
<script>
export default {
  name: 'defaultButton', // 删除按钮
  props: {
    defaultButton: {
      type: Array,
      required: true
    }
  }
}
</Script>