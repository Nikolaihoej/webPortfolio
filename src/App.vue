<template>
  <div ref="vantaRef">
    <Navbar />
    <about />
    <projects />
    <experience />
  </div>

  <footer>
    <div class="footer footsis text-center p-3">
    </div>
  </footer>

  <!-- Scroll to Top Button -->
  <button v-show="showScrollToTop" @click="scrollToTop" class="scroll-to-top">
    <i class="bi bi-arrow-up d-flex justify-content-center"></i>
  </button>
</template>

<script setup>
import Navbar from './components/navBar.vue';
import about from './components/about.vue';
import projects from './components/projects.vue';
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import experience from './components/experience.vue';

const vantaRef = ref(null);
let vantaEffect = null;
const showScrollToTop = ref(false);

const handleScroll = () => {
    showScrollToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    vantaEffect = NET({
        THREE: THREE,
        el: vantaRef.value,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x8383ed,
        backgroundColor: 0x2f283e,
        points: 13.00,
        maxDistance: 10.00,
        spacing: 10.00,
        showDots: false
    });

    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    if (vantaEffect) vantaEffect.destroy();
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
body {
  margin: 0;
  padding: 0;
  font-family: 'inter', sans-serif;
  background-color: #2f283e;
}

h1, h2, h3, h4, a {
  font-family: 'JetBrains Mono', sans-serif;
}

.footsis {
  background-color: #1f1a29;
  color: #fff;
  font-size: 12px;
  bottom: 0;
  width: 100%;
  height: 125px;
}

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #756696;
  color: white;
  border: none;
  border-radius: 50%;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 200;
}

.scroll-to-top:hover {
  background-color: #6a6adf;
}

.scroll-to-top i {
  line-height: 50px;
}
</style>