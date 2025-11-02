<template>
  <div class="relative mt-6 bg-[#F5F7F9] py-10">
    <p class="text-2xl font-bold text-center justify-center">Featured Jobs</p>
    <p class="text-center text-sm justify-center mt-2">
      Explore our handpicked selection of top job openings. Find your dream
      career match today.
    </p>

    <div class="mt-6 mx-auto overflow-hidden relative">
      <NuxtMarquee :duration="100" :paused="isHovering">
        <div class="flex gap-4 px-4 md:px-0">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col justify-between transition-all duration-300 relative group w-80 flex-shrink-0"
            :class="{ 'ring-1 ring-[#009379] shadow-lg': card.hovered }"
            @mouseenter="
              isHovering = true;
              card.hovered = true;
            "
            @mouseleave="
              isHovering = false;
              card.hovered = false;
            "
          >
            <!-- Conditional Date Tag (Only for Job Cards) -->
            <div
              v-if="card.type === 'job'"
              class="absolute left-0 bg-white px-3 py-1 rounded-br-lg text-gray-600 flex items-center gap-1 text-xs font-medium"
            >
              <Icon name="ph:calendar-blank" size="14" />
              {{ card.daysLeft }}
            </div>

            <!-- Bookmark and Featured Ribbon Container -->
            <div
              class="absolute top-0 right-0 flex items-center justify-end h-6 z-10"
            >
              <!-- Bookmark Icon (Only for Job Cards) -->
              <button
                v-if="card.type === 'job'"
                class="relative p-2 text-[#009379] transition-colors z-20"
                @click="toggleBookmark(card)"
              >
                <Icon
                  :name="card.bookmarked ? 'ph:bookmark-fill' : 'ph:bookmark'"
                  size="20"
                />
              </button>

              <!-- Featured Ribbon -->
              <div class="relative w-28 pr-4 justify-center items-center h-6">
                <button
                  class="relative w-full h-full bg-[#009379] text-white text-xs font-semibold flex items-center justify-center transform translate-x-4 rounded-bl-lg rounded-tr-lg"
                >
                  <img
                    src="/assets/images/hahu_featured.svg"
                    alt="featured icon"
                    class="h-4 skew-x-12"
                  />
                  <span class="ml-1 font-light">Featured</span>
                </button>
              </div>
            </div>

            <template v-if="card.type === 'job'">
              <div class="flex items-start gap-4 mt-8">
                <div
                  class="flex-shrink-0 relative"
                  @mouseenter="card.companyHovered = true"
                  @mouseleave="card.companyHovered = false"
                >
                  <img
                    :src="card.logo"
                    alt="Company Logo"
                    class="w-16 h-16 object-contain"
                  />
                  <p class="mt-2 text-gray-700 font-semibold text-sm">
                    {{ card.company }}
                  </p>

                  <!-- Company Hover Card -->
                  <div
                    v-if="card.companyHovered"
                    class="absolute top-1/2 left-full ml-4 -translate-y-1/2 w-64 bg-white shadow-xl rounded-xl p-4 border border-gray-200 z-50 transition-all duration-300"
                  >
                    <div class="flex flex-col items-start space-y-2">
                      <div class="flex items-center gap-2 mb-1">
                        <img :src="card.logo" class="w-6 h-6 object-contain" />
                        <span class="text-gray-700 font-semibold text-sm">{{
                          card.company
                        }}</span>
                      </div>
                      <div class="flex flex-col gap-1 text-gray-600 text-sm">
                        <div class="flex items-center gap-2">
                          <Icon name="ph:phone" size="16" /> N.A
                        </div>
                        <div class="flex items-center gap-2">
                          <Icon name="ph:users" size="16" /> N.A
                        </div>
                        <div class="flex items-center gap-2">
                          <Icon name="ph:map-pin" size="16" /> N.A
                        </div>
                      </div>
                      <button
                        class="text-[#009379] inline-flex items-center text-sm px-3"
                      >
                        Explore More
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex-grow">
                  <h3 class="font-bold text-gray-800 text-sm">
                    {{ card.title }}
                  </h3>

                  <ul class="mt-2 space-y-1 text-gray-600 text-xs">
                    <li class="flex items-center gap-2">
                      <Icon
                        name="ph:briefcase-light"
                        size="16"
                        class="text-gray-500"
                      />
                      {{ card.category }}
                    </li>
                    <li class="flex items-center gap-2">
                      <Icon
                        name="ph:buildings-light"
                        size="16"
                        class="text-gray-500"
                      />
                      {{ card.department }}
                    </li>
                    <li class="flex items-center gap-2">
                      <Icon
                        name="ph:map-pin-light"
                        size="16"
                        class="text-gray-500"
                      />
                      {{ card.location }}
                    </li>
                    <li class="flex items-center gap-2">
                      <Icon
                        name="ph:suitcase-simple-light"
                        size="16"
                        class="text-gray-500"
                      />
                      {{ card.experience }}
                    </li>
                    <li class="flex items-center gap-2">
                      <Icon
                        name="ph:users-light"
                        size="16"
                        class="text-gray-500"
                      />
                      {{ card.positions }}
                    </li>
                  </ul>

                  <div class="mt-3">
                    <span
                      class="text-white bg-[#009379] text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1"
                    >
                      <Icon
                        name="material-symbols-light:person-shield-outline"
                        size="14"
                      />
                      Full Time
                    </span>
                  </div>
                </div>
              </div>

              <hr class="my-4 border-gray-200" />

              <p class="text-gray-600 text-sm mt-4 w-full line-clamp-3">
                {{ card.description }}
              </p>

              <div class="flex items-center justify-center gap-2 mt-5">
                <button
                  class="border border-[#009379] text-[#009379] hover:text-black font-medium px-4 py-2 rounded-md hover:bg-green-500 transition-all duration-200 text-sm"
                >
                  Read More
                </button>
                <button
                  class="bg-[#009379] text-white font-medium px-4 py-2 rounded-md hover:bg-green-600 hover:text-black transition-all duration-200 text-sm"
                >
                  Apply Now
                </button>
              </div>
            </template>

            <template v-else>
              <div class="justify-start mt-2">
                <p class="text-xs font-light left-0 top-0 text-[#009379] mb-2">
                  Advertisement
                </p>
              </div>

              <div class="mt-3 flex flex-wrap gap-2 justify-start">
                <h4 class="text-gray-700 text-xs font-light">Discover more</h4>
                <span
                  v-for="(link, j) in card.links"
                  :key="j"
                  class="text-blue-700 bg-blue-50 border border-blue-200 rounded-full text-xs px-3 py-1 hover:bg-blue-100 cursor-pointer transition flex items-center gap-1"
                >
                  <Icon name="ph:globe-simple" size="14" /> {{ link }}
                </span>
              </div>

              <div class="flex justify-center mt-6">
                <button
                  class="border border-[#009379] text-[#009379] hover:text-black font-medium px-4 py-2 rounded-md hover:bg-green-500 transition-all duration-200 text-sm"
                >
                  Read More
                </button>
              </div>
            </template>

            <div
              class="flex items-center justify-between text-gray-400 text-sm mt-3"
            >
              <div class="flex items-center gap-1">
                <Icon name="ph:eye" size="16" /> {{ card.views }}
              </div>
              <Icon
                name="ph:share-network"
                size="18"
                class="cursor-pointer hover:text-green-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </NuxtMarquee>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cards = ref([
  {
    type: "job",
    logo: "https://cdn.hahu.jobs/public/aggregator/telegram_channel_post/000aecc6fa8a77e0d4f2b115ffae1e8bdc4ba11876cc1c1a322bdd9d15e6c2ee97fd6d7e11e3f705cf77672c8b6a5d67cdf8.png",
    company: "Afro Steel PLC",
    daysLeft: "8 Days Left",
    featured: true,
    title: "Secretary and Receptionist",
    category: "Business",
    department: "Secretarial, Admin and Clerical",
    location: "Addis Ababa",
    experience: "0 years",
    positions: "1 Position",
    description:
      "Level 4 or Diploma in Secretarial Science or Office Management or in a related field of study Duties and Responsibilities: - Secretary and Receptionist...",
    views: "4.6k",
    hovered: false,
    companyHovered: false,
    bookmarked: false,
  },
  {
    type: "job",
    logo: "https://cdn.hahu.jobs/public/aggregator/telegram_channel_post/000aecc6fa8a77e0d4f2b115ffae1e8bdc4ba11876cc1c1a322bdd9d15e6c2ee97fd6d7e11e3f705cf77672c8b6a5d67cdf8.png",
    company: "Company B",
    daysLeft: "5 Days Left",
    featured: true,
    title: "Backend Developer",
    category: "Development",
    department: "Engineering",
    location: "NYC",
    experience: "3+ years",
    positions: "2 Positions",
    description:
      "Join our backend team to build scalable and secure APIs. We are seeking an experienced Backend Developer to design, develop, and maintain robust server-side applications. You will work with a variety of technologies, ensure high performance and responsiveness, and contribute to all phases of the development lifecycle. Strong problem-solving skills and a passion for clean code are essential.",
    views: "85k",
    hovered: false,
    companyHovered: false,
    bookmarked: false,
  },
  {
    type: "discover",

    links: [
      "Employment opportunities Ethiopia",
      "Addis Ababa",
      "LinkedIn profile optimization",
      "Engineer job openings",
      "Laptop computers",
    ],
    views: "25k",
    hovered: false,
    companyHovered: false,
    bookmarked: false,
  },
  {
    type: "job",
    logo: "https://cdn.hahu.jobs/public/aggregator/telegram_channel_post/000aecc6fa8a77e0d4f2b115ffae1e8bdc4ba11876cc1c1a322bdd9d15e6c2ee97fd6d7e11e3f705cf77672c8b6a5d67cdf8.png",
    company: "Company C",
    daysLeft: "7 Days Left",
    featured: true,
    title: "UI/UX Designer",
    category: "Design",
    department: "Product",
    location: "On-site, London",
    experience: "1+ year",
    positions: "1 Position",
    description:
      "Create stunning user interfaces and experiences for our innovative products. We need a creative UI/UX Designer to translate user needs and business requirements into intuitive and engaging designs. You will be responsible for user research, wireframing, prototyping, and creating high-fidelity mockups. A strong portfolio demonstrating your design skills and understanding of user-centered design principles is required.",
    views: "95k",
    hovered: false,
    companyHovered: false,
    bookmarked: false,
  },
  {
    type: "job",
    logo: "https://cdn.hahu.jobs/public/aggregator/telegram_channel_post/000aecc6fa8a77e0d4f2b115ffae1e8bdc4ba11876cc1c1a322bdd9d15e6c2ee97fd6d7e11e3f705cf77672c8b6a5d67cdf8.png",
    company: "Company D",
    daysLeft: "10 Days Left",
    featured: true,
    title: "Data Scientist",
    category: "Data",
    department: "Analytics",
    location: "Remote",
    experience: "4+ years",
    positions: "1 Position",
    description:
      "Leverage data to drive business decisions and develop predictive models. We are looking for a talented Data Scientist to join our analytics team. You will be responsible for collecting, cleaning, and analyzing large datasets, building machine learning models, and communicating insights to stakeholders. Proficiency in Python or R and experience with SQL are essential.",
    views: "110k",
    hovered: false,
    companyHovered: false,
    bookmarked: false,
  },
  {
    type: "discover",

    links: ["Education", "Marketing", "Travel"],
    views: "60k",
    hovered: false,
    companyHovered: false,
    bookmarked: false,
  },
]);

const isHovering = ref(false);

const toggleBookmark = (card) => {
  if (card.type === "job") {
    card.bookmarked = !card.bookmarked;

    console.log(`Card "${card.title}" bookmarked status: ${card.bookmarked}`);
  }
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
