<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBarComponent from "@/components/SideBarComponent.vue";
</script>

<template>
  <div class="flex">
    <SideBarComponent />
    <RouterView />
  </div>
</template>
