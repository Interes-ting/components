<template>
    <el-form :inline="true"  :label-width="labelWidth">
        <el-row>
            <el-col :span="8"><slot name="input-1"></slot></el-col>
            <el-col :span="8"><slot name="input-2"></slot></el-col>
            <el-col :span="8"><slot name="input-3"></slot></el-col>
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