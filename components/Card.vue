<template>
  <div :class="$style.cont">
    <header :class="$style.header">
      <h2 :class="$style.title">
        {{ cheat.title }}
      </h2>
    </header>
    <div :class="$style.body">
      <p
        v-if="cheat.content.length === 1"
        :class="$style.text"
      >
        {{ cheat.content[0] }}
      </p>
      <ul
        v-else
        :class="$style.list"
      >
        <li
          v-for="(cont, index) in cheat.content"
          :key="index"
        >
          {{ cont }}
        </li>
      </ul>
    </div>
    <footer :class="$style.footer">
      <div :class="$style.tags">
        <Tag
          v-for="tag in cheat.tags"
          :key="tag"
          :label="tag"
          size="sm"
          color="purple"
        />
      </div>
      <div :class="$style.actions">
        <BtnIcon
          icon="fa-solid fa-pencil"
          color="lilac"
        />
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { Cheat } from "../models";
import BtnIcon from "./form-compos/BtnIcon.vue";
import Tag from "./Tag.vue";

defineProps<{
  cheat: Cheat
}>();
</script>

<style lang="less" module>
@import "../assets/styles/colors.less";
@import "../assets/styles/shadow.less";

.cont {
  border-radius: 1.25rem;
  background-color: @purple-02;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.header {
  .title {
    padding: 1.25rem 1.25rem 0 1.25rem;
    color: @pink-01;
    text-shadow: @neon-effect;
    font-size: 1.5rem;
    font-weight: bold;
  }
}

.body {
  color: @white;
  font-size: 1.25rem;
  padding: 0 1.25rem;
  .text {

  }
  .list {
    margin-left: 1.25rem;
  }
  .list>li {
    list-style: disc;
  }
}

.footer {
  display: flex;
  align-items: flex-end;
  padding: 1.25rem;
  .tags {
    flex-grow: 1;
    display: flex;
    gap: 0.63rem;
  }
  .actions {

  }
}
</style>