
<template>
    <div id="commonTable">
        <el-table ref="mt-table" :data="data" :max-height="maxHeight" stripe tooltip-effect="light"  @selection-change="handleSelectionChange">
            <!-- 多选框 -->
            <el-table-column type="selection" width="55" ></el-table-column>
            <!-- 这里使用插槽，在父组件中放置编辑删除按钮 -->
            <slot name="table_oper"/>
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
                >
                </el-table-column>
            </template>
        </el-table>
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
    name: 'mtTable', //标签命名
    props: {
        columns: Array,
        data: Array,
        pager: Object,
        maxHeight: {
            type: Number,
            default: 2000
        },
    },
    methods: {
        handleSelectionChange(val) { //多选框处理函数
            // this.$emit 触发app.vue里面的多选事件
            this.$emit('handleSelectionChange', val);  
            this.multipleSelection = val; //保存每次多选框选择的值
        },

        handleSizeChange(val) { //handleSizeChange 改变单页数据大小
            this.$emit('handleSizeChange', val);  

        },
        handleCurrentChange(val) {  //handleCurrentChange是翻页事件的处理函数
            this.$emit('handleCurrentChange', val); 

        },

        reload() { //刷新页面
            this.$Axios.post(
                this.url,
                { page: this.currentPage, size: this.pagesize },
                res => {
                    if (res.data.success) {
                        this.$emit("childByValue", res.data.data);
                        this.total = res.data.count;
                    } else {
                        this.$message({
                            message: res.data.msg,
                            type: "warning"
                        });
                    }
                }
            );
        },

    }
}
</script>