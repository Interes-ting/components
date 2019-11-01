<template>
  <el-form
    :col="col"
    :model="model"
    :label-width="labelWidth"
    :rules="rules"
    ref="ruleForm"
    :size="size"
  >
    <slot></slot>
  </el-form>
</template>
<script>
export default {
  name: 'mtForm',
  props: {
    labelWidth: {
      type: String,
      default: '100px'
    },
    col: {
      type: Number,
      default: 1
    },
    rules: {
      type: Object
    },
    prop: {
      type: String
    },
    model: {
      type: Object
    },
    size: {
      type: String,
      default: ''
    }
  },

  provide: function() {
    return {
      col: this.col
    }
  }
}
</script>