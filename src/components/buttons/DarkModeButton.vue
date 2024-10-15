<script setup lang="ts">
import { useDarkModeStore } from '@/stores/darkMode';
import { onMounted } from 'vue';

const darkModeStore = useDarkModeStore();

onMounted(() => {
  darkModeStore.setBodyClass();
});
</script>

<template>
  <span @click="darkModeStore.changeDarkMode()" class="hover:text-white cursor-pointer ml-1">
    <font-awesome-icon
      :icon="darkModeStore.getIcon"
      class="p-3 bg-slate-200 dark:bg-gray-800 rounded-full ml-6 w-4 h-4"
    />
  </span>
</template>
