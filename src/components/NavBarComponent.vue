<script lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="p-3">
    <!--dark mode - text and icons-->
    <nav
      class="p-3 text-slate-700 dark:text-gray-400 bg-white dark:bg-gray-900 rounded-lg shadow-lg font-medium capitalize flex content-center items-center"
    >
      <span class="px-2 mr-2 border-xl border-gray-800"> VSocial </span>

      <RouterLink
        to="/"
        class="px-2 py-1 mx-2 cursor-pointer hover:bg-slate-200 hover:text-white text-sm rounded-xl flex content-center items-center"
      >
        <font-awesome-icon
          icon="fas fa-home"
          class="p-3 bg-slate-200 dark:bg-gray-800 rounded-full"
        />
        <span class="mx-1"> Home </span>
      </RouterLink>
      <div class="ml-auto">
        <RouterLink to="/login" class="hover:text-white cursor-pointer ml-1">
          <font-awesome-icon
            icon="fas fa-right-to-bracket"
            class="p-3 bg-slate-200 dark:bg-gray-800 rounded-full"
          />
        </RouterLink>
        <RouterLink to="/register" class="hover:text-white cursor-pointer ml-1">
          <font-awesome-icon
            icon="fas fa-user-plus"
            class="p-3 bg-slate-200 dark:bg-gray-800 rounded-full"
          />
        </RouterLink>
      </div>
    </nav>
  </div>
</template>
