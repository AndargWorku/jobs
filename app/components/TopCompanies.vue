<template>
  <section class="bg-green-50 py-16 dark:bg-gray-900 dark:text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">
        HaHuJobs top posting companies
      </h2>
      <p
        class="text-center text-sm font-semibold text-gray-600 mb-12 max-w-2xl mx-auto"
      >
        Below are some of the companies with a high number of vacancy
        announcements since the start of our aggregation services in 2019
      </p>

      <div
        class="marquee-container relative overflow-hidden whitespace-nowrap py-4"
      >
        <div
          class="marquee-content inline-block animate-marquee flex space-x-8"
        >
          <div
            v-for="(logo, index) in companyLogos"
            :key="`logo-1-${index}`"
            class="flex-shrink-0 w-40 h-24 bg-white shadow-lg rounded-lg flex items-center justify-center p-4"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="max-h-full max-w-full object-contain"
            />
          </div>
          <div
            v-for="(logo, index) in companyLogos"
            :key="`logo-2-${index}`"
            class="flex-shrink-0 w-40 h-24 bg-white shadow-lg rounded-lg flex items-center justify-center p-4"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="max-h-full max-w-full object-contain"
            />
          </div>
          <!-- You can duplicate the content more times if you have fewer logos or want a longer visual span -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Define your company logos data
const companyLogos = ref([
  { src: "/assets/images/ee.png", alt: "EEC" },
  { src: "/assets/images/kerch.png", alt: "Kerchanshe" },
  {
    src: "/assets/images/rr.jpg",
    alt: "Adama Science and Technology University",
  },
  { src: "/assets/images/sav.jpg", alt: "Blue Company" },
  { src: "/assets/images/dashn.jpg", alt: "EEC" },
  { src: "/assets/images/kerch.png", alt: "Kerchanshe" },
  {
    src: "/assets/images/hahu.png",
    alt: "Adama Science and Technology University",
  },
  { src: "/assets/images/sav.jpg", alt: "Blue Company" },
]);
</script>

<style scoped>
.marquee-container {
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    white 10%,
    white 90%,
    transparent 100%
  );

  --marquee-duration: 20s;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee var(--marquee-duration) linear infinite;
  animation-play-state: running;
}

.marquee-container:hover .animate-marquee {
  animation-play-state: paused;
}
</style>
