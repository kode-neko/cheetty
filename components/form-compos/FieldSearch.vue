<!-- eslint-disable @typescript-eslint/prefer-function-type -->

<script setup lang="ts">
defineProps<{
  placeholder: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="cont">
    <input class="field" type="text" :value="modelValue" :placeholder="placeholder" @input="handleInput" />
    <font-aw class="icon" :icon="['fas', 'magnifying-glass']" />
  </div>
</template>


<style scoped lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/units.less';

.cont {
  height: 3.25rem;
  border-radius: @radius-sm;
  background-color: @purple-01;
  display: flex;
  align-items: center;
  gap: 0.63rem;
  padding: 0 1.25rem;
}

.field {
  width: 100%;
  height: 100%;
  color: @white;
  font-size: 1.13rem;
  &::placeholder {
    color: @lilac-01;
  }
}

.icon {
  flex-basis: fit-content;
  height: 1.75rem;
  width: 1.75rem;
  color: @white;
}
</style>