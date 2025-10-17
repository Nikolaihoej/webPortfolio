<template>
  <div id="app">
    <Clouds />
    <Hero />
    <Island />
  </div>
</template>

<script setup>
import Hero from './components/hero.vue';
import Island from './components/island.vue';
import Clouds from './components/clouds.vue';

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@400;600;700;900&display=swap');


body {
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    #b0c4de 0%,
    #dbe6ef 30%,
    #f4f5f6 60%,
    #a3b1c6 85%,
    #6b7a8f 100%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#app {
  text-align: left;
  height: 100%;
}

.fade-bottom-enter-active, .fade-bottom-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}
.fade-bottom-enter-from, .fade-bottom-leave-to {
  opacity: 0;
  transform: translateY(60px); /* Animates from 60px below its computed top */
}
.fade-bottom-enter-to, .fade-bottom-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
