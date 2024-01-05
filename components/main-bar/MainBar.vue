<script setup lang="ts">
import { ref } from 'vue';
import FieldSearch from '../form-compos/FieldSearch.vue';
import Btn from '../form-compos/Btn.vue';

const searchStr = ref<string>('');
</script>

<template>
  <div class="cont">
    <div class="left">
      <h1 class="title">
        Cheetty
      </h1>
      <div class="search">
        <FieldSearch placeholder="buscar..." :model-value="searchStr" />
      </div>
    </div>
    <div class="right">
      <Btn
        label="New cheat"
        icon="fa-solid fa-circle-plus"
        :solid="true"
      />
      <font-aw :class="['iconBtn', 'sm']" icon="fa-solid fa-envelope" />
      <font-aw :class="['iconBtn', 'sm']" icon="fa-solid fa-share-nodes" />
      <font-aw :class="['iconBtn', 'sm']" icon="fa-solid fa-door-open" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/styles/fonts.less';
@import '../../assets/styles/colors.less';
@import './style.less';

.left {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.right {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1.5rem;

}
</style>
