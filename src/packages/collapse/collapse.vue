<template>
  <div class="mt-collapse">
    <!-- overflow: hidden：清除子元素相对父元素的超界溢出 -->
    <div
      style="overflow: hidden;transition:.4s;"
      :style="{height : showMore ? 'auto': showHeight + 'px'}"
    >
      <div ref="content" style="padding:20px">
        <slot>
          <!-- 当外界 <show-more> 标签中有元素时，使用 <show-more> 标签中的元素进行渲染，否则使用下面这个 div 进行渲染 -->
          <!-- <div v-html="content">
            123456
          </div>-->
        </slot>
      </div>
    </div>
    <div class="control" v-show="isLongContent" :class="{'show-more' : showMore}">
      <el-button type="text" @click="_toggleShowMore" style="width:100%;hieght:100%">
        <i class="el-icon-caret-top" v-if="showMore"></i>
        <i class="el-icon-caret-bottom" v-else></i>
        {{ showMore ? '收起 ': '显示更多 '}}
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mtCollapse',
  props: {
    showHeight: {
      type: Number,
      required: true,
      default: 200
    },
    content: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      showMore: false,
      isLongContent: true
    }
  },
  watch: {
    // 每当内容变化时都重新计算一次高度
    content() {
      this._calculateHeight()
    }
  },
  methods: {
    refresh() {
      this._calculateHeight()
    },
    _calculateHeight() {
      // $nextTick()，等待内容获取完毕再计算高度，异步处理
      this.$nextTick().then(() => {
        let contentHeight = this.$refs.content.clientHeight
        if (contentHeight > this.showHeight) {
          this.isLongContent = true
        } else {
          this.isLongContent = false
        }
      })
    },
    _toggleShowMore() {
      this.showMore = !this.showMore
    }
  }
}
</script>
<style lang="less" scoped>
.mt-collapse {
  position: relative;
  border: 1px solid #eaeefb;
  .control {
    position: absolute;
    bottom: -15px;
    width: 100%;
    height: 40px;
    // padding-top: 40px;
    text-align: center;
    border: 1px solid #eaeefb;
    background-color: #f9fafc;

    &.show-more {
      padding-top: 0;
      background: none;
      background-color: #f9fafc;
    }
  }
}
</style>