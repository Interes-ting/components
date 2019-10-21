<template>
    <div class="mt-search-form">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'mtSearchForm', //查询条件区域

}
</script>
<style scoped>
.mt-search-form {
    display: block;
    flex: 1;
    background-color: yellow;
    overflow: auto;
    box-sizing: border-box;
    padding: 20px 20px 0 20px;
}
</style>>