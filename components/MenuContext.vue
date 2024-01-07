<!-- eslint-disable @typescript-eslint/prefer-function-type -->
<script setup lang="ts">
import { type Link } from "../models";

defineProps<{
  opts: Link[]
}>();
defineEmits<{
  (e: 'clickopt', val: string): void
}>();
</script>

<template>
  <div :class="$style.menu">
    <div v-for="opt in opts" :key="opt.name" :class="$style.ele" @click="$emit('clickopt', opt.name)">
      <font-aw :class="$style.icon" :icon="opt.icon" />
      <div class="label">
        {{ opt.name }}
      </div>
    </div>
  </div>
</template>

<style lang="less" module>
@import '../assets/styles/shadow.less';
@import '../assets/styles/colors.less';

.menu{
  display: inline-block;
  background-color: @purple-02;
  box-shadow: @box-shadow;
  .ele {
    display: flex;
    align-items: center;
    gap: 0.63rem;
    padding: 0.63rem;
    color: @white;
    transition: background-color 0.3s;
    border: 0.13rem solid @purple-01;
    border-top: none;
    &:hover {
      cursor: pointer;
      background-color: @pink-back;
    }
    .icon {
      width: 1.75rem;
    }
    .label {
      font-size: 1.13rem;
      font-weight: bold;
    }
  }
}
</style>
