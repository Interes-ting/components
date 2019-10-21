<template>
    <div class="mt-tool-bar" style="height: 60px;">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'mtToolbar', //工具栏容器

}
</script>
<style scoped>
.mt-tool-bar {
    display: block;
    background-color: #b3c0d1;
    line-height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>>