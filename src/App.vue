<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

</script>
<template>
  <main class="flex flex-col h-full">
    <NavBar />
    <RouterView />
  </main>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
