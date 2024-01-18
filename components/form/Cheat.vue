<script setup lang="ts">
import { ref } from 'vue';
import Switch from '../form-compos/Switch.vue';
import FieldDelete from '../form-compos/FieldDelete.vue';
import FieldTitle from '../form-compos/FieldTitle.vue';
import FieldTag from '../form-compos/FieldTag.vue';
import Textarea from '../form-compos/Textarea.vue';
import Btn from '../form-compos/Btn.vue';
import type { Cheat } from '~/models';

const { modelValue: cheat } = defineProps<{
  modelValue: Cheat
}>();

defineEmits<{
  (e:'update:modelValue', cheat: Cheat): void
}>();

const cheatForm = ref<Cheat>(cheat);
const contentList = ref<string[]>(typeof cheat.content === 'string' ? [] : cheat.content);
const contentText = ref<string>(typeof cheat.content === 'string' ? cheat.content : '');
const isText = ref<boolean>(typeof cheat.content === 'string');

const handleClickSw = () => {isText.value = !isText.value;};
const handleDeleteTag = (val: string[]) => {cheatForm.value.tags = val;};
const addNewField = () => {contentList.value = [
  ...contentList.value, ''
];};
const deleteField = (index: number) => {
  contentList.value.splice(index, 1);
};
</script>

<template>
  <div :class="$style.cont">
    <form :class="$style.form">
      <FieldTitle
        :model-value="cheatForm.title"
        placeholder="cheat title"
        @update:model-value="(val) => $emit('update:modelValue', {...cheatForm, title: val})"
      />
      <Switch
        :labels="['list', 'text']"
        :right="true"
        @click="handleClickSw"
      />
      <div :class="$style.content">
        <template v-if="!isText">
          <FieldDelete
            v-for="(ele, index) in contentList"
            :key="index"
            :model-value="ele"
            placeholder="contenido..."
            @update:model-value="(val) => $emit('update:modelValue', {...cheatForm, content: contentList.map((c,i) => index === i ? val : c)})"
            @delete="() => deleteField(index)"
          />
          <div>
            <Btn
              label="añadir"
              icon="fa-solid fa-circle-plus"
              :solid="false"
              @click="addNewField"
            />
          </div>
        </template>
        <template v-else>
          <Textarea
            :model-value="contentText"
            placeholder="contenido..."
            @update:model-value="(val) => $emit('update:modelValue', {...cheatForm, content: val})"
          />
        </template>
      </div>

      <FieldTag
        :tags="cheatForm.tags"
        @change="handleDeleteTag"
      />
    </form>
  </div>
</template>

<style module lang="less">
@import '../../assets/styles/colors.less';

.form {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-radius: 1.25rem;
  background-color: @purple-02;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
</style>