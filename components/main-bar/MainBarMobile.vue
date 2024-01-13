<script setup lang="ts">
import { ref } from 'vue';
import MenuSide from './MenuSide.vue';
import MenuSearch from './MenuSearch.vue';

defineProps<{
  suggestSearch: string[][]
}>();

const emit = defineEmits<{
  (e: 'link', path: string): void,
  (e: 'search', val: string): void,
  (e: 'resultSelect', suggest: string[]): void,
}>();

const isMenuSide = ref<boolean>(false);
const isSearchMenu = ref<boolean>(false);

const handleSideMenu = () => (isMenuSide.value = !isMenuSide.value);
const handleSearchMenu = () => (isSearchMenu.value = !isSearchMenu.value);
const handleSearch = (val: string) => { emit('search', val); };
const handleResultSelect = (suggest: string[]) => { emit('resultSelect', suggest); };
</script>

<template>
  <div :class="$style.outer">
    <div :class="$style.cont">
      <div :class="$style.left">
        <font-aw
          :class="[$style.iconBtn, $style.md]"
          icon="fa-solid fa-bars"
          @click="handleSideMenu"
        />
      </div>
      <div :class="$style.center">
        <h1 :class="$style.title">
          Cheetty
        </h1>
      </div>
      <div :class="$style.right">
        <font-aw
          :class="[$style.iconBtn, $style.md]"
          icon="fa-solid fa-magnifying-glass"
          @click="handleSearchMenu"
        />
      </div>
    </div>
    <MenuSearch
      :is-visible="isSearchMenu"
      :suggest-search="suggestSearch"
      @close="handleSearchMenu"
      @search="handleSearch"
      @result-select="handleResultSelect"
    />
    <MenuSide
      :is-visible="isMenuSide"
      side="left"
      @close="handleSideMenu"
      @contact="handleSideMenu"
      @create="handleSideMenu"
      @social="handleSideMenu"
      @logout="handleSideMenu"
    />
  </div>
</template>

<style lang="less" module>
@import './style.less';

.outer {
  position: relative;
}
</style>
