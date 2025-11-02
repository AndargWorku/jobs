<template>
  <footer class="bg-white text-muted-text">
    <div class="max-w-7xl mx-auto px-20 py-10 items-start justify-around">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-x-4">
        <div class="mb-8 md:mb-0">
          <h3
            class="text-sm font-bold border-b-2 border-black pb-1 inline-block"
          >
            Get Started
          </h3>
          <ul class="mt-3 font-semibold text-sm">
            <li>
              <NuxtLink to="/signup" class="hover:text-[#04a29f]"
                >Sign up</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/login" class="hover:text-[#04a29f]"
                >Login</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="mb-8 md:mb-0">
          <h3
            class="text-sm font-bold border-b-2 border-black pb-1 inline-block"
          >
            Quick links
          </h3>
          <ul class="mt-3 font-semibold text-sm">
            <li>
              <NuxtLink to="/hahu-jobs-io" class="hover:text-[#04a29f]"
                >HahuJobs IO</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/minab-tech" class="hover:text-[#04a29f]"
                >Minab Tech</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- This div will now span 2 columns on large screens -->
        <div class="mb-8 md:mb-0 lg:col-span-2">
          <img
            src="/assets/images/minab-logo.svg"
            alt="Minab IT Solutions Logo"
            class="h-16 mb-3"
          />
          <p class="text-sm leading-relaxed">
            HaHuJobs is a cloud based product owned and managed by a technology
            consulting firm called Minab IT solutions PLC. Minab was founded in
            2014 and has an extensive experience in software development for the
            past nine years.
          </p>
        </div>

        <div class="text-left md:text-right">
          <p class="text-sm">Powered by</p>
          <IconsIconLogo class="md:ml-auto my-2 md:mr-0" />

          <p class="text-[#04a29f] font-semibold text-lg">ለሀገር ልጅ በሀገር ልጅ!</p>
        </div>
      </div>

      <hr class="mt-10 border-gray-200" />

      <div
        class="mt-8 flex flex-col-reverse sm:flex-row items-center muted-text justify-between"
      >
        <div class="text-sm mt-4 sm:mt-0">
          <NuxtLink
            to="/privacy-policy"
            class="hover:text-[#04a29f] transition-colors mr-6"
            >Privacy policy</NuxtLink
          >
          <span
            >© 2020 - {{ new Date().getFullYear() }} HaHuJobs. All rights
            reserved.</span
          >
        </div>
        <div class="flex items-center space-x-3">
          <a
            href="#"
            aria-label="Telegram"
            class="p-2 rounded-full bg-primary text-white hover:opacity-80 transition-opacity"
          >
            <Icon name="ph:telegram-logo-bold" size="18" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            class="p-2 rounded-full bg-primary text-white hover:opacity-80 transition-opacity"
          >
            <Icon name="ph:facebook-logo-bold" size="18" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            class="p-2 rounded-full bg-primary text-white hover:opacity-80 transition-opacity"
          >
            <Icon name="ph:x-logo-bold" size="18" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            class="p-2 rounded-full bg-primary text-white hover:opacity-80 transition-opacity"
          >
            <Icon name="ph:linkedin-logo-bold" size="18" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<!-- <template>
  <footer class="bg-white text-muted-text">
    <div class="max-w-7xl mx-auto px-20 py-10 items-start justify-around">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-4">
        <div class="mb-8 md:mb-0">
          <h3
            class="text-sm font-bold border-b-2 border-black pb-1 inline-block"
          >
            Get Started
          </h3>
          <ul class="mt-3 font-semibold text-sm">
            <li>
              <NuxtLink to="/signup" class="hover:text-[#04a29f]"
                >Sign up</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/login" class="hover:text-[#04a29f]"
                >Login</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="mb-8 md:mb-0">
          <h3
            class="text-sm font-bold border-b-2 border-black pb-1 inline-block"
          >
            Quick links
          </h3>
          <ul class="mt-3 font-semibold text-sm">
            <li>
              <NuxtLink to="/hahu-jobs-io" class="hover:text-[#04a29f]"
                >HahuJobs IO</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/minab-tech" class="hover:text-[#04a29f]"
                >Minab Tech</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="mb-8 md:mb-0">
          <img
            src="/assets/images/minab-logo.svg"
            alt="Minab IT Solutions Logo"
            class="h-16 mb-3"
          />
          <p class="text-sm leading-relaxed">
            HaHuJobs is a cloud based product owned and managed by a technology
            consulting firm called Minab IT solutions PLC. Minab was founded in
            2014 and has an extensive experience in software development for the
            past nine years.
          </p>
        </div>

        <div class="text-left md:text-right">
          <p class="text-sm">Powered by</p>
          <IconsIconLogo class="md:ml-auto my-2 md:mr-0" />

          <p class="text-[#04a29f] font-semibold text-lg">ለሀገር ልጅ በሀገር ልጅ!</p>
        </div>
      </div>

      <hr class="mt-10 border-gray-200" />

      <div
        class="mt-8 flex flex-col-reverse sm:flex-row items-center muted-text justify-between"
      >
        <div class="text-sm mt-4 sm:mt-0">
          <NuxtLink
            to="/privacy-policy"
            class="hover:text-[#04a29f] transition-colors mr-6"
            >Privacy policy</NuxtLink
          >
          <span
            >© 2020 - {{ new Date().getFullYear() }} HaHuJobs. All rights
            reserved.</span
          >
        </div>
        <div class="flex items-center space-x-3">
          <a
            href="#"
            aria-label="Telegram"
            class="p-2 rounded-full bg-primary text-white hover:opacity-80 transition-opacity"
          >
            <Icon name="ph:telegram-logo-bold" size="18" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            class="p-2 rounded-full bg-primary text-white hover:opacity-80 transition-opacity"
          >
            <Icon name="ph:facebook-logo-bold" size="18" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            class="p-2 rounded-full bg-primary text-white hover:opacity-80 transition-opacity"
          >
            <Icon name="ph:x-logo-bold" size="18" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            class="p-2 rounded-full bg-primary text-white hover:opacity-80 transition-opacity"
          >
            <Icon name="ph:linkedin-logo-bold" size="18" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template> -->
