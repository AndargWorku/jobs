<template>
  <header
    class="fixed top-0 w-full z-50 bg-white/60 dark:bg-dark-background/90 backdrop-blur-lg dark:backdrop-blur-xl"
  >
    <nav
      class="container flex items-center justify-between p-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
    >
      <div class="flex shrink-0">
        <NuxtLink to="/" aria-label="Home">
          <IconsIconLogo />
          <div
            class="text-secondary-6 dark:text-secondary-8 text-xs ml-0.5 mt-0.5"
          >
            Primary
          </div>
        </NuxtLink>
      </div>

      <div class="hidden md:flex items-center space-x-4 justify-end">
        <NuxtLink
          to="/"
          class="text-sm dark:text-white hover:opacity-80"
          :class="{ 'text-[#04a29f] dark:text-[#04a29f]': $route.path === '/' }"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-sm text-gray-800 dark:text-white hover:text-[#04a29f]"
          :class="{
            'text-[#04a29f] dark:text-[#04a29f]': $route.path === '/about',
          }"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/jobs"
          class="text-sm text-gray-800 dark:text-white hover:text-[#04a29f]"
          :class="{
            'text-[#04a29f] dark:text-[#04a29f]': $route.path === '/jobs',
          }"
        >
          Jobs
        </NuxtLink>
        <NuxtLink
          to="/post-vacancy"
          class="text-sm text-gray-800 dark:text-white hover:text-[#04a29f]"
          :class="{
            'text-[#04a29f] dark:text-[#04a29f]':
              $route.path === '/post-vacancy',
          }"
        >
          Post Vacancy
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-sm text-gray-800 dark:text-white hover:text-[#04a29f]"
          :class="{
            'text-[#04a29f] dark:text-[#04a29f]': $route.path === '/contact',
          }"
        >
          Contact
        </NuxtLink>

        <button
          aria-label="Toggle dark mode"
          class="p-1 hover:text-[#04a29f] focus:outline-none"
          :class="{
            'focus:ring-[#04a29f] text-[#04a29f]': colorMode.value === 'dark',
          }"
          @click="toggleColorMode"
        >
          <Icon
            v-if="colorMode.value === 'dark'"
            name="iconamoon:mode-light-thin"
            class="w-4 h-4 hover:text-[##04a29f]"
          />
          <Icon
            v-else
            name="si:moon-line"
            class="w-4 h-4 hover:text-[##04a29f]"
          />
        </button>

        <NuxtLink
          to="/login"
          class="px-2 py-1 text-xs text-white border border-transparent rounded-lg bg-[#04a29f] hover:bg-[#b7f3ec] transition-colors duration-200 hover:text-black"
        >
          Login
        </NuxtLink>
        <span class="text-gray-500 dark:text-gray-400 hidden sm:inline text-sm"
          >Or</span
        >
        <NuxtLink
          to="/signup"
          class="px-2 py-1 text-xs text-white bg-[#04a29f] rounded-lg hover:text-black hover:bg-[#b7f3ec] transition-colors duration-200"
        >
          Sign up
        </NuxtLink>
      </div>

      <div class="md:hidden flex items-center ml-auto">
        <button
          aria-label="Toggle dark mode"
          class="p-1 mr-2 hover:text-[#04a29f] focus:outline-none"
          :class="{
            'focus:ring-[#04a29f] text-[#04a29f]': colorMode.value === 'dark',
          }"
          @click="toggleColorMode"
        >
          <Icon
            v-if="colorMode.value === 'dark'"
            name="iconamoon:mode-light-thin"
            class="w-4 h-4"
          />
          <Icon v-else name="si:moon-line" class="w-4 h-4" />
        </button>

        <button
          @click="toggleMobileMenu"
          class="text-gray-800 dark:text-white focus:outline-none"
        >
          <Icon
            v-if="!isMobileMenuOpen"
            name="heroicons-outline:menu"
            class="w-6 h-6 text-gray-500"
          />
          <Icon
            v-else
            name="heroicons-outline:x"
            class="w-6 h-6 text-gray-500"
          />
        </button>
      </div>
    </nav>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden w-full px-4 pb-4 space-y-3 flex flex-col items-start z-10 bg-transparent dark:bg-dark-background/90 backdrop-blur-lg dark:backdrop-blur-xl"
      aria-orientation="vertical"
    >
      <NuxtLink
        to="/"
        class="text-base text-gray-800 dark:text-white hover:opacity-80 hover:text-[#04a29f] w-full py-1"
        :class="{ 'text-[#04a29f] dark:text-[#04a29f]': $route.path === '/' }"
        @click="closeMobileMenu"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="text-base text-gray-800 dark:text-white hover:text-[#04a29f] w-full py-1"
        :class="{
          'text-[#04a29f] dark:text-[#04a29f]': $route.path === '/about',
        }"
        @click="closeMobileMenu"
      >
        About
      </NuxtLink>
      <NuxtLink
        to="/jobs"
        class="text-base text-gray-800 dark:text-white hover:text-[#04a29f] w-full py-1"
        :class="{
          'text-[#04a29f] dark:text-[#04a29f]': $route.path === '/jobs',
        }"
        @click="closeMobileMenu"
      >
        Jobs
      </NuxtLink>
      <NuxtLink
        to="/post-vacancy"
        class="text-base text-gray-800 dark:text-white hover:text-[#04a29f] w-full py-1"
        :class="{
          'text-[#04a29f] dark:text-[#04a29f]': $route.path === '/post-vacancy',
        }"
        @click="closeMobileMenu"
      >
        Post Vacancy
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="text-base text-gray-800 dark:text-white hover:text-[#04a29f] w-full py-1"
        :class="{
          'text-[#04a29f] dark:text-[#04a29f]': $route.path === '/contact',
        }"
        @click="closeMobileMenu"
      >
        Contact
      </NuxtLink>

      <NuxtLink
        to="/login"
        class="text-base text-gray-800 dark:text-white hover:text-[#04a29f] w-full py-1"
        :class="{
          'text-[#04a29f] dark:text-[#04a29f]': $route.path === '/login',
        }"
        @click="closeMobileMenu"
      >
        Login
      </NuxtLink>
      <NuxtLink
        to="/signup"
        class="text-base text-gray-800 dark:text-white hover:text-[#04a29f] w-full py-1"
        :class="{
          'text-[#04a29f] dark:text-[#04a29f]': $route.path === '/signup',
        }"
        @click="closeMobileMenu"
      >
        Sign up
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useColorMode } from "#imports";
import { useRoute } from "vue-router";
import { Icon } from "#components";

const isMobileMenuOpen = ref(false);
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const route = useRoute();
watch(route, () => {
  if (isMobileMenuOpen.value) {
    closeMobileMenu();
  }
});
</script>

<style>
body {
  @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-white;
}

.dark .bg-dark-background {
  background-color: #1a202c;
}

@media (max-width: 767px) {
  .dark:bg-dark-background\/90.backdrop-blur-xl {
    background-color: rgba(26, 32, 44, 0.95);
    backdrop-filter: blur(24px);
  }
}
</style>
-->
