<template>
  <el-col :span="this.span">
    <el-form-item :label="label" :prop="prop" :rules="rules">
      <slot></slot>
    </el-form-item>
  </el-col>
</template>
<script>
export default {
  name: 'mtFormItem',
  data: function() {
    return {
      span: 8
    }
  },
  props: {
    label: {
      type: String
    },
    cc: {
      type: Number
    },
    prop: {
      type: String
    },
    rules: [Object, Array]
  },
  inject: {
    col: { default: 1 }
  },
  created: function() {
    if (this.cc) {
      this.span = this.cc
    } else {
      this.span = 24 / this.col
    }
  }
}
</script>