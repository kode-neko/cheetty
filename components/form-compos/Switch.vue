<!-- eslint-disable @typescript-eslint/prefer-function-type -->
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  labels: [string, string],
  right?: boolean
}>();
const emit = defineEmits<{
  (e: 'click', right: boolean): void
}>();
const isRight = ref<boolean>(props.right);

const changeSw = () => {
  isRight.value = !isRight.value;
  emit('click', isRight.value);
}; 
</script>

<template>
  <div class="cont" @click="changeSw()">
    <div class="label">
      <div :class="['opt', !isRight ? 'sel' : '']">
        {{ labels[0] }}
      </div>
      <div :class="['opt', isRight ? 'sel' : '']">
        {{ labels[1] }}
      </div>
    </div>
    <div :class="['btn', isRight ? 'right' : 'left']" />
  </div>
</template>

<style scoped lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/units.less';

.cont{
  cursor:pointer;
  position: relative;
  border: 0.13rem solid @pink-01;
  border-radius: @radius-sm;
  width: 9.38rem;
  height: 2.81rem;
  background-color: @purple-01;
}

.label {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  height: 2.81rem;
  .opt {
    color: @pink-01;
    width: 4.7rem;
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color 0.5s;
  }
  .sel {
    color: @purple-01;
  }
}

.btn {
  box-sizing: border-box;
  background-color: @pink-01;
  position: absolute;
  z-index: 0;
  top: 0;
  width: 4.7rem;
  height: 2.81rem;
  transition: all 0.3s;
  &.left {
    border-radius: @radius-sm 0 0 @radius-sm;
    border-left: 0.13rem solid @pink-01;
    left: -0.1rem;
  }
  &.right {
    border-radius: 0 @radius-sm @radius-sm 0;
    left: 4.8rem;
    border-right: 0.13rem solid @pink-01;
  }
}
</style>