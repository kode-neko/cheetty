<script setup lang="ts">
withDefaults(defineProps<{
  label: string,
  del?: boolean,
  size: 'md' | 'sm',
  color: 'purple' | 'lilac'
}>(), {
  del: false,
});

defineEmits<{
  (e: 'del'): void
}>();
</script>

<template>
  <div :class="['tag', color, size]">
    <div class="label">
      {{ label }}
    </div>
    <font-aw
      v-if="del"
      class="icon"
      icon="fas fa-xmark"
      @click="$emit('del')"
    />
  </div>
</template>

<style scoped lang="less">
@import '../assets/styles/colors.less';
@import '../assets/styles/units.less';

.tag {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  border-radius: @radius-sm;
  color: @white;
}

.icon {
  height: 1.5rem;
  color: @white;
  &:hover {
    cursor: pointer;
  }
}

.purple {
  background-color: @purple-01;
}

.lilac {
  background-color: @lilac-01;
}

.md {
  height: 2.5rem;
  padding: 0.38rem 1.25rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.sm {
  height: 1.88rem;
  padding: 0.25rem 0.63rem;
  font-size: 1.13rem;
  font-weight: normal;
}
</style>