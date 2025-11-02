<template>
  <section
    class="bg-[#F8FCFC] py-16 px-6 md:px-12 dark:bg-gray-900 dark:text-white"
  >
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start rounded-3xl bg-white p-8 md:p-12 shadow-sm"
    >
      <!-- Left Section: Image -->
      <div
        class="flex justify-center md:justify-start items-center bg-gray-100 h-full"
      >
        <!-- Made the container h-full and flex items-center to help with vertical alignment if needed -->
        <img
          src="/assets/images/vacanciy.png"
          alt="City illustration"
          class="w-full max-w-md object-contain"
        />
      </div>

      <div class="space-y-10">
        <div>
          <h2 class="text-2xl font-semibold text-[#3B4D5D] mb-4">
            Post vacancy
          </h2>
          <p class="text-xs text-[#6E7B87]">
            HaHuJobs offers dedicated enterprise cloud services for a full human
            resource management platform platform with an affordable price
            package. Posting vacancy is completely free, and only requires to
            follow the below listed steps.
          </p>
        </div>

        <div class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div class="flex flex-col">
              <div class="flex items-baseline space-x-2 mb-2">
                <span class="text-6xl font-extrabold text-[#3B4D5D]">01</span>
                <span class="font-semibold text-[#3B4D5D]">Receive</span>
              </div>
              <p class="text-xs text-[#6E7B87]">
                You contact us through one of our outlets with the details of
                your vacancy. You can click the button below to review ways to
                share your vacancy and review the required information we need
                to publish your vacancy on all our outlets.
              </p>
            </div>

            <!-- Step 02 -->
            <div class="flex flex-col">
              <div class="flex items-baseline space-x-2 mb-2">
                <span class="text-6xl font-extrabold text-[#3B4D5D]">02</span>
                <span class="font-semibold text-[#3B4D5D]">Validate</span>
              </div>
              <p class="text-xs text-[#6E7B87]">
                Our service officers will receive the details from your
                organization via the channel you communicated it in. They will
                review the details provided to validate all required information
                is available and build validate the legitimacy of the vacancy.
              </p>
            </div>
          </div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-8 border-t border-gray-200"
          >
            <div class="flex flex-col">
              <div class="flex items-baseline space-x-2 mb-2">
                <span class="text-6xl font-extrabold text-[#3B4D5D]">03</span>
                <span class="font-semibold text-[#3B4D5D]">Publish</span>
              </div>
              <p class="text-xs text-[#6E7B87]">
                All vacancy details will then go through our standardized
                categorization process for taxonomy identification and
                reorganization of information if required so it fits the
                publishing structure of our outlets, then will be approved for
                publishing.
              </p>
            </div>

            <!-- Sign up and Post Vacancy Button - Aligned to bottom-right of its grid cell -->
            <div
              class="flex flex-col items-center md:items-end justify-end h-full mt-4 md:mt-0"
            >
              <p class="text-xs text-[#6E7B87] mb-2">
                Sign up to HaHu Jobs Enterprise
              </p>
              <!-- Arrow Icon -->
              <span class="justify-center">
                <img
                  src="/assets/images/downward-arrow.svg"
                  alt="Sign up arrow"
                  class="w-10 h-10 object-contain mb-2"
                />
              </span>

              <button
                class="bg-[#2D8E8F] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#257C7D] transition duration-300 ease-in-out flex items-center hover:text-gray-500"
              >
                Post vacancy
                <span class="ml-3 text-lg font-semibold">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { navigateTo } from "#app";
</script>

<style scoped>
/* No specific scoped styles needed if Tailwind CSS covers everything */
</style>
