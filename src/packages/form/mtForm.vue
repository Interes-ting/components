<template>
    <el-form :inline="true"  :label-width="labelWidth">
        <el-row>
            <el-col :span="8"><slot></slot></el-col>
            <el-col :span="8"><slot></slot></el-col>
            <el-col :span="8"><slot></slot></el-col>
        </el-row>
    </el-form>
</template>
<script>
export default {
    name:'mtFormThree',
    props:{
        labelWidth:{
            type:String,
            default:'100px'
        },
    }
}
</script>