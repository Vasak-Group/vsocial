<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterComponent from "@/components/FooterComponent.vue";
import NavBarComponent from "@/components/NavBarComponent.vue";
</script>

<template>
  <NavBarComponent />
  <RouterView />
  <FooterComponent />
</template>
