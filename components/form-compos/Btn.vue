<!-- eslint-disable @typescript-eslint/prefer-function-type -->
<script setup lang="ts">
defineProps<{
  label: string,
  icon?: string[] | string,
  solid?: boolean
}>();
defineEmits<{
  (e: 'click'): void
}>();
</script>

<template>
  <button :class="solid ? 'solid' : 'line'" @click="$emit('click')">
    <font-aw v-if="icon" class="icon" icon="fas fas-circle-plus" />
    <div class="label">
      {{ label }}
    </div>
  </button>
</template>

<style scoped lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/units.less';

.btn {
  height: 3.13rem;
  padding: 0 1.25rem;
  border-radius: @radius-sm;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
}

.solid {
  .btn();
  background-color: @pink-back;
  .icon, .label{
    color: @white;
  }
}

.line {
  .btn();
  border: 0.13rem solid @pink-back;
  .icon, .label{
    color: @pink-back;
  }
}

.icon {
  margin-right: 0.63rem;
  height: 1.5rem;
}

.label {
  font-size: 1.13rem;
  text-transform: uppercase;
  font-weight: bold;
}
</style>