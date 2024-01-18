<script setup lang="ts">
import Field from './Field.vue';

defineProps<{
  placeholder: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void,
  (e: 'delete'): void
}>();

const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div :class="$style.cont">
    <Field
      :model-value="modelValue"
      :placeholder="placeholder"
      @input="handleInput"
    />
    <font-aw
      :class="$style.icon"
      icon="fa-solid fa-circle-xmark"
      @click="$emit('delete')"
    />
  </div>
</template>

<style module lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/units.less';

.cont {
  display: flex;
  align-items: center;
  gap: 0.63rem;

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
    transition: color 0.3s;
    &:hover {
      cursor: pointer;
      color: @purple-01;
    }
  }
}


</style>