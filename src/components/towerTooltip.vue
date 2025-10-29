<template>
  <div class="tower-tooltip" :class="`tooltip-${tower}`">
    <h2 class="tooltip-title">{{ info.title }}</h2>
    <p class="tooltip-description">{{ info.description }}</p>
    <a class="tooltip-btn" :class="`btn-${tower}`" :href="link" target="_blank" rel="noopener noreferrer">Click for more</a>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tower: String,
  link: String
})

const towerInfo = {
  mail: {
    title: 'Mail',
    description: "Got something on your mind? You can easily reach me by email, I will most likely answer within a day. and I'm always open to new opportunities!",
    color: '#2596be'
  },
  linkedin: {
    title: 'LinkedIn',
    description: "Most of my communication happens on LinkedIn. Connect with me there! and lets have a chat. I'm always posting about my projects and what I'm working on.",
    color: '#7fd9ee'
  },
  github: {
    title: 'GitHub',
    description: "Check out my GitHub. My projects are mostly frontend projects. But I'm always trying to improve and learn new things to become a better developer.",
    color: '#cbb2d0'
  }
}

const info = computed(() => towerInfo[props.tower])
</script>

<style scoped>
.tower-tooltip {
  position: absolute;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  font-family: 'Catamaran', sans-serif;
  font-weight: 500;
  padding: 25px;
}
.tooltip-title{
  font-size: 2.5rem;
  color: #363636;
}
.tooltip-description {
  font-size: 1rem;
  font-weight: 500;
  margin: 12px 0;
  color: #363636;
}
/* position for the tooltips */
.tooltip-mail {
  left: 35%;
}
.tooltip-linkedin {
  left: 58%;
}
.tooltip-github {
  left: 22%;
}

/*tooltip button style and hover effects*/
.tooltip-btn {
  position: relative;
  display: inline-block;
  width: inherit;
  padding: 6px 8px;
  background: transparent;
  color: #363636;
  border: 4px solid #363636;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  transition: border .1s ease-in-out, transform .2s ease-in-out;
}

.btn-mail:hover {
  --glow-color: 37, 233, 86;
  border-color: #25e956;
}

.btn-linkedin:hover {
  --glow-color: 75, 222, 241;
  border-color: #4bdef1;
}

.btn-github:hover {
  --glow-color: 229, 132, 248;
  border-color: #e584f8;
}

.btn-mail:hover,
.btn-linkedin:hover,
.btn-github:hover {
  animation: pulse-glow 3s ease-in-out infinite;
}
/* very low glow anymation with pulse effect */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 
      0 0 20px rgba(var(--glow-color), 0.25),
      0 0 40px rgba(var(--glow-color), 0.15),
      0 0 60px rgba(var(--glow-color), 0.08);
  }
  50% {
    box-shadow: 
      0 0 25px rgba(var(--glow-color), 0.35),
      0 0 50px rgba(var(--glow-color), 0.2),
      0 0 75px rgba(var(--glow-color), 0.12);
  }
}

@media (max-width: 600px) {
  .tower-tooltip {
    width: 100%;
    scale: 0.8;
    height: auto;
    left: 0%;
    top: 70%;
  }
}
</style>