<template>
  <div id="clouds">
    <div v-for="cloud in clouds" class="cloud" :key="cloud.id" :style="{ top: cloud.top + 'px', opacity: cloud.opacity, transform: `scale(${cloud.scale})`, animation: `moveclouds ${cloud.speed}s linear forwards`, animationDelay: `${cloud.delay}s` }" @animationend="removeCloud(cloud.id)" ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

let nextId = 0
const clouds = ref([])

function addCloud() {
  const isMobile = window.innerWidth <= 600
  const topMin = isMobile ? 80 : 250
  const topMax = isMobile ? 180 : 600
  clouds.value.push({
    id: nextId++,
    top: randomBetween(topMin, topMax),
    opacity: randomBetween(0.2, 0.6),
    scale: randomBetween(0.6, 1),
    speed: randomBetween(40, 70),
    delay: 0
  })
}

function removeCloud(id) {
  clouds.value = clouds.value.filter(cloud => cloud.id !== id)
}

function startCloudGenerator() {
  setInterval(() => {
    addCloud()
  }, randomBetween(1200, 3500))
}

for (let i = 0; i < 5; i++) addCloud()
startCloudGenerator()
</script>

<style>
#clouds {
  position: absolute;
  width: 100%;
  height: 400px;
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