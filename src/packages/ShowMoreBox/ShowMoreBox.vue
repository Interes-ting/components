<template>
  <div class="collapse-wrap" v-show="isActive">
    <slot></slot>
  </div>
</template>
<script>
import showbox from './showmore'
export default {
  name: 'mtShowMore',
  data() {
    return {
      isActive: true
    }
  }
}
</script>