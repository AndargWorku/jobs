<template>
  <div class="bg-gray-100 min-h-screen py-10 px-20 cursor-pointer">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
        News & Events
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="card in paginatedCards"
          :key="card.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:border-2 hover:border-teal-600"
        >
          <img
            :src="card.image"
            :alt="card.title + ' thumbnail'"
            class="w-full h-auto object-cover"
          />
          <div class="p-6">
            <span
              :class="[
                'inline-block text-xs bg-teal-400  px-3  py-1 rounded-full mb-3',
              ]"
              >{{ card.tag }}</span
            >
            <p class="text-gray-500 text-xs font-bold mb-2">{{ card.date }}</p>
            <h3 class="font-bold text-sm text-gray-800 mb-2">
              {{ card.title }}
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-4">
              {{ card.description }}
            </p>
            <div class="flex justify-center">
              <button
                href="#"
                class="inline-flex items-center mx hover:text-black justify-center text-white h-10 w-28 rounded-lg bg-teal-700 hover:bg-teal-200 font-semibold text-sm"
              >
                Read Post
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
      </div>

      <div v-if="totalPages > 1" class="flex justify-center mt-8 space-x-2">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'w-2 h-0.5',
            currentPage === page ? 'bg-teal-700' : 'bg-gray-400',
          ]"
        ></button>
      </div>
      <div class="mt-8 flex justify-center">
        <button
          href="https://www.hahujobs.io/blogs/#all"
          target="_blank"
          class="reactiveButton mx-auto flex items-center bg-teal-700 hover:text-black text-white font-semibold py-2 px-5 rounded-lg shadow hover:bg-teal-200 transition-colors"
        >
          More blogs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="ml-2 w-4 h-4 md:w-5 md:h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const allCards = ref([
  {
    id: 1,
    tag: "HahuJobs News",

    date: "Oct 2025",
    title:
      "Where Ethiopia Works: A Look at the Nation's Top Employing Sectors and Published Job Positions",
    description:
      "Understanding a country's job market requires a clear and accurate classification or categorization scheme. Globally, the standard is often set by skill-based frameworks, such as the International Labour Organization's International Standar...",
    image: "/assets/images/n1.jpeg",
  },
  {
    id: 2,
    tag: "Events & Lectures",

    date: "26 Sep 2025",
    title: "AI Workshop Hackathon: Learn Build Connect - Session 4",
    description:
      "ALX's Lefela Capstone Hub was already buzzing by mid-morning on 22 September when professionals, university students and a handful of high-schoolers settled in for the latest MahletMJD AI Workshop + Hackathon, an event created to turn theory abo...",
    image: "/assets/images/n2.jpeg",
  },
  {
    id: 3,
    tag: "STEEP News",
    date: "5 Sep 2025",
    title: "STEEP-Summer Program Conclusion",
    description:
      "The 2025 Summer School Program, which was being conducted by the STEEP project in collaboration with 10 government high schools, has been officially concluded. The initiative was designed to provide instruction in STEM fields for fema...",
    image: "/assets/images/n3.jpeg",
  },
  {
    id: 4,
    tag: "HahuJobs News",
    date: "Sept 2025",
    title: "Entry-Level Internship",
    description:
      "Entry-level internships offer a crucial stepping stone for individuals eager to gain practical experience and kickstart their careers. These opportunities provide a valuable platform for learning, skill development, and networking within a professional position.",
    image: "/assets/images/n4.png",
  },
  {
    id: 5,
    tag: "Community",
    date: "Aug 2025",
    title: "Volunteering for a Cause",
    description:
      "Joining a volunteering initiative is a fantastic way to give back to the community and develop new skills. Our recent project focused on environmental cleanup, engaging dozens of participants from various backgrounds.",
    image: "/assets/images/n5.jpeg",
  },
]);

const cardsPerPage = 2;
const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(allCards.value.length / cardsPerPage)
);

const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  return allCards.value.slice(start, end);
});
</script>
