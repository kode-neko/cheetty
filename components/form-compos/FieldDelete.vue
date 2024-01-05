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
    <font-aw class="icon" icon="fa-solid fa-circle-xmark" />
  </div>
</template>

<style scoped lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/units.less';

.cont {
  height: 3.25rem;
  display: flex;
  align-items: center;
  gap: 0.63rem;
}

.field {
  width: 100%;
  height: 100%;
  color: @white;
  font-size: 1.13rem;
  border-bottom: 0.2rem solid @pink-01;
  box-shadow: 0 1.13rem 1.13rem -1rem @pink-back, 0 0.38rem 0.38rem -0.38rem @pink-back;
  &::placeholder {
    color: @pink-01;
    font-style: italic;
  }
}

.icon {
  flex-basis: fit-content;
  height: 1.75rem;
  width: 1.75rem;
  color: @pink-01;
}
</style>