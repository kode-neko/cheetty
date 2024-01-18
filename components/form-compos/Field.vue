<script setup lang="ts">
const { modelValue, pattern } = defineProps<{
  placeholder: string;
  modelValue: string;
  pattern?: RegExp;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};

const handleTyping = (event: KeyboardEvent) => {
  if(pattern && pattern.test(modelValue + event.key)) {
    const value = (event.target as HTMLInputElement).value;
    emit('update:modelValue', value + event.key);
  } else {
    emit('update:modelValue', modelValue);
  }
};
</script>

<template>
  <input
    class="field"
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    @input="handleInput"
    @keydown="handleTyping"
  />
</template>

<style scoped lang="less">
@import '../../assets/styles/colors.less';

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
</style>