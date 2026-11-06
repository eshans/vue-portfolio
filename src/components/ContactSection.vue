<script setup lang="ts">
import { email } from "../data"
</script>

<template>
  <section id="contact" class="w-full min-h-screen bg-[#0a192f] flex justify-center items-center px-8 py-24">
    <form action="https://api.web3forms.com/submit" method="POST" class="flex flex-col max-w-[600px] w-full">
      <div class="pb-8 text-gray-300">
        <h2 class="text-4xl font-bold inline border-b-4 border-gray-600">Contact</h2>
        <p class="py-4">
          // Submit the form below or shoot me an email -
          <a :href="`mailto:${email}`" class="underline hover:text-blue-500">{{ email }}</a>
        </p>
      </div>
      <input type="hidden" name="access_key" value="29164b70-589a-4bc5-8c16-c9911850bcfa" />
      <input type="hidden" name="redirect" value="https://web3forms.com/success" />
      <label for="contact-name" class="sr-only">Name</label>
      <input id="contact-name" class="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" autocomplete="name" required />
      <label for="contact-email" class="sr-only">Email</label>
      <input
        id="contact-email"
        class="my-4 p-2 bg-[#ccd6f6]"
        type="email"
        placeholder="Email"
        name="email"
        autocomplete="email"
        required />
      <label for="contact-message" class="sr-only">Message</label>
      <textarea id="contact-message" class="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message" required />
      <button
        type="submit"
        class="text-white border-2 hover:bg-gray-600 px-4 py-3 my-8 mx-auto flex items-center">
        Let's collaborate
      </button>
    </form>
  </section>
</template>
