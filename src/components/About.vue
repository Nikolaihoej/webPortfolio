<template>
  <div class="about-container">
    <div class="about-content">
      <!-- Particle container -->
      <div class="particles-container">
        <div v-for="p in particles" :key="p.id" class="particle" :style="{ left: p.left, background: p.color, animationDuration: p.duration }"></div>
      </div>
      <img class="wizard-shelf" src="../assets/images/wizardShelf.png" alt="Book Shelf" @mouseenter="handleShelfEnter" @mouseleave="handleShelfLeave">
      <div class="wizard-container">
        <img class="wizard" src="../assets/images/wizardme.png" alt="Wizard Me" @mouseenter="handleWizardEnter" @mouseleave="handleWizardLeave">
      </div>
      <img class="about-platform" src="../assets/images/emptyPlatform.png" alt="empty platform"/>
    </div>
    <div
      class="stack-text" :class="{ 'animate__animated animate__fadeInUp': showStack && hasHoveredStack, 'animate__animated animate__fadeOutDown': !showStack && hasHoveredStack }" :style="{ opacity: showStack ? 1 : 0 }">
      <h1>Tech Stack</h1>
      <p>These are the technologies I have worked with and am familiar with:</p>
      <div class="stack-icons">
        <i class="fa-brands fa-html5" title="HTML"></i>
        <i class="fa-brands fa-css3-alt" title="CSS"></i>
        <i class="fa-brands fa-js" title="JavaScript"></i>
        <i class="fa-brands fa-node-js" title="Node.js"></i>
        <i class="fa-brands fa-vuejs" title="Vue.js"></i>
        <i class="fa-brands fa-php" title="PHP"></i>
        <i class="fa-brands fa-laravel" title="Laravel"></i>
        <i class="fa-brands fa-wordpress" title="WordPress"></i>
        <i class="fa-solid fa-database" title="SQL"></i>
        <i class="fa-brands fa-envira" title="MongoDB"></i>
        <i class="fa-brands fa-jsfiddle" title="Express"></i>
      </div>
    </div>
    <div class="wizard-text" :class="{ 'animate__animated animate__fadeInUp': showText && hasHoveredText, 'animate__animated animate__fadeOutDown': !showText && hasHoveredText }" :style="{ opacity: showText ? 1 : 0 }">
      <h1>About Me</h1>
      <p>
        Hey, my name is Nikolai. I'm a web developer from Denmark with a creative mindset. I use that creativity to solve problems through design and code, always aiming to build things that has a purpose.
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const particleCount = 6;
const particleColors = [
  '#b3e5fc', '#b3fcff', '#a2f0f0', '#84f8f8', '#99d9e9', '#9ef1ed'
];

const particles = [];
for (let i = 0; i < particleCount; i++) {
  particles.push({
    id: i,
    left: `${18 + i * 6}%`,
    duration: `${2.5 + i * 0.5}s`,
    color: particleColors[i % particleColors.length]
  });
}

const showText = ref(false);
const showStack = ref(false);
const hasHoveredText = ref(false);
const hasHoveredStack = ref(false);

let wizardLeaveTimer = null;
let shelfLeaveTimer = null;

function handleWizardEnter() {
  showText.value = true;
  hasHoveredText.value = true;
  clearTimeout(wizardLeaveTimer);
}
function handleWizardLeave() {
  if (window.innerWidth < 900) {
    showText.value = false;
  } else {
    wizardLeaveTimer = setTimeout(() => {
      showText.value = false;
    }, 1200);
  }
}

function handleShelfEnter() {
  showStack.value = true;
  hasHoveredStack.value = true;
  clearTimeout(shelfLeaveTimer);
}
function handleShelfLeave() {
  if (window.innerWidth < 900) {
    showStack.value = false;
  } else {
    shelfLeaveTimer = setTimeout(() => {
      showStack.value = false;
    }, 1200);
  }
}
</script>
<style scoped>
.about-container {
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 260px;
}

.about-content {
  position: relative;
  width: 100%;
}

/* Particle container for easy movement */
.particles-container {
  position: absolute;
  left: 65%;
  transform: translate(-50%, -86%);
  width: 26%;
  height: 100%;
  pointer-events: none; /* particles don't block mouse events */
  z-index: 5;
}

/* Particle styles and animations */
.particle {
  position: absolute;
  bottom: 10%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0.4;
  background: #b3e5fc;
  animation: moveUp 3s linear infinite;
  pointer-events: none;
}

@keyframes moveUp {
  0% { transform: translateY(0) scale(1); opacity: 0.8; }
  80% { opacity: 1; }
  100% { transform: translateY(-120px) scale(1.2); opacity: 0; }
}

.about-platform {
  display: block;
  margin: 0 auto;
  width: 80%;
  height: auto;
  pointer-events: none;
  user-select: none;
}

.wizard {
  position: absolute;
  left: 55%;
  transform: translate(-50%, -24%);
  width: 50%;
  height: auto;
  user-select: none;
  z-index: 2;
}

.wizard-container {
  position: absolute;
  left: 55%;
  transform: translate(-50%, -38%);
  width: 50%;
  height: auto;
  user-select: none;
  z-index: 2;
}

.wizard-shelf {
  position: absolute;
  left: 46%;
  transform: translate(-50%, -60%);
  width: 26%;
  height: auto;
  user-select: none;
  z-index: 1;
}

.wizard-text {
  position: absolute;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1.6px;
  top: 26%;
  left: 62%;
  width: 500px;
  color: #363636;
  padding: 16px;
  z-index: 3;
  transition: opacity 0.3s;
  pointer-events: none;
}

.stack-text {
  position: absolute;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1.6px;
  top: 26%;
  left: 18%;
  width: 400px;
  color: #363636;
  padding: 16px;
  z-index: 3;
  transition: opacity 0.3s;
  pointer-events: none;
}
.stack-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 18px;
  font-size: 2rem;
  align-items: center;
  color: #363636;
}

@media (max-width: 900px) {
  .wizard-text {
    font-size: 1rem;
    width: 100%;
    top: 60%;
    left: 0;
  }

  .stack-text {
    font-size: 1rem;
    width: 100%;
    top: 60%;
    left: 0;
  }

  .particle {
    width: 4px;
    height: 4px;
  }

  .about-container {
    margin-top: 162px;
    width: 100%;
  }

}

</style>