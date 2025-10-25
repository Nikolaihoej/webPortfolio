<template>
    <div class="magic-island-container">
        <div class="island-inner-container" :class="[ { activeTower } ] ">
          <div class="island-gradient-bg" :class="{ inactive: activeTower }" ></div>
          <div class="island-towers-container">
            <div class="island-towers tower-mail" >
              <img ref="mailRef" src="../assets/images/tower_mail.svg" :class="[{ inactive: activeTower && activeTower !== 'mail' }]" alt="Mail Tower" @mouseenter="onTowerHover('mail')" @mouseleave="onTowerHover(null)" @click="onTowerHover('mail')" />
            </div>
            <div class="island-towers tower-linkedin" >
              <img ref="linkedinRef" src="../assets/images/tower_linkedin.svg" :class="[{ inactive: activeTower && activeTower !== 'linkedin' }]" alt="LinkedIn Tower" @mouseenter="onTowerHover('linkedin')" @mouseleave="onTowerHover(null)" />
            </div>
            <div class="island-towers tower-github" >
              <img ref="githubRef" src="../assets/images/tower_github.svg" :class="[{ inactive: activeTower && activeTower !== 'github' }]" alt="GitHub Tower" @mouseenter="onTowerHover('github')" @mouseleave="onTowerHover(null)" />
            </div>
          </div>
          <img class="island-ground" :class="{ inactive: activeTower }" src="../assets/images/static_ground_bq.png" alt="island ground"/>
          <Transition name="fade-bottom">
            <div v-if="activeTower" ref="tooltipWrapper" @mouseenter="onTooltipHover(true)" @mouseleave="onTooltipHover(false)">
              <TowerTooltip :tower="activeTower" :link="towerLinks[activeTower]" />
            </div>
          </Transition>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TowerTooltip from './TowerToolTip.vue'

const activeTower = ref(null)
const tooltipWrapper = ref(null)

const isTooltipHovered = ref(false)
const isTowerHovered = ref(false)

function onTowerHover(tower) {
  if (tower) {
    activeTower.value = tower
    isTowerHovered.value = true
  } else {
    isTowerHovered.value = false
    setTimeout(() => {
      if (!isTooltipHovered.value && !isTowerHovered.value) {
        activeTower.value = null
      }
    }, 50)
  }
}

function onTooltipHover(hovered) {
  isTooltipHovered.value = hovered
  if (!hovered && !isTowerHovered.value) {
    setTimeout(() => {
      if (!isTooltipHovered.value && !isTowerHovered.value) {
        activeTower.value = null
      }
    }, 50)
  }
}

const towerLinks = {
  mail: 'mailto:nikolaihoj@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nikolai-jensen-472577195/',
  github: 'https://github.com/Nikolaihoej'
}

onMounted(() => {
  document.addEventListener('mousedown', handleDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleDocumentClick)
})

function handleDocumentClick(event) {
  const tooltipEl = tooltipWrapper.value
  // If tooltip is open and click is outside tooltip and towers, close it
  if (
    activeTower.value &&
    tooltipEl &&
    !tooltipEl.contains(event.target) &&
    !event.target.closest('.island-towers')
  ) {
    activeTower.value = null
  }
}
</script>

<style scoped>
/* Gradient is for glowing effect under island */
.island-gradient-bg {
  width: 100%;
  height: 100%;
  transform: translateY(-6%);
  position: absolute;
  background: radial-gradient(ellipse at center, #f8cb5c 13%, hsla(46, 93%, 72%, .8) 19%, rgba(255, 254, 171, .5) 34%, hsla(54, 89%, 89%, 0) 70%);
  z-index: 0;
  pointer-events: none;
  transition: filter 0.3s ease;
}
.magic-island-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  position: relative;
  overflow: visible;
}

/* Inner container to maintain aspect ratio */
.island-inner-container {
  position: relative;
  width: min(100%, 1080px);
  aspect-ratio: 16 / 9;
}

.island-ground {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(12%);
  width: 100%;
  height: auto;
  z-index: 1;
  pointer-events: none;
  transition: filter 0.3s ease;
}

/* Tower container and towers */
.island-towers-container {
  position: absolute;
  bottom: 38%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2%;
  z-index: 2;
}

.island-towers {
  width: 20%;
  display: flex;
  justify-content: center;
  pointer-events: auto;
}

.island-towers img {
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: filter 0.3s ease;
}

.island-towers img.inactive,
.island-ground.inactive,
.island-gradient-bg.inactive {
  filter: grayscale(0.5) brightness(1) opacity(0.3) blur(6px);
}
</style>