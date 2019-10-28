<template>
     <el-form :label-width="labelWidth">
        <el-row>
            <slot></slot>
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
        size:{
            type:String,
            default:''
        },
        
    }
}
</script>