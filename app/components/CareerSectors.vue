<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 text-center mb-4">
        Career sectors
      </h1>
      <p class="text-gray-600 text-center mb-12">
        Based on the local labor market trend in Ethiopia we categorize our
        vacancies into fourteen sectors
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 auto-rows-fr"
      >
        <div
          v-for="sector in careerSectors"
          :key="sector.name"
          class="bg-white rounded-lg shadow-md p-3 flex flex-col items-center justify-between text-center transition-transform transform hover:scale-105 hover:shadow-lg h-full"
        >
          <div class="mb-1 flex-grow flex items-center justify-center">
            <!-- Using <img> tag with a relative path -->
            <img
              :src="sector.imageUrl"
              :alt="sector.name"
              class="sector-image object-contain w-16 h-16"
            />
          </div>
          <h2 class="text-xs font-semibold text-green-700 mb-0.5">
            {{ sector.name }}
          </h2>
          <p class="text-gray-500 text-[0.65rem] leading-tight">
            {{ sector.openPositions }} Open positions
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const careerSectors = ref([
  {
    name: "Natural Science",
    openPositions: 22,
    imageUrl: "/assets/images/natural-science.svg", // Path relative to public directory
  },
  {
    name: "Business",
    openPositions: 304,
    imageUrl: "/assets/images/business.svg", // Path relative to public directory
  },
  {
    name: "Creative Arts",
    openPositions: 14,
    imageUrl: "/assets/images/creative-art.svg", // Path relative to public directory
  },
  {
    name: "Education",
    openPositions: 38,
    imageUrl: "/assets/images/education.svg", // Path relative to public directory
  },
  {
    name: "Hospitality",
    openPositions: 17,
    imageUrl: "/assets/images/hospitality.svg", // Path relative to public directory
  },
  {
    name: "Low and Medium Skilled Worker",
    openPositions: 100,
    imageUrl: "/assets/images/low-and-medium-skilled-work.svg", // Path relative to public directory
  },
  {
    name: "Transportation & Logistics",
    openPositions: 37,
    imageUrl: "/assets/images/transport-and-logistics.svg", // Path relative to public directory
  },
  {
    name: "Engineering",
    openPositions: 164,
    imageUrl: "/assets/images/engineering.svg", // Path relative to public directory
  },
  {
    name: "Finance",
    openPositions: 152,
    imageUrl: "/assets/images/finance.svg", // Path relative to public directory
  },
  {
    name: "Legal Services",
    openPositions: 7,
    imageUrl: "/assets/images/legal-service.svg", // Path relative to public directory
  },
  {
    name: "ICT",
    openPositions: 38,
    imageUrl: "/assets/images/ict.svg", // Path relative to public directory
  },
  {
    name: "Health Care",
    openPositions: 51,
    imageUrl: "/assets/images/health-care.svg", // Path relative to public directory
  },
  {
    name: "Manufacturing",
    openPositions: 0,
    imageUrl: "/assets/images/manufacturing.svg", // Path relative to public directory
  },
  {
    name: "Social Science",
    openPositions: 24,
    imageUrl: "/assets/images/social-science.svg", // Path relative to public directory
  },
]);
</script>

<style scoped>
/* No specific styling needed beyond Tailwind for img tags */
.sector-image {
  /* You can add custom styles here if needed,
     but w-10 h-10 object-contain should be sufficient for sizing */
}
</style>
