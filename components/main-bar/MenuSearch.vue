<script setup lang="ts">
import { ref } from 'vue';
import Overlay from '../Overlay.vue';
import Tag from '../Tag.vue';

defineProps<{
  isVisible: boolean;
  suggestSearch: string[][];
}>();

const emit = defineEmits<{
  (e: 'close'): void,
  (e: 'search', str: string): void,
  (e: 'resultSelect', suggest: string[]): void
}>();

const search = ref<string>('');

const handleSearch = (event: Event) => {
  emit('search', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div :class="$style.outer">
    <div :class="[$style.search, isVisible ? $style.show : $style.hide]">
      <div :class="$style.field">
        <input
          :value="search"
          :class="$style.input"
          placeholder="buscar..."
          @input="handleSearch"
        >
        <font-aw
          :class="$style.icon"
          icon="fa-solid fa-xmark-circle"
          @click="$emit('close')"
        />
      </div>
      <ul :class="$style.result">
        <li
          v-for="(list, index) in suggestSearch"
          :key="index"
        >
          <Tag
            v-for="ele in list"
            :key="ele"
            :label="ele"
            size="sm"
            color="purple"
            @click="$emit('resultSelect', list)"
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
  position: absolute;
  z-index: 11;
  width: 100%;
  color: @white;
  transition: top 0.3s;
  &.show {
    top:0;
  }
  &.hide {
    top: -6.25rem;
  }
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
    &:hover {
      cursor: pointer;
      color: @purple-01;
    }
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
