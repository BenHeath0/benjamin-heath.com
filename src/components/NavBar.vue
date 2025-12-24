<template>
  <Disclosure as="nav"  v-slot="{ open }">
    <div class="px-2 mx-auto bg-white border-b border-gray-200 max-w-7xl sm:px-6 lg:px-8 dark:border-gray-700 dark:bg-gray-900">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center p-2 text-gray-600 rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
          <div class="flex items-center shrink-0">
            <img class="w-auto h-8" src="/icon.png" alt="Your Company" />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a 
                v-for="page in pages" 
                :key="page.name" 
                :href="page.href" 
                :class="[page.href === currentPath ? 'bg-gray-900 dark:bg-gray-800 text-white dark:text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                :aria-current="page.href === currentPath ? 'page' : undefined"
                :target="page.target"
              >
                {{ page.name }}
              </a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2 mx-2 text-gray-600 rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            aria-label="Toggle dark mode"
          >
            <SunIcon v-if="isDark" class="w-6 h-6" />
            <MoonIcon v-else class="w-6 h-6" />
          </button>
          <a 
            href="https://github.com/BenHeath0" 
            class="w-8 p-1 mx-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            target="_blank"
          >
            <img class="dark:invert" :src="githubIcon" />
          </a>
          <a 
            href="https://www.linkedin.com/in/benjheath/" 
            class="w-8 p-1 mx-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            target="_blank"
          >
            <img :src="linkedinIcon" />
          </a>
        </div>
      </div>
    </div>
  
    <DisclosurePanel class="bg-white border-b border-gray-200 sm:hidden dark:bg-gray-900 dark:border-gray-700">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton v-for="page in pages" :key="page.name" as="a" :href="page.href" :class="[page.href === currentPath ? 'bg-gray-900 dark:bg-gray-800 text-white dark:text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="page.href === currentPath ? 'page' : undefined">{{ page.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
  
<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useDarkMode } from '@/composables/useDarkMode'
  import githubIcon from '@/assets/github-mark.svg'
  import linkedinIcon from '@/assets/linkedin-icon.png'
  
  const pages = [
    { name: 'Home', href: '/'},
    { name: 'Resume', href: '/resume.pdf', target: '_blank'},
    { name: 'Pippin', href: '/pippin'},
  ]
  
  const route = useRoute()
  const currentPath = computed(() => route.path)
  const { isDark, toggleDarkMode } = useDarkMode()
</script>