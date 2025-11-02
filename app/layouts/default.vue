<template>
  <div class="flex flex-col min-h-screen">
    <LayoutTheHeader />
    <main class="flex-grow pt-16">
      <!-- pt-16 to offset the fixed header -->
      <slot />
    </main>
    <LayoutTheFooter />
  </div>
</template>
