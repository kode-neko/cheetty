<!-- eslint-disable @typescript-eslint/prefer-function-type -->

<script setup lang="ts">
defineProps<{
  placeholder: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void,
  (e: 'search'): void
}>();

const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="search">
    <input
      class="field"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      @input="handleInput"
      @keyup.enter="$emit('search')"
    />
    <font-aw class="icon" icon="fa-solid fa-magnifying-glass" @click="$emit('search')" />
  </div>
</template>


<style scoped lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/units.less';

.search {
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
  &:hover {
    cursor: pointer;
  }
}
</style>