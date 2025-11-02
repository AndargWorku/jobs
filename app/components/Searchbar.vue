<template>
  <div class="text-center relative mt-10">
    <h1 class="font-bold text-3xl text-secondary text-center">
      <span class="font-body block xl:inline text-[#293649]">
        All Ethiopian Jobs in One Place.
      </span>
    </h1>
    <div class="mt-2 xl:mt-4 mb-4 flex justify-center">
      <p class="font-bold text-base text-[#293649]">
        Find career opportunities in Ethiopia
      </p>
    </div>
    <div class="mt-6 flex justify-center">
      <div
        class="flex flex-col xsm:flex-row sm:flex-row justify-center gap-y-3 xsm:gap-0 xsm:w-fit sm:gap-0 w-full sm:w-fit"
      >
        <div class="relative">
          <div
            class="w-full flex items-center justify-between py-1 border border-gray-300 hover:border-[#10B981] shadow-sm md:w-[80%] lg:w-[90%] mx-auto lg:pl-4 text-sm placeholder:font-semibold mb-0 lg:mb-0 bg-white mr-0 xsm:pl-0 sm:pl-4 xl:pl-auto h-10 xl:h-12 rounded-bl-lg"
            style="
              border-top-left-radius: 0.5rem;
              border-bottom-left-radius: 0;
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            "
          >
            <input
              type="text"
              v-model="jobSearchTerm"
              name="job_name"
              autocomplete="off"
              class="py-1 mx-auto sm:py-1 2xl:py-1 w-[35vw] xsm:w-[35vw] sm:w-[30vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[15vw] 3xl:w-[300px] 3xl:max-w-[400px] focus:w-[70vw] xsm:focus:w-[40vw] sm:focus:w-[50vw] md:focus:w-[45vw] xl:focus:w-[30vw] 2xl:focus:w-[25vw] font-normal placeholder:font-bold width-transition text-[#293649] bg-transparent border-none h-5 focus:outline-none hover:border-green-500"
              placeholder="Job title, city or keyword..."
              aria-invalid="true"
              @focus="isInputFocused = true"
              @blur="isInputFocused = false"
              style="
                border-top-left-radius: 0.5rem;
                border-bottom-left-radius: 0;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
              "
            />
          </div>
          <ul
            class="z-20 w-full absolute rounded-b-md bg-white border-b-1 border-[#10B981] scrollbar scrollbar-thin scrollbar-track-rounded-full scrollbar-track-[#10B981] shadow-lg max-h-56 text-base overflow-auto"
            :style="{ display: filteredJobs.length > 0 ? 'block' : 'none' }"
          >
            <li
              v-for="job in filteredJobs"
              :key="job.id"
              @click="selectJob(job)"
              class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#293649]"
            >
              {{ job.title }} - {{ job.company }} ({{ job.city }})
            </li>
          </ul>
        </div>
        <button
          type="button"
          title="Find Job"
          @click="findJob"
          class="bg-[#10B981] mx-auto py-2 px-4 xl:px-8 xsm:ml-1 xsm:mt-0 sm:ml-1 mt-1 sm:mt-0 text-base xl:text-lg inline-flex items-center text-white rounded-lg xsm:rounded-l-none sm:rounded-l-none font-body font-bold hover:border-[#0D9A6B] focus:ring-0 focus:outline-none h-10 xl:h-12"
        >
          <Icon
            name="i-heroicons-magnifying-glass"
            class="xs:mr-4 w-5 h-5 md:w-5 md:h-5"
          />
          <span class="">Find Job</span>
        </button>
      </div>
    </div>
    <div
      class="mt-7 md:mt-8 flex justify-around mx-auto items-center text-center md:w-[450px]"
    >
      <div class="cursor-pointer">
        <span
          class="font-body text-[#10B981] text-xl xl:text-3xl font-extrabold"
          >{{ totalJobs }}</span
        >
        <span class="block text-[#293649] font-bold text-sm xl:text-lg"
          >Jobs</span
        >
      </div>
      <div @click="navigateTo('/#fixed-vacancy')" class="cursor-pointer">
        <span
          class="font-body text-[#10B981] text-xl xl:text-3xl font-extrabold"
          >{{ totalCompanies }}</span
        >
        <span class="block text-[#293649] font-bold text-sm xl:text-lg">
          Companies
        </span>
      </div>
      <div @click="navigateTo('/#fixed-sectors')" class="cursor-pointer">
        <span
          class="font-body text-[#10B981] text-xl xl:text-3xl font-extrabold"
          >{{ totalSectors }}</span
        >
        <span class="block text-[#293649] font-bold text-sm xl:text-lg"
          >Sectors</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isInputFocused = ref(false); // New state variable

// Sample JSON data for jobs, companies, and sectors
const jobsData = ref([
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Solutions Inc.",
    city: "Addis Ababa",
    sector_id: 1,
  },
  {
    id: 2,
    title: "Marketing Specialist",
    company: "Ethio Marketing",
    city: "Dire Dawa",
    sector_id: 2,
  },
  {
    id: 3,
    title: "Accountant",
    company: "Finance Hub",
    city: "Addis Ababa",
    sector_id: 3,
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "AI Innovators",
    city: "Addis Ababa",
    sector_id: 1,
  },
  {
    id: 5,
    title: "HR Manager",
    company: "People First",
    city: "Hawassa",
    sector_id: 4,
  },
  {
    id: 6,
    title: "Project Manager",
    company: "Build Fast",
    city: "Mekelle",
    sector_id: 5,
  },
]);

const companiesData = ref([
  { id: 1, name: "Tech Solutions Inc." },
  { id: 2, name: "Ethio Marketing" },
  { id: 3, name: "Finance Hub" },
  { id: 4, name: "AI Innovators" },
  { id: 5, name: "People First" },
  { id: 6, name: "Build Fast" },
]);

const sectorsData = ref([
  { id: 1, name: "Technology" },
  { id: 2, name: "Marketing" },
  { id: 3, name: "Finance" },
  { id: 4, name: "Human Resources" },
  { id: 5, name: "Construction" },
]);

const jobSearchTerm = ref("");

const totalJobs = computed(() => jobsData.value.length);
const totalCompanies = computed(() => companiesData.value.length);
const totalSectors = computed(() => sectorsData.value.length);

const filteredJobs = computed(() => {
  if (!jobSearchTerm.value) {
    return [];
  }
  const search = jobSearchTerm.value.toLowerCase();
  return jobsData.value.filter(
    (job) =>
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.city.toLowerCase().includes(search)
  );
});

const selectJob = (job) => {
  jobSearchTerm.value = `${job.title}, ${job.company}, ${job.city}`;
};

const findJob = () => {
  console.log("Searching for job:", jobSearchTerm.value);
};

const navigateTo = (path) => {
  console.log("Navigating to:", path);
};
</script>

<style scoped>
.width-transition {
  transition: width 0.3s ease-in-out;
}
</style>

<!-- <template>
  <div class="text-center relative mt-10">
    <h1 class="font-bold text-3xl text-secondary text-center">
      <span class="font-body block xl:inline text-[#293649] dark:text-white">
        All Ethiopian Jobs in One Place.
      </span>
    </h1>
    <div class="mt-2 xl:mt-4 mb-4 flex justify-center">
      <p class="font-bold text-base text-[#293649] dark:text-[#E0E0E0]">
        Find career opportunities in Ethiopia
      </p>
    </div>
    <div class="mt-6 flex justify-center">
      <div
        class="flex flex-col xsm:flex-row sm:flex-row justify-center gap-y-3 xsm:gap-0 xsm:w-fit sm:gap-0 w-full sm:w-fit"
      >
        <div class="relative">
          <div
            class="w-full flex items-center justify-between rounded-r-none py-1 rounded-lg border dark:border-none border-gray-300 hover:border-[#10B981] shadow-sm md:w-[90%] lg:w-full mx-auto lg:pl-4 text-sm placeholder:font-semibold mb-0 lg:mb-0 dark:text-[#E0E0E0] bg-white dark:bg-[#293649] mr-0 xsm:pl-0 sm:pl-4 xl:pl-auto h-10 xl:h-12"
          >
            <input
              type="text"
              v-model="jobSearchTerm"
              name="job_name"
              autocomplete="off"
              class="py-1 mx-auto sm:py-1 2xl:py-1 w-[45vw] xsm:w-[45vw] sm:w-[40vw] md:w-[40vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[20vw] 3xl:w-[400px] 3xl:max-w-[600px] focus:w-[90vw] xsm:focus:w-[50vw] sm:focus:w-[60vw] md:focus:w-[55vw] xl:focus:w-[40vw] 2xl:focus:w-[30vw] font-normal placeholder:font-bold width-transition text-[#293649] bg-transparent border-1 h-5 focus:outline-none hover:border-green-500"
              placeholder="Job title, city or keyword..."
              aria-invalid="true"
              @focus="isInputFocused = true"
              @blur="isInputFocused = false"
            />
          </div>
          <ul
            class="z-20 w-full absolute rounded-b-md bg-white dark:bg-[#293649] border-b-1 border-[#10B981] scrollbar scrollbar-thin scrollbar-track-rounded-full scrollbar-track-[#10B981] shadow-lg max-h-56 text-base overflow-auto"
            :style="{ display: filteredJobs.length > 0 ? 'block' : 'none' }"
          >
            <li
              v-for="job in filteredJobs"
              :key="job.id"
              @click="selectJob(job)"
              class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-[#293649] dark:text-[#F3F4F6]"
            >
              {{ job.title }} - {{ job.company }} ({{ job.city }})
            </li>
          </ul>
        </div>
        <button
          type="button"
          title="Find Job"
          @click="findJob"
          class="bg-[#10B981] mx-auto py-2 px-4 xl:px-8 xsm:ml-1 xsm:mt-0 sm:ml-1 mt-1 sm:mt-0 text-base xl:text-lg inline-flex items-center text-white rounded-lg xsm:rounded-l-none sm:rounded-l-none font-body font-bold hover:border-[#0D9A6B] focus:ring-0 focus:outline-none h-10 xl:h-12"
        >
          <Icon
            name="i-heroicons-magnifying-glass"
            class="xs:mr-4 w-5 h-5 md:w-5 md:h-5"
          />
          <span class="">Find Job</span>
        </button>
      </div>
    </div>
    <div
      class="mt-7 md:mt-8 flex justify-around mx-auto items-center text-center md:w-[450px]"
    >
      <div class="cursor-pointer">
        <span
          class="font-body text-[#10B981] text-xl xl:text-3xl font-extrabold"
          >{{ totalJobs }}</span
        >
        <span
          class="block text-[#293649] font-bold text-sm xl:text-lg dark:text-[#E0E0E0]"
          >Jobs</span
        >
      </div>
      <div @click="navigateTo('/#fixed-vacancy')" class="cursor-pointer">
        <span
          class="font-body text-[#10B981] text-xl xl:text-3xl font-extrabold"
          >{{ totalCompanies }}</span
        >
        <span
          class="block text-[#293649] font-bold text-sm xl:text-lg dark:text-[#E0E0E0]"
        >
          Companies
        </span>
      </div>
      <div @click="navigateTo('/#fixed-sectors')" class="cursor-pointer">
        <span
          class="font-body text-[#10B981] text-xl xl:text-3xl font-extrabold"
          >{{ totalSectors }}</span
        >
        <span
          class="block text-[#293649] font-bold text-sm xl:text-lg dark:text-[#E0E0E0]"
          >Sectors</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isInputFocused = ref(false); // New state variable

// Sample JSON data for jobs, companies, and sectors
const jobsData = ref([
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Solutions Inc.",
    city: "Addis Ababa",
    sector_id: 1,
  },
  {
    id: 2,
    title: "Marketing Specialist",
    company: "Ethio Marketing",
    city: "Dire Dawa",
    sector_id: 2,
  },
  {
    id: 3,
    title: "Accountant",
    company: "Finance Hub",
    city: "Addis Ababa",
    sector_id: 3,
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "AI Innovators",
    city: "Addis Ababa",
    sector_id: 1,
  },
  {
    id: 5,
    title: "HR Manager",
    company: "People First",
    city: "Hawassa",
    sector_id: 4,
  },
  {
    id: 6,
    title: "Project Manager",
    company: "Build Fast",
    city: "Mekelle",
    sector_id: 5,
  },
]);

const companiesData = ref([
  { id: 1, name: "Tech Solutions Inc." },
  { id: 2, name: "Ethio Marketing" },
  { id: 3, name: "Finance Hub" },
  { id: 4, name: "AI Innovators" },
  { id: 5, name: "People First" },
  { id: 6, name: "Build Fast" },
]);

const sectorsData = ref([
  { id: 1, name: "Technology" },
  { id: 2, name: "Marketing" },
  { id: 3, name: "Finance" },
  { id: 4, name: "Human Resources" },
  { id: 5, name: "Construction" },
]);

const jobSearchTerm = ref("");

const totalJobs = computed(() => jobsData.value.length);
const totalCompanies = computed(() => companiesData.value.length);
const totalSectors = computed(() => sectorsData.value.length);

const filteredJobs = computed(() => {
  if (!jobSearchTerm.value) {
    return [];
  }
  const search = jobSearchTerm.value.toLowerCase();
  return jobsData.value.filter(
    (job) =>
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.city.toLowerCase().includes(search)
  );
});

const selectJob = (job) => {
  jobSearchTerm.value = `${job.title}, ${job.company}, ${job.city}`;
};

const findJob = () => {
  console.log("Searching for job:", jobSearchTerm.value);
};

const navigateTo = (path) => {
  console.log("Navigating to:", path);
};
</script>

<style scoped>
.width-transition {
  transition: width 0.3s ease-in-out;
}
</style> -->
