<template>
    <div class="magic-island-container">
        <div class="island-inner-container">
          <div class="island-gradient-bg" :style="{ opacity: activeTower ? 0.1 : 1, transition: 'opacity 0.3s' }"></div>
          <div class="island-towers-container">
                <div class="island-towers tower-mail">
                    <img ref="mailRef" src="../assets/images/tower_mail.svg" alt="Mail Tower" @click="onTowerClick('mail')" :style="{ filter: activeTower ? (activeTower !== 'mail' ? 'opacity(0.1) brightness(0.7) blur(4px)' : 'drop-shadow(0 0 32px #00ff3c)') : null, transition: 'filter 0.2s', cursor: 'pointer' }"/>
                </div>
                <div class="island-towers tower-linkedin">
                    <img ref="linkedinRef" src="../assets/images/tower_linkedin.svg" alt="LinkedIn Tower" @click="onTowerClick('linkedin')" :style="{ filter: activeTower ? (activeTower !== 'linkedin' ? 'opacity(0.1) brightness(0.7) blur(4px)' : 'drop-shadow(0 0 32px #00c3ff)') : null, transition: 'filter 0.2s', cursor: 'pointer' }"/>
                </div>
                <div class="island-towers tower-github">
                    <img ref="githubRef" src="../assets/images/tower_github.svg" alt="GitHub Tower" @click="onTowerClick('github')" :style="{ filter: activeTower ? (activeTower !== 'github' ? 'opacity(0.1) brightness(0.7) blur(4px)' : 'drop-shadow(0 0 32px #c300ff)') : null, transition: 'filter 0.2s', cursor: 'pointer' }"/>
                </div>
            </div>
            <Transition name="fade-bottom">
            <div v-if="activeTower" ref="tooltipWrapper" @click.stop>
                <TowerTooltip :title="currentTitle" :description="currentDescription" :link="towerLinks[activeTower]" :tower="activeTower"/>
              </div>
            </Transition>
            <div class="island-ground">
                <img src="../assets/images/static_ground_bq.png" alt="island ground" :style="{ filter: activeTower !== null ? 'opacity(0.1) brightness(0.7) blur(4px)' : 'none', transition: 'filter 0.2s' }"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import TowerTooltip from '../components/towerTooltip.vue'

const activeTower = ref(null)

const mailRef = ref(null)
const linkedinRef = ref(null)
const githubRef = ref(null)
const tooltipWrapper = ref(null)

function onTowerClick(tower) {
  activeTower.value = activeTower.value === tower ? null : tower
}

function handleDocumentClick(e) {
  if (!activeTower.value) return
  const target = e.target
  if (
    tooltipWrapper.value?.contains(target) ||
    mailRef.value?.contains(target) ||
    linkedinRef.value?.contains(target) ||
    githubRef.value?.contains(target)
  ) {
    return
  }
  activeTower.value = null
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
})

const towerInfo = {
  mail: {
    title: 'Mail',
    description: "Got something on your mind? You can easily reach me by email — just click the button and I'll get back to you soon."
  },
  linkedin: {
    title: 'LinkedIn',
    description: "Most of my communication happens on LinkedIn. Connect with me there! and lets have a chat."
  },
  github: {
    title: 'GitHub',
    description: "Check out my GitHub. My projects are mostly frontend projects. But I'm always trying to improve and learn new things to become a better developer."
  }
}

const towerLinks = {
  mail: 'mailto:nikolaihoj@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nikolai-jensen-472577195/',
  github: 'https://github.com/Nikolaihoej'
}

const currentTitle = computed(() =>
  activeTower.value ? towerInfo[activeTower.value].title : ''
)
const currentDescription = computed(() =>
  activeTower.value ? towerInfo[activeTower.value].description : ''
)

</script>

<style scoped>
.magic-island-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 370px;
}
.island-inner-container {
    position: relative;
    width: 100%;
    max-width: 1080px;
}
.island-gradient-bg {
    width: 100%;
    height: 60vw; 
    min-height: 300px; 
    max-height: 600px; 
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    background: radial-gradient(ellipse at center, #f8cb5c 13%, hsla(46, 93%, 72%, .8) 19%, rgba(255, 254, 171, .5) 34%, hsla(54, 89%, 89%, 0) 70%);
    z-index: 0;
    pointer-events: none;
    transition: height 0.3s, min-height 0.3s, max-height 0.3s;
}
.island-towers-container {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    pointer-events: none;
}
.island-towers {
    flex: 1 1 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    pointer-events: auto;
}
.island-towers img {
    width: 80%;
    height: auto;
    transform: translateY(82%);
    scale: 50%;
    z-index: 4;
    cursor: pointer;
}
.tower-linkedin img:hover {
  filter: drop-shadow(0 0 12px #00c3ff);
}
.tower-mail img:hover {
  filter: drop-shadow(0 0 12px #00ff3c);
}
.tower-github img:hover {
  filter: drop-shadow(0 0 12px #c300ff);
}
.island-ground img {
    width: 100%;
    height: auto;
    pointer-events: none;
    transform: translateY(70%);
}
.tower-mail {
    scale: 94%;
    margin-right: -36%;
}
.tower-github {
    scale: 94%;
    margin-left: -36%;
}

@media (max-width: 600px) {
    .magic-island-container {
        height: 50px;
    }
}

@media (max-width: 1024px) {

  .magic-island-container {
    height: 120px;
  }
  .island-gradient-bg {
    min-height: 180px;
    max-height: 320px;
    top: 68%;
  }
  
}
</style>