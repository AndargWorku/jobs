<template>
  <div class="bg-gray-100 dark:bg-gray-800 min-h-screen">
    <div class="container mx-auto px-16 py-16">
      <!-- What makes us stand out section -->
      <section class="grid md:grid-cols-2 gap-12 items-center mb-24">
        <!-- Left Column: Text Content -->
        <div>
          <h2 class="text-4xl font-extrabold text-gray-900 mb-6">
            What makes us <br />
            standout from the rest
          </h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-4">
            HaHuJobs Primary services are deployments targeting the needs of the
            Ethiopian jobseeker, with both citizens and non-nationals the
            platform is a tool intended to ease the process of looking for a job
            at all levels of employment. It facilitates vacancy aggregation and
            posting from various sources as well as enterprises, public career
            profiles, apply for jobs, and subscribe to customized jobs by email,
            text, or channel of their choice. HaHuJobs primarily also offers
            standardized classification of all vacancies both sourced from
            HaHuJobs enterprise services and other manual and digital vacancy
            platforms.
          </p>
          <p class="text-gray-700 leading-relaxed mb-8">
            Our vacancy classification follows a combination of ISCO 08, ISIC
            and the Ethiopian occupation classification with modifications as
            the Ethiopian labor market. Each vacancy will be given a four-digit
            occupation taxonomy identification code as it determines its overall
            content requirements in terms of skills, knowledge, ability, and
            expected activities.
          </p>

          <p class="text-gray-800 font-semibold mb-4">Get Social with us!</p>
          <button
            class="bg-teal-500 text-white py-2 px-5 rounded-lg shadow-md hover:bg-teal-600 hover:text-gray-500 transition duration-300 ease-in-out mb-6"
          >
            Follow here
            <span class="ml-2 inline-block">→</span>
          </button>
          <div class="flex space-x-4">
            <!-- Social Icons with Nuxt-Icon and Hover Effect -->
            <div
              class="w-4 h-4 bg-teal-500 text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            >
              <Icon name="ei:sc-telegram" class="w-3 h-3" />
            </div>
            <div
              class="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center text-white transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            >
              <Icon name="mdi:facebook" class="w-3 h-3" />
              <!-- Using mdi:facebook icon -->
            </div>
            <div
              class="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center text-white transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            >
              <Icon name="arcticons:x-twitter" class="w-3 h-3" />
              <!-- Using mdi:twitter icon -->
            </div>
            <div
              class="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center text-white transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            >
              <Icon name="mdi:linkedin" class="w-3 h-3" />
              <!-- Using mdi:linkedin icon -->
            </div>
          </div>
        </div>

        <!-- Right Column: Image of Robot on Podium with Hover Effect -->
        <div class="flex justify-center items-center order-first md:order-none">
          <img
            src="/assets/images/hahu_robot.svg"
            alt="Robot on a podium representing achievement"
            class="w-3/4 max-w-sm h-auto object-contain transition duration-300 ease-in-out hover:scale-125"
          />
        </div>
      </section>

      <!-- Why choose us section -->
      <section class="grid md:grid-cols-2 gap-12 items-start pt-16">
        <div class="flex justify-center items-center p-8">
          <img
            src="/assets/images/keyboard.svg"
            alt="Stylized keyboard representing digital services"
            class="w-3/4 max-w-xs h-auto object-contain transition duration-300 ease-in-out hover:scale-125"
          />
        </div>

        <!-- Right Column: Text Content with Feature Points -->
        <div>
          <h2 class="text-4xl font-extrabold text-gray-900 mb-8">
            Why choose us
          </h2>

          <div class="mb-8">
            <h3 class="text-2xl font-bold text-teal-600 mb-2">Convenience</h3>
            <p class="text-teal-600 font-bold text-sm mb-2">
              You no longer look for jobs, jobs look for you
            </p>
            <p class="text-sm font-semibold leading-relaxed">
              We offer aggregated, standardized and quality assured vacancy and
              career-related information from various digital as well as manual
              sources to sort them into one searchable database.
            </p>
          </div>

          <div class="mb-8">
            <h3 class="text-2xl font-bold text-teal-600 mb-2">Accessibility</h3>
            <p class="text-teal-600 font-bold text-sm mb-2">
              Reachable across multiple channels and platforms
            </p>
            <p class="text-sm font-semibold leading-relaxed">
              Use your mobile, tablet, or desktop to access our website, mobile
              app, Telegram, or Facebook bots and also get personalized job
              alerts via your designated medium.
            </p>
          </div>

          <div class="mb-8">
            <h3 class="text-2xl font-bold text-teal-600 mb-2">Ease of Use</h3>
            <p class="text-teal-600 font-bold text-sm mb-2">
              Both online and offline service options.
            </p>
            <p class="text-sm font-semibold leading-relaxed">
              HaHuJobs offers both in-person as well as virtual modalities for
              all its career-related service components through its employment
              offices across the nation and in Addis Ababa.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// No specific reactive data needed for this static content.
</script>

<style scoped>
/* Custom CSS for approximate teal colors (if not defined in tailwind.config.js) */
.bg-teal-500 {
  background-color: #00b1af;
}
.text-teal-600 {
  color: #00b1af;
}
.bg-teal-200 {
  background-color: #d4f4f4;
}
.text-teal-700 {
  color: #008c8a;
}

body {
  margin: 0;
  padding: 0;
}
</style>
