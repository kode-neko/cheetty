<!-- eslint-disable @typescript-eslint/prefer-function-type -->
<script setup lang="ts">
import useGlobals from '../../stores/globals';
import Overlay from '../Overlay.vue';
import type { OptsType } from './types';

defineProps<{
  isVisible: boolean;
}>();

const emit = defineEmits<{
  (e: OptsType): void,
  (e: 'social', social: string): void,
  (e: 'close'): void
}>();

const { menuLinks } = useGlobals();

const handleClick = (name: string ) => {
  emit(name as OptsType);
};
</script>

<template>
  <div :class="$style.outer">
    <div :class="[$style.menu, isVisible ? $style.show : $style.hide]">
      <div
        :class="$style.cancel"
        @click="$emit('close')"
      >
        <font-aw
          :class="$style.icon"
          icon="fa-solid fa-xmark"
        />
      </div>
      <div
        v-for="opt in menuLinks"
        :key="opt.name"
        :class="[opt.name === 'social' ? $style.eleSocial : $style.ele]"
        @click="handleClick(opt.name)"
      >
        <template v-if="opt.name === 'social'">
          <font-aw
            v-for="social in opt.links"
            :key="social.name"
            :class="$style.icon"
            :icon="social.icon"
          />
        </template>
        <template v-else>
          <font-aw
            :class="$style.icon"
            :icon="opt.icon"
          />
          <div class="label">
            {{ opt.name }}
          </div>
        </template>
      </div>
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

.menu{
  position: absolute;
  z-index: 11;
  top: 0;
  display: block;
  background-color: @purple-02;
  box-shadow: @side-menu-shadow;
  width: fit-content;
  min-height: 100vh;
  color: @white;
  transition: right 0.5s ease;
  &.show {
    right: 0;
  }
  &.hide {
    right: -20rem;
  }
  .cancel {
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: @lilac-01;
    padding: 0.63rem;
    margin-bottom: 1.75rem;
    transition: background-color 0.3s;
    &:hover {
      cursor: pointer;
      background-color: @pink-back;
    }
    .icon {
      height: 1.75rem;
    }
  }
  .common {
    display: flex;
    align-items: center;
    padding: 0.63rem 1.25rem;
    transition: background-color 0.3s;
    border-bottom: 0.13rem solid @purple-01;
    font-size: 1.13rem;
    .icon {
      height: 1.75rem;
    }
    .label {
      font-size: 1.13rem;
      font-weight: bold;
    }
  }
  .ele {
    gap: 0.63rem;
    .common();
    &:hover {
      cursor: pointer;
      background-color: @pink-back;
    }
  }
  .eleSocial {
    gap: 1.25rem;
    .common();
    .icon:hover {
      cursor: pointer;
      color: @pink-01;
    }
  }
}
</style>
