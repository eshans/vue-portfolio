<script setup lang="ts">
import { skills } from "../data"
</script>

<template>
  <section id="skills" class="w-full min-h-screen bg-[#0a192f] text-gray-300">
    <div class="max-w-[1000px] min-h-screen mx-auto px-8 py-24 flex flex-col justify-center">
      <div>
        <h2 class="text-4xl font-bold inline border-b-4 border-gray-600">Skills</h2>
        <p class="py-4">// These are the technologies that I've worked with</p>
      </div>
      <ul class="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 text-center py-8">
        <li
          v-for="skill in skills"
          :key="skill.name"
          class="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
          <img v-if="skill.image" :src="skill.image" alt="" class="w-20 h-20 mx-auto object-contain" />
          <svg v-else-if="skill.svg" viewBox="0 0 24 24" class="w-20 h-20 mx-auto p-2" aria-hidden="true">
            <path :d="skill.svg.path" :fill="`#${skill.svg.hex}`" />
          </svg>
          <p class="my-4 uppercase">{{ skill.name }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
