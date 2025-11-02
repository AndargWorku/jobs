<template>
  <div :class="{ dark: colorMode.value === 'dark' }">
    <div class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>

<style>
body {
  font-family: "Inter", sans-serif;
  @apply bg-white dark:bg-gray-900;
  transition: background-color 0.3s, color 0.3s;
}
</style>

<!-- <template>
  <div :class="{ dark: colorMode.value === 'dark' }">
    <div class="flex flex-col min-h-screen bg-light-gray-bg font-sans">
      <div>
        <LayoutTheHeader />
        <main class="relative px-4 pt-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Searchbar />

          
          <div class="mt-10 md:mt-16 flex items-center justify-center">
            <nuxt-img
              src="https://cdn.hahu.jobs/public/aggregator/hahu.jobs/resized-default.svg"
              alt="HahuJobs hero image"
              height="500"
              class="w-full 3xl:h-full 3xl:object-contain"
              @error="handleImageError"
            />
          </div>
          
        </main>
      </div>

      <FeaturesFeaturejob />

      <CareerSectors />
      <Services />
      <TopCompanies />
      <AboutCard />
      <PostVacancy />
      <StatisticsSection />
      <Newes />

      <LayoutTheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColorMode } from "#imports";
const colorMode = useColorMode();
import TopCompanies from "./components/TopCompanies.vue";
</script>

<style scoped>
body {
  background-color: #fff;
  font-family: "Inter", sans-serif;

  color: #1f2937; 
}
.dark body {
  background-color: #1a202c; 
  color: #ffffff; 
}

</style> -->
