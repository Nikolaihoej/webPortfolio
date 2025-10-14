<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script setup>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');

:root {
  --primary-bg: #4b529b;
  --secondary-bg: #251b39;
  --accent: #898ed3;
  --text-main: #fff;
  --text-secondary: #bbb3b3;
  --text-hover: #1f1a29;
  --card-bg: #442da3;
  --shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.28);
}

body {
  margin: 0;
  padding: 0;
  font-family: "space grotesk", sans-serif;
  background-color: var(--primary-bg);
  background-image: radial-gradient(circle, #442da31a, #2a1932e6 100%);
}

h1, h2, h3, h4, a {
  font-weight: 700;
  color: var(--text-main);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>