<script setup lang="ts">
import { RouterLink } from "vue-router";
import DarkModeButton from "./buttons/DarkModeButton.vue";
</script>

<template>
  <div class="p-3">
    <!--dark mode - text and icons-->
    <nav
      class="p-3 common-text bg-white dark:bg-gray-900 rounded-xl shadow-lg font-medium capitalize flex content-center items-center"
    >
      <span class="px-2 mr-2 border-xl border-gray-800"> VSocial </span>
      <div class="ml-auto mr-auto">
        <RouterLink
          to="/"
          class="px-2 py-1 mx-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-gray-800 hover:text-white text-sm rounded-xl flex content-center items-center"
        >
          <font-awesome-icon
            icon="fas fa-home"
            class="p-3 bg-slate-200 dark:bg-gray-800 rounded-full w-4 h-4"
          />
          <span class="mx-1"> Home </span>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/login" class="hover:text-white cursor-pointer ml-1">
          <font-awesome-icon
            icon="fas fa-right-to-bracket"
            class="p-3 bg-slate-200 dark:bg-gray-800 rounded-full w-4 h-4"
          />
        </RouterLink>
        <RouterLink to="/register" class="hover:text-white cursor-pointer ml-1">
          <font-awesome-icon
            icon="fas fa-user-plus"
            class="p-3 bg-slate-200 dark:bg-gray-800 rounded-full w-4 h-4"
          />
        </RouterLink>
        <DarkModeButton />
      </div>
    </nav>
  </div>
</template>
