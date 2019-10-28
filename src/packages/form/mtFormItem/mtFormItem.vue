<template>
    <el-col :span="span"><slot></slot></el-col>
</template>
<script>
export default {
    name:'mtFormItem',
    props:{
        span:{
            type:Number,
            default:8
        }
    }
}
</script>