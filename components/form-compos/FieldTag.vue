<template>
  <div :class="$style.cont">
    <Field
      :model-value="tagsStr"
      placeholder="tag01 tag02 tag03..."
      :pattern="tagPattern"
      @update:model-value="transformTagStr"
    />
    <div :class="$style.tags">
      <Tag
        v-for="tag in tags"
        :key="tag"
        :label="tag"
        :del="true"
        size="md"
        color="lilac"
        @delete="handleDeleteTag(tag)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from '../Tag.vue';
import useGlobals from '../../stores/globals';
import Field from './Field.vue';

const { tags } = defineProps<{
  tags: string[],
}>();

const emit = defineEmits<{
  (e: 'change', value: string[]): void
}>();

const { tagPattern } = useGlobals();
const tagsStr = tags.join(' ');
const transformTagStr = (str: string) => {
  const newTags = str.split(/\s/);
  emit('change', newTags);
};
const handleDeleteTag = (tag: string) => {
  const newTags = tags.filter(t => t !== tag);
  emit('change', newTags);
};
</script>

<style module lang="less">
.cont {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.tags {
  display: flex;
  gap: 1.25rem;
}
</style>