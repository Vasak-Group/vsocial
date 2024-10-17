<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="sidebar lg:left-0 p-3 m-3 w-16 md:w-[300px] h-[calc(100vh-192px)] overflow-y-auto text-center rounded-xl bg-white dark:bg-gray-900 shadow-lg common-text"
  >
    <RouterLink
      to="/dashboard"
      class="p-1 mt-3 flex items-center rounded-xl px-3 duration-300 cursor-pointer hover:bg-blue-600 common-text hover:text-white"
    >
      <font-awesome-icon icon="fas fa-chart-line" class="text-blue-600 hover:text-white" />
      <span class="text-[15px] ml-4 text-gray-200 font-bold hidden md:block">Stats</span>
    </RouterLink>
    <RouterLink
      to="/dashboard/config"
      class="p-1 mt-3 flex items-center rounded-xl px-3 duration-300 cursor-pointer hover:bg-blue-600 common-text hover:text-white"
    >
      <font-awesome-icon icon="fas fa-gear" class="text-blue-600 hover:text-white" />
      <span class="text-[15px] ml-4 text-gray-200 font-bold hidden md:block">Configuration</span>
    </RouterLink>
  </div>
</template>
