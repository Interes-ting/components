<template>
    <el-form :inline="true">
        <el-col>
            <slot></slot>
        </el-col>
    </el-form>
</template>
<script>
export default {
    name:'mtForm',
}
</script>