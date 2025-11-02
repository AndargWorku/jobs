<template>
  <div :class="{ dark: colorMode.value === 'dark' }">
    <div class="flex flex-col min-h-screen bg-light-gray-bg font-sans">
      <div>
        <LayoutTheHeader />
        <main class="relative px-4 pt-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Searchbar />

          <!-- Illustration -->
          <div class="mt-10 md:mt-16 flex items-center justify-center">
            <nuxt-img
              src="https://cdn.hahu.jobs/public/aggregator/hahu.jobs/resized-default.svg"
              alt="HahuJobs hero image"
              height="500"
              class="w-full 3xl:h-full 3xl:object-contain"
              @error="handleImageError"
            />
          </div>
          <!-- <div class="mt-12 sm:mt-16">
          <img
            class="w-full max-w-5xl mx-auto"
            src="/assets/images/hero-illustration.svg"
            alt="Professionals collaborating in an office"
          />
        </div> -->
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

  color: #1f2937; /* Default light text */
}
.dark body {
  background-color: #1a202c; /* dark-background */
  color: #ffffff; /* white text */
}
/* Using a common, clean sans-serif font is a good practice */
</style>
