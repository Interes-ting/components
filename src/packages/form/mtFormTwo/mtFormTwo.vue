<template>
    <el-form :label-width="labelWidth">
        <el-row :gutter="50">
            <el-col :span="12"><slot name="input-one"></slot></el-col>
            <el-col :span="12"><slot name="input-two"></slot></el-col>
        </el-row>
    </el-form>
</template>
<script>
export default {
    name:'mtFormTwo',
    props:{
        labelWidth:{
            type:String,
            default:'100px'
        },
    }
}
</script>