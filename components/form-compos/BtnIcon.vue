<!-- eslint-disable @typescript-eslint/prefer-function-type -->
<script setup lang="ts">
defineProps<{
  icon?: string[] | string,
  color: 'purple' | 'pink'
}>();
defineEmits<{
  (e: 'click'): void
}>();
</script>

<template>
  <button :class="['btn', color]" @click="$emit('click')">
    <font-aw v-if="icon" class="icon" :icon="icon" />
  </button>
</template>

<style scoped lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/units.less';

.btn {
  height: 3rem;
  width: 3rem;
  padding: 0.63rem;
  border-radius: @radius-sm;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  &.purple {
    background-color: @purple-02;
  }
  &.pink {
    background-color: @pink-back;
  }
  &:hover {
    cursor: pointer;
  }
  &.purple:hover {
    background-color: @lilac-01;
  }
  &.pink:hover {
    background-color: @lilac-01;
  }
}

.icon {
  height: 1.75rem;
  width: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: @white;
}

</style>