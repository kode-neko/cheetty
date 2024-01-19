<!-- eslint-disable @typescript-eslint/prefer-function-type -->
<script setup lang="ts">
defineProps<{
  label: string,
  icon?: string[] | string,
  solid?: boolean,
  size?: 'md' | 'sm',
  type?: 'button' | 'submit' | 'reset',
}>();
defineEmits<{
  (e: 'click'): void
}>();
</script>

<template>
  <button
    :class="[solid ? 'solid' : 'line', size ? size : 'md']"
    :type="type ?? 'button'"
    @click="$emit('click')"
  >
    <font-aw
      v-if="icon"
      class="icon"
      :icon="icon"
    />
    <div class="label">
      {{ label }}
    </div>
  </button>
</template>

<style scoped lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/units.less';

.btn {
  border-radius: @radius-sm;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  &.md {
    height: 3.13rem;
    padding: 0 1.25rem;
    .label {
      font-size: 1.13rem;
    }
  }
  &.sm {
    height: 2.38rem;
    padding: 0 1rem;
    .label {
      font-size: 0.88rem;
    }
  }
}

.solid {
  .btn();
  background-color: @pink-back;
  transition: background-color 0.3s;
  .icon, .label{
    color: @white;
  }
  &:hover {
    background-color: @lilac-01;
  }
}

.line {
  .btn();
  border: 0.13rem solid @pink-back;
  transition: border 0.3s;
  .icon, .label{
    color: @pink-back;
    transition: color 0.3s;
  }
  &:hover {
    border: 0.13rem solid @lilac-01;
    .icon, .label{
      color: @lilac-01;
    }
  }
}

.icon {
  margin-right: 0.63rem;
  height: 1.5rem;
}

.label {
  text-transform: uppercase;
  font-weight: bold;
}
</style>