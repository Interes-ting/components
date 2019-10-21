<template>
    <div class="mt-list-content">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'mtListContent', //列表内容区域容器

}
</script>
<style scoped>
.mt-list-content {
    display: block;
    flex: 1;
    background-color: pink;
    overflow: auto;
    box-sizing: border-box;
    padding:20px;
}
</style>>