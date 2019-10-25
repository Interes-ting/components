<template>
    <el-form :label-width="labelWidth">
        <el-row>
            <el-col :span="span"><slot name="input" ></slot></el-col>
        </el-row>
    </el-form>
</template>
<script>
export default {
    name:'mtForm',
    props:{
        labelWidth:{
            type:String,
            default:'100px'
        },
        span:{
            type:Number,
            default:8
        },
        
    }
}
</script>