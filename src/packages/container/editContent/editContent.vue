<template>
    <div class="mt-edit-cpmtent">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'mtEditContent', //编辑页面区域

}
</script>
<style scoped>
.mt-edit-cpmtent {
    display: block;
    flex: 1;
    background-color: lightblue;
    overflow: auto;
    box-sizing: border-box;
    padding: 20px 20px 0 20px;
}
</style>>