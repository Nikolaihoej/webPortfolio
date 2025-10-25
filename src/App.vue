<template>
  <NavBar />
  <Clouds />
  <Hero />
  <router-view v-slot="{ Component, route }">
    <Transition :enter-active-class="getEnterClass(route)" leave-active-class="animate__animated animate__slideOutLeft" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script setup>
import { ref } from 'vue';
import Hero from './components/Hero.vue';
import Clouds from './components/Clouds.vue';
import NavBar from './components/NavBar.vue';

const firstLoad = ref(true);

function getEnterClass(route) {
  if (route.name === 'island' && firstLoad.value) {
    firstLoad.value = false;
    return 'animate__animated animate__slideInUp';
  }
  return 'animate__animated animate__slideInLeft';
}
</script>

<style>
.animate__animated {
  --animate-duration: 2s;
}
</style>
