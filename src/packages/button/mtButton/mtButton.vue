<template>
  <el-button
    ref="btn"
    class="mt-button"
    :type="type"
    :icon="icon"
    :size="size"
    @click="_click"
  >{{label}}</el-button>
</template>
  
<script>
export default {
  name: 'mtButton',
  props: {
    type: String,
    icon: String,
    size: String,
    label: String
  },
  methods: {
    _click: function() {
      this.$emit('click', function() {})
    }
  }
}
</script>
<style scoped>
</style>