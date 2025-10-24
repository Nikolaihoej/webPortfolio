<template>
  <div id="clouds">
    <div v-for="cloud in clouds" class="cloud" :key="cloud.id" :style="cloudStyle(cloud)" @animationend="removeCloud(cloud.id)"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const clouds = ref([])
let nextId = 0
let cloudInterval = null

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

function isMobile() {
  return window.innerWidth <= 600
}

function createCloud() {
  const topMin = isMobile() ? 80 : 250
  const topMax = isMobile() ? 180 : 600
  return {
    id: nextId++,
    top: randomBetween(topMin, topMax),
    opacity: randomBetween(0.2, 0.3),
    scale: randomBetween(0.6, 1),
    speed: randomBetween(40, 70),
    delay: 0
  }
}

function addCloud() {
  clouds.value.push(createCloud())
}

function removeCloud(id) {
  clouds.value = clouds.value.filter(cloud => cloud.id !== id)
}

function cloudStyle(cloud) {
  return {
    top: cloud.top + 'px',
    opacity: cloud.opacity,
    transform: `scale(${cloud.scale})`,
    animation: `moveclouds ${cloud.speed}s linear forwards`,
    animationDelay: `${cloud.delay}s`
  }
}

function startCloudGenerator() {
  cloudInterval = setInterval(() => {
    addCloud()
  }, randomBetween(1200, 3500))
}

onMounted(() => {
  for (let i = 0; i < 2; i++) addCloud()
  startCloudGenerator()
})

onUnmounted(() => {
  clearInterval(cloudInterval)
})
</script>

<style>
#clouds {
  position: absolute;
  width: 100%;
  height: 90%;
  overflow: hidden;
  padding: 100px 0;
  z-index: -1;
}

.cloud {
  width: 200px; height: 60px;
  background: #fff;
  border-radius: 200px;
  position: absolute;
  left: 100%;
}
.cloud:before, .cloud:after {
  content: '';
  position: absolute; 
  background: #fff;
  width: 100px; height: 80px;
  top: -15px; left: 10px;
  border-radius: 100px;
  transform: rotate(30deg);
}
.cloud:after {
  width: 120px; height: 120px;
  top: -55px; left: auto; right: 15px;
}

@keyframes moveclouds {
  0% { left: 100%; }
  100% { left: -100%; }
}

@media (max-width: 600px) {
  .cloud {
    width: 120px;
    height: 36px;
  }
  .cloud:before {
    width: 60px;
    height: 48px;
    top: -9px;
    left: 6px;
  }
  .cloud:after {
    width: 72px;
    height: 72px;
    top: -33px;
    right: 9px;
  }
}
</style>