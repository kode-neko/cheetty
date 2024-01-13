<script setup lang="ts">
import { ref } from 'vue';
import FieldSearch from '../form-compos/FieldSearch.vue';
import BtnIcon from '../form-compos/BtnIcon.vue';
import MenuSide from './MenuSide.vue';
import type { Link } from '~/models';

const emit = defineEmits<{
  (e: 'search', val: string): void,
  (e: 'link', path: string): void
}>();

const isMenuSide = ref<boolean>(false);
const searchStr = ref<string>('');

const handleSideMenu = () => (isMenuSide.value = !isMenuSide.value);
const handleLink = (link: Link) => { 
  emit('link', link.path);
  handleSideMenu();
};
</script>

<template>
  <div class="outer">
    <div class="cont">
      <div class="left">
        <h1 class="title">
          Cheetty
        </h1>
        <div class="opts">
          <FieldSearch
            placeholder="buscar..."
            :model-value="searchStr"
            @search="$emit('search', searchStr)"
          />
          <BtnIcon
            icon="fa-solid fa-plus"
            color="pink"
          />
        </div>
      </div>
      <div class="right">
        <font-aw
          :class="['iconBtn', 'md']"
          icon="fa-solid fa-bars"
          @click="handleSideMenu"
        />
      </div>
    </div>

    <MenuSide
      :is-visible="isMenuSide"
      @close="handleSideMenu"
      @link="handleLink"
    />
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
@import '../../assets/styles/colors.less';

.outer {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.left {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  .opts {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
}

.right {
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
