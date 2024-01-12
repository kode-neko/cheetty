<script setup lang="ts">
import Overlay from '../Overlay.vue';
import Tag from '../Tag.vue';

defineProps<{
  search: string;
  isVisible: boolean;
  results: string[][];
}>();

const emit = defineEmits<{
  (e: 'close'): void,
  (e: 'search', results: string): void,
  (e: 'result', social: string[]): void
}>();

const handleSearch = (event: Event) => {
  emit('search', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div :class="$style.outer">
    <div :class="[$style.search, isVisible ? $style.show : $style.hide]">
      <div :class="$style.field">
        <input
          :class="$style.input"
          :value="search"
          placeholder="buscar..."
          @input="handleSearch"
        >
        <font-aw
          :class="$style.icon"
          icon="fa-solid fa-xmark-circle"
        />
      </div>
      <ul :class="$style.result">
        <li
          v-for="(res, index) in results"
          :key="index"
        >
          <Tag
            v-for="ele in res"
            :key="ele"
            :label="ele"
            size="sm"
            color="purple"
            @click="$emit('result', res)"
          /> 
        </li>
      </ul>
    </div>
    <Overlay
      :is-visible="isVisible"
      @click="$emit('close')"
    />
  </div>
</template>

<style lang="less" module>
@import '../assets/styles/shadow.less';
@import '../assets/styles/colors.less';

.search {
  top: 0;
  position: absolute;
  z-index: 11;
  width: 100%;
  color: @white;
}
.field {
  position: relative;
  z-index: 12;
  gap: 1.25rem;
  display: flex;
  align-items: center;
  color: @white;
  background-color: @pink-back;
  padding: 0 1.25rem;
  height: 6.25rem;
  box-shadow: @main-menu-shadow;
  .input {
    flex-grow: 1;
    font-size: 1.75rem;
    color: @white;
    &::placeholder {
      color: @pink-01;
      font-style: italic;
    }
  }
  .icon {
    height: 2rem;
  }
}

.result {
  position: relative; 
  z-index: 11;
  display: flex;
  height: 3.75;
  background-color: @purple-02;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  box-shadow: @main-menu-shadow;
  &>li {
    padding: 1.25rem; 
    border-bottom: 0.13rem solid @purple-01;
    display: flex;
    gap: 0.63rem;
  }
}

</style>
