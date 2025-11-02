<template>
  <div class="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">
    <main class="container mx-auto px-6 md:px-8 lg:px-12 py-12">
      <section class="text-center mb-12">
        <h1 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          Services
        </h1>
        <p class="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
          HaHuJobs offers digital career profiling, job application and
          subscription based relevant vacancy announcement notifications to job
          seekers that sign up on its primary service deployment.
        </p>
      </section>

      <section>
        <div class="hidden md:grid md:grid-cols-3 gap-8 lg:gap-10">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="bg-white rounded-xl shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center text-center hover:border-2 hover:border-[#04a29f]"
          >
            <div class="mb-6 w-48 h-48 flex items-center justify-center">
              <img
                :src="service.image"
                :alt="service.title"
                class="max-w-full h-auto"
              />
            </div>
            <h3 class="text-xl font-bold text-[#04a29f] mb-3">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed text-sm font-light">
              {{ service.description }}
            </p>
          </div>
        </div>

        <div class="md:hidden">
          <div
            class="mobile-service-card bg-white rounded-xl shadow-lg transition-shadow duration-300 p-8 flex flex-col items-center text-center hover:border-2 hover:border-[#04a29f]"
          >
            <div class="mb-6 w-48 h-48 flex items-center justify-center">
              <img
                :src="services[currentMobileCardIndex].image"
                :alt="services[currentMobileCardIndex].title"
                class="max-w-full h-auto"
              />
            </div>
            <h3 class="text-xl font-bold text-[#04a29f] mb-3">
              {{ services[currentMobileCardIndex].title }}
            </h3>
            <p class="text-gray-600 leading-relaxed text-sm font-light">
              {{ services[currentMobileCardIndex].description }}
            </p>
          </div>
        </div>
      </section>

      <div id="mobile-pagination" class="flex justify-center mt-2">
        <div class="flex space-x-2">
          <span
            v-for="(service, index) in services"
            :key="index"
            class="pagination-line w-3 h-0.5 cursor-pointer"
            :class="{
              'bg-[#04a29f]': index === currentMobileCardIndex,
              'bg-gray-300': index !== currentMobileCardIndex,
            }"
            @click="currentMobileCardIndex = index"
          ></span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    title: "Build Career Profile",
    description:
      "Compose your career profile with context standards and identifiers to showcase your assessed competencies in the sector of your expertise. HaHuJobs offers you a simple, clear and...",
    image: "/assets/images/build_career_profile.svg",
  },
  {
    title: "Job Application",
    description:
      "Apply for jobs with just a few clicks, and track the progress of your applications through notifications on multiple platforms. Revolutionize your job applications with pre-prepared application materials and an optio...",
    image: "/assets/images/job_application.svg",
  },
  {
    title: "Vacancy Notification",
    description:
      "Take advantage of every job opportunity using our multi-platform vacancy notification services for jobseekers. Subscribe to a sector of your choice with various specific notification specifications to receive...",
    image: "/assets/images/vacancy_notification.svg",
  },
]);

const currentMobileCardIndex = ref(0);
</script>
