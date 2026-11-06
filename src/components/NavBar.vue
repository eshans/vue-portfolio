<script setup lang="ts">
import { ref } from "vue"
import AppIcon from "./AppIcon.vue"
import { email, github, linkedin, sections } from "../data"

const open = ref(false)

const socials = [
  { label: "LinkedIn", href: linkedin, icon: "linkedin", bg: "bg-blue-600" },
  { label: "GitHub", href: github, icon: "github", bg: "bg-[#333333]" },
  { label: "Email", href: `mailto:${email}`, icon: "mail", bg: "bg-black" },
] as const
</script>

<template>
  <header class="fixed z-20 w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300">
    <a href="#home" aria-label="Eric Shans, back to top">
      <img src="/logo.png" alt="" width="70" height="70" />
    </a>

    <nav aria-label="Main">
      <ul class="hidden md:flex">
        <li v-for="section in sections" :key="section.id" class="px-4">
          <a :href="`#${section.id}`" class="hover:text-blue-500">{{ section.label }}</a>
        </li>
      </ul>
    </nav>

    <button
      type="button"
      class="md:hidden z-10 p-2"
      :aria-label="open ? 'Close menu' : 'Open menu'"
      :aria-expanded="open"
      aria-controls="mobile-menu"
      @click="open = !open">
      <AppIcon :name="open ? 'close' : 'menu'" />
    </button>

    <div
      v-show="open"
      id="mobile-menu"
      class="md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
      <ul class="text-center">
        <li v-for="section in sections" :key="section.id" class="py-6 text-4xl">
          <a :href="`#${section.id}`" @click="open = false">{{ section.label }}</a>
        </li>
      </ul>
      <ul class="flex gap-8 pt-6">
        <li v-for="social in socials" :key="social.label">
          <a :href="social.href" target="_blank" rel="noopener noreferrer" :aria-label="social.label">
            <AppIcon :name="social.icon" :size="30" />
          </a>
        </li>
      </ul>
    </div>

    <ul class="hidden lg:flex flex-col fixed top-[35%] left-0">
      <li
        v-for="social in socials"
        :key="social.label"
        :class="social.bg"
        class="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300">
        <a
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="flex justify-between items-center w-full h-full px-4 text-gray-300">
          {{ social.label }} <AppIcon :name="social.icon" :size="30" />
        </a>
      </li>
    </ul>
  </header>
</template>
