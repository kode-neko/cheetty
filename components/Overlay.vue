<script setup lang="ts">
defineProps<{
  isVisible: boolean
}>();
defineEmits<{
  (e: 'click'): void,
}>();
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isVisible"
      class="overlay"
      @click="$emit('click')"
    />
  </Transition>
</template>

<style scoped lang="less">
@import '../assets/styles/colors.less';
@import '../assets/styles/transitions.less';
.overlay {
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
  background-color: @purple-trans-01;
}
</style>