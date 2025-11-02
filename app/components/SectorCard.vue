<!-- ./components/SectorCard.vue -->
<template>
  <NuxtLink
    to="#"
    class="block min-w-36 h-40 bg-white p-6 items-center rounded-2xl dark:bg-gray-900 dark:text-white shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center"
  >
    <div class="flex items-center justify-center h-10 mb-4">
      <!-- Dynamically render the correct icon component -->
      <component :is="sector.iconComponent" class="h-16 w-16" />
    </div>
    <h3 class="text-sm font-bold text-[#009688]">{{ sector.name }}</h3>
    <p class="mt-1 text-sm text-muted-text">
      {{ sector.positions }} Open positions
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Component } from "vue"; // Using 'type' for Component import is good practice

// Define the structure for a sector object
interface Sector {
  name: string;
  positions: number;
  iconComponent: Component; // This is correct for dynamic component rendering
}

// Define the component's props
defineProps<{
  sector: Sector; // This is correct and now matches the parent
}>();
</script>
