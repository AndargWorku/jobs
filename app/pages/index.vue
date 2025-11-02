<template>
  <div>
    <main class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <Searchbar />

      <!-- Illustration -->
      <div class="mt-10 md:mt-16 flex items-center justify-center">
        <NuxtImg
          src="https://cdn.hahu.jobs/public/aggregator/hahu.jobs/resized-default.svg"
          alt="HahuJobs hero image"
          height="500"
          class="w-full 3xl:h-full 3xl:object-contain"
        />
      </div>
    </main>

    <FeaturesFeaturejob />

    <CareerSectors />
    <Services />
    <TopCompanies />
    <AboutCard />
    <PostVacancy />
    <StatisticsSection />
    <Newes />

    <!-- <LayoutTheFooter /> -->
  </div>
</template>

<script setup lang="ts">
// You can set page-specific SEO tags here
useHead({
  title: "HahuJobs - All Ethiopian Jobs in One Place",
  meta: [
    {
      name: "description",
      content: "Find career opportunities in Ethiopia with HahuJobs.",
    },
  ],
});
</script>
