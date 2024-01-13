<script setup lang="ts">
import { ref } from 'vue';
import FieldSearch from '../form-compos/FieldSearch.vue';
import MenuContext from '../MenuContext.vue';
import Btn from '../form-compos/Btn.vue';
import useGlobals from '../../stores/globals';
import type { Link } from '~/models';

const emit = defineEmits<{
  (e: 'search', val: string): void,
  (e: 'link', path: string): void
}>();

const { socialList, linksKey } = useGlobals();
const searchStr = ref<string>('');
const toggleMenu = ref<boolean>(false);
const isSelSocial = ref<boolean>(false);

const handleSocialClickOpt = (social: Link) => {
  isSelSocial.value = true;
  toggleMenu.value = false;
  emit('link', social.path);
};
const handleSocialMenu = () => {
  if(isSelSocial.value) {
    isSelSocial.value = false;
    toggleMenu.value = false;
  } else {
    toggleMenu.value = !toggleMenu.value;
  }
};
</script>

<template>
  <div class="outer">
    <div class="cont">
      <div class="left">
        <h1 class="title">
          Cheetty
        </h1>
        <div class="search">
          <FieldSearch
            placeholder="buscar..."
            :model-value="searchStr"
            @search="$emit('search', searchStr)"
          />
        </div>
      </div>
      <div class="right">
        <Btn
          label="New cheat"
          icon="fa-solid fa-circle-plus"
          :solid="true"
          @click="$emit('link', linksKey.create.path)"
        />
        <font-aw
          :class="['iconBtn', 'sm']"
          icon="fa-solid fa-envelope"
          @click="$emit('link', linksKey.contact.path)"
        />
        <font-aw
          :class="['iconBtn', 'sm', toggleMenu ? 'active' : '']"
          icon="fa-solid fa-share-nodes"
          @click="handleSocialMenu"
        />
        <font-aw
          :class="['iconBtn', 'sm']"
          icon="fa-solid fa-door-open"
          @click="$emit('link', linksKey.logout.path)"
        />
      </div>
    </div>
    <div
      :class="['menuSocial', toggleMenu ? 'show' : 'hide']"
      @mouseleave="handleSocialMenu"
    >
      <MenuContext
        :opts="socialList"
        @clickopt="handleSocialClickOpt"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';

.outer {
  position: relative;
}

.cont {
  position: relative;
  z-index: 1;
}

.menuSocial {
  position: absolute;
  right: -5rem;
  z-index: 0;
  transition: top 0.5s;
  &.hide {
    top: -7rem;
  }
  &.show {
    top: 6rem;
  }
}

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
