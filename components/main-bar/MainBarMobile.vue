<script setup lang="ts">
import { ref } from 'vue';
import MenuSide from './MenuSide.vue';

const isMenuSide = ref<boolean>(false);
const searchStr = ref<string>('');

const handleSideMenu = () => (isMenuSide.value = !isMenuSide.value);
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
        />
      </div>
    </div>
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
