<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
import HomeSection from "./components/HomeSection.vue"
import AboutSection from "./components/AboutSection.vue"
import SkillsSection from "./components/SkillsSection.vue"
import WorkSection from "./components/WorkSection.vue"
import ContactSection from "./components/ContactSection.vue"
</script>

<template>
  <NavBar />
  <main>
    <HomeSection />
    <AboutSection />
    <SkillsSection />
    <WorkSection />
    <ContactSection />
  </main>
</template>
