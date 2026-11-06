<script setup lang="ts">
import AppIcon from "./AppIcon.vue"
</script>

<template>
  <section id="home" class="w-full min-h-screen bg-[#0a192f]">
    <div class="max-w-[1000px] min-h-screen mx-auto px-8 flex flex-col justify-center">
      <p class="text-gray-200">Hi, my name is</p>
      <h1 class="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Eric Shans</h1>
      <h2 class="text-4xl sm:text-7xl font-bold text-[#8892b0]">
        I'm a Front End Developer, Artist, and Music Producer.
      </h2>
      <div class="pt-8">
        <a
          href="#work"
          class="text-white group border-2 px-6 py-3 my-2 inline-flex items-center hover:bg-red-800 hover:border-white">
          View Work
          <span class="ml-3 group-hover:rotate-90 duration-300"><AppIcon name="arrow" :size="20" /></span>
        </a>
      </div>
    </div>
  </section>
</template>
