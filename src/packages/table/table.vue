
<template>
  <div id="commonTable">
    <el-table
      ref="mt-table"
      :data="data"
      :max-height="maxHeight"
      stripe
      tooltip-effect="light"
      @selection-change="handleSelectionChange"
    >
      <!-- 多选框 -->
      <el-table-column type="selection" width="55"></el-table-column>
      <!-- 这里使用插槽，在父组件中放置编辑删除按钮 -->
      <slot name="table_oper" />
      <!-- 表格 -->
      <template v-for="(item, index) in columns">
        <el-table-column
          v-if="item.show != false"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :align="item.align?item.align:'center'"
          :width="item.width"
          show
        ></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'mtTable', //标签命名
  props: {
    columns: Array,
    data: Array,
    maxHeight: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      // 多选框的值默认
      checkval: null
    }
  },
  methods: {
    handleSelectionChange(val) {
      //多选框处理函数
      this.$emit('handleSelectionChange', val)
      this.checkval = val
      console.log(this.checkval)
      // this.$emit('childFn', this.checkval);
      this.$emit('check', this.checkval)
    }
  }
}
</script>