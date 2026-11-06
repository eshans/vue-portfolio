<script setup lang="ts">
import { projects } from "../data"
</script>

<template>
  <section id="work" class="w-full min-h-screen text-gray-300 bg-[#0a192f]">
    <div class="max-w-[1000px] min-h-screen mx-auto px-8 py-24 flex flex-col justify-center">
      <div class="pb-8">
        <h2 class="text-4xl font-bold inline border-b-4 border-gray-600">Work</h2>
        <p class="py-6">// Check out some of my recent work. These are sites that I've designed and coded.</p>
      </div>
      <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <li
          v-for="project in projects"
          :key="project.name"
          :style="{ backgroundImage: `url(${project.image})` }"
          class="work-card group shadow-lg shadow-[#040c16] rounded-md overflow-hidden">
          <div
            class="work-overlay w-full h-full p-4 flex flex-col justify-center items-center text-center bg-black/0 group-hover:bg-black/75 group-focus-within:bg-black/75 transition-all duration-1000">
            <div class="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
              <h3 class="text-2xl text-white tracking-wider">{{ project.name }}</h3>
              <p class="text-sm text-gray-300 pt-1">{{ project.stack }}</p>
              <div class="pt-6 flex justify-center">
                <a
                  v-if="project.code"
                  :href="project.code"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`${project.name} code`"
                  class="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </a>
                <a
                  :href="project.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`${project.name} live site`"
                  class="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.work-card {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  height: 250px;
}

/* Touch screens can't hover, so keep project details visible there */
@media (hover: none) {
  .work-overlay {
    background-color: rgb(0 0 0 / 0.75);
  }
  .work-overlay > div {
    opacity: 1;
  }
}
</style>
