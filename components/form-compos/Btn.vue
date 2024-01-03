<script setup lang="ts">
defineProps<{
  label: string,
  icon?: string[],
  solid: true
}>();
</script>

<template>
  <div>
    <div></div>
    <div>{{ label }}</div>
  </div>
</template>

<style scoped lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/units.less';

</style>