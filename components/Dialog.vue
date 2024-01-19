<script setup lang="ts">
import Overlay from './Overlay.vue';
import Btn from './form-compos/Btn.vue';

defineProps<{
  isVisible: boolean,
  title: string,
  msg: string,
  iconMsg?: string,
  btn01Label: string,
  btn02Label: string 
}>();

defineEmits<{
  (e: 'close'): void,
  (e: 'btn01'): void,
  (e: 'btn02'): void,
}>();
</script>

<template>
  <div :class="$style.outer">
    <Transition name="fade">
      <div
        v-if="isVisible"
        :class="$style.cont"
      >
        <div :class="$style.head">
          <h2 :class="$style.title">
            {{ title }}
          </h2><div :class="$style.actions">
            <font-aw
              :class="$style.close"
              icon="fa-solid fa-xmark"
              @click="$emit('close')"
            />
          </div>
        </div>
        <div :class="$style.body">
          <font-aw
            v-if="iconMsg"
            :class="$style.icon"
            :icon="iconMsg"
          />
          <p :class="$style.msg">
            {{ msg }}
          </p>
        </div>
        <div :class="$style.footer">
          <Btn
            v-if="btn01Label"
            :label="btn01Label"
            :solid="true"
            size="sm"
            type="button"
            @click="$emit('btn01')"
          />
          <Btn
            v-if="btn02Label"
            :label="btn02Label"
            :solid="true"
            size="sm"
            type="button"
            @click="$emit('btn02')"
          />
        </div>
      </div>
    </Transition>
    <Overlay
      :is-visible="isVisible"
      @click="$emit('close')"
    />
  </div>
</template>

<style module lang="less">
@import '../assets/styles/colors.less';
@import '../assets/styles/transitions.less';
@import '../assets/styles/shadow.less';

.outer {
  position: relative;
}
.cont {
  position: absolute;
  width: 23.755rem;
  z-index: 11;
  box-shadow: @box-shadow;
}

.head {
  display: flex;
  padding:0.63rem 1.25rem;
  background-color: @pink-back;
  border-radius: 1.25rem 1.25rem 0 0;
  .title {
    flex-grow: 1;
    font-size: 1.38rem;
    font-weight: bold;
    color: @white;
  }
  .actions {
    display: flex;
  }
  .actions .close {
    height: 1.5rem;
    color: @white;
    transition: color 0.3s;
    &:hover {
      cursor: pointer;
      color: @purple-01;
    }
  }
}

.body {
  background-color: @purple-02;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.25rem;
  gap: 0.63rem;
  .icon {
    color: @pink-01;
    height: 8rem;
  }
  .msg {
    font-size: 1.75rem;
    text-align: center;
  }
}

.footer {
  background-color: @pink-back;
  display: flex;
  gap: 1.25rem;
  justify-content: end;
  padding:0.63rem 1.25rem;
  border-radius: 0 0 1.25rem 1.25rem; 
}
</style>