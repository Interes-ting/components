<template>
    <div class="block">
        <!-- 分页 -->
        <el-pagination
            @size-change="handleSizeChange"  
            @current-change="handleCurrentChange"
            style="text-align: center;margin:20px 0;"
            :current-page="pager.pageNo"
            :page-size="pager.limit"
            :page-sizes="pager.sizes"
            :total="pager.total"
            layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
    </div>
</template>
<script>
export default {
    name: 'mtPage', //标签命名
    props: {
        pager: Object,
    },
    data() {
        return {
          // 默认
          delList: null
        }
    },
    methods: {
        handleSizeChange(val) { //handleSizeChange 改变单页数据大小
            this.$emit('handleSizeChange', val);  
        },
        handleCurrentChange(val) {  //handleCurrentChange是翻页事件的处理函数
            this.$emit('handleCurrentChange', val);  
        },

    }
}
</script>