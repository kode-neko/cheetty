<!-- eslint-disable @typescript-eslint/prefer-function-type -->
<script setup lang="ts">
import { ref } from 'vue';
import FieldSearch from '../form-compos/FieldSearch.vue';
import BtnIcon from '../form-compos/BtnIcon.vue';
import type { OptsType } from './types';
import MenuSide from './MenuSide.vue';

defineEmits<{
  (e: 'search', val: string): void,
}>();

const isMenuSide = ref<boolean>(false);
const searchStr = ref<string>('');

const handleSideMenu = () => (isMenuSide.value = !isMenuSide.value);
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
            icon="fa-solid fa-pencil"
            color="pink"
          />
        </div>
      </div>
      <div class="right">
        <font-aw
          v-if="isMenuSide"
          :class="['iconBtn', 'md']"
          icon="fa-solid fa-circle-xmark"
          @click="handleSideMenu"
        />
        <font-aw
          v-else
          :class="['iconBtn', 'md']"
          icon="fa-solid fa-bars"
          @click="handleSideMenu"
        />
      </div>
    </div>
    <div :class="['side', isMenuSide ? 'show' : 'hide']">
      <MenuSide
        :is-visible="true"
        @contact="handleSideMenu"
        @create="handleSideMenu"
        @social="handleSideMenu"
        @logout="handleSideMenu"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';

.outer {
  position: relative;
  .cont {
    position: absolute;
    z-index: 1;
  }
  .side {
    position: absolute;
    top: 6.2rem;
    z-index: 0;
    transition: right 0.5s;
    &.show {
      right: -5rem;
    }
    &.hide {
      right: -20.6rem;
    }
  }
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
