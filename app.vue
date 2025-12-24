<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <NavBar />
    <main class="flex flex-col">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
#__nuxt {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
