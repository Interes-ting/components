<template>
  <el-form :col="col" :label-width="labelWidth">
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
    }
  },

  provide: function() {
    return {
      col: this.col
    }
  }
}
</script>