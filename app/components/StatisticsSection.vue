<template>
  <div
    class="bg-gray-100 py-16 sm:py-24 lg:py-32 dark:bg-gray-900 dark:text-white"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-3xl font-extrabold text-gray-800 tracking-tight sm:text-5xl font-sans"
        >
          Our Latest Statistics
        </h2>
      </div>

      <div class="mt-10">
        <dl
          class="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-4 lg:gap-x-6"
        >
          <div
            v-for="(stat, index) in statistics"
            :key="stat.id"
            class="flex flex-col items-center relative group"
          >
            <dd class="text-3xl font-extrabold text-teal-600 font-sans">
              {{ stat.value }}
            </dd>
            <dt class="mt-4 text-lg font-medium text-gray-700 font-sans">
              {{ stat.name }}
            </dt>

            <div
              v-if="hoverData[index]"
              class="absolute bottom-full mb-2 hidden group-hover:block bg-white p-4 rounded-lg shadow-lg text-gray-800 font-sans w-64"
            >
              <div class="flex items-center mb-2">
                <span class="mr-2">🌍</span>
                <span
                  >{{ hoverData[index].worldExplorer.value }}
                  {{ stat.name }}</span
                >
              </div>
              <div class="flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                  alt="Telegram Icon"
                  class="w-5 h-5 mr-2"
                />
                <span
                  >{{ hoverData[index].telegram.value }} {{ stat.name }}</span
                >
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const statistics = ref([
  { id: 1, name: "Enterprises", value: "1.1k" },
  { id: 2, name: "Users", value: "30.1k" },
  { id: 3, name: "Opportunities", value: "38" },
]);

const hoverData = ref([
  {
    worldExplorer: { value: 372 },
    telegram: { value: 717 },
  },
  {
    worldExplorer: { value: 372 },
    telegram: { value: 717 },
  },
  {
    worldExplorer: { value: 372 },
    telegram: { value: 717 },
  },
]);
</script>

<style></style>
