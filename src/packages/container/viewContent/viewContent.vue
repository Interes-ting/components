<template>
    <div class="mt-view-content" style="height: 60px;">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'mtViewContent', //查看页面容器

}
</script>
<style scoped>
.mt-view-content {
    display: block;
    background-color: green;
    line-height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>