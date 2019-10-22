<template>
    <div>
        <!-- 分页 -->
        <el-pagination
            @size-change="handleSizeChange"  
            @current-change="handleCurrentChange"
            style="text-align: center;margin:20px 0;"
            :current-page="currentPage"
            :page-size="pageSize"
            :page-sizes="pageSizes"
            :total="total"
            layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
    </div>
</template>
<script>
export default {
    name: 'mtPage', //标签命名
    props: {
        currentPage: {
            type: Number,
            default:()=>{}
        },
        pageSizes: {
            type: Array,
            default:()=>{}
        },
        pageSize: {
            type: Number,
            default:()=>{}
        },
        total: {
            type: Number,
            default:()=>{}
        }
    },
    methods: {
        handleSizeChange(val) { //handleSizeChange 改变单页数据大小
            this.$emit('sizeChange', val);  
        },
        handleCurrentChange(val) {  //handleCurrentChange是翻页事件的处理函数
            this.$emit('currentChange', val);  
        },

    }
}
</script>