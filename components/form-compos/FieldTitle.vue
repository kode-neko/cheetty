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
  <input
    class="field"
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>

<style scoped lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/shadow.less';

.field {
  width: 100%;
  color: @pink-01;
  text-shadow: @neon-effect;
  font-size: 1.5rem;
  font-weight: bold;
  &::placeholder {
    color: @pink-01;
    font-style: italic;
    text-shadow: none;
  }
}
</style>