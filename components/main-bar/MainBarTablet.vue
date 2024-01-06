<script setup lang="ts">
import { ref } from 'vue';
import FieldSearch from '../form-compos/FieldSearch.vue';
import BtnIcon from '../form-compos/BtnIcon.vue';

const searchStr = ref<string>('');
</script>

<template>
  <div class="cont">
    <div class="left">
      <h1 class="title">
        Cheetty
      </h1>
      <div class="opts">
        <FieldSearch placeholder="buscar..." :model-value="searchStr" />
        <BtnIcon icon="fa-solid fa-pencil" color="pink" />
      </div>
    </div>
    <div class="right">
      <font-aw :class="['iconBtn', 'md']" icon="fa-solid fa-bars" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';

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
