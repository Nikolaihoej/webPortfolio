<template>
  <div class="projects-root">
    <Transition :enter-active-class="transitionName" :leave-active-class="direction === 'right' ? 'animate__animated animate__slideOutLeft' : 'animate__animated animate__slideOutRight'" mode="out-in">
    <ProjectCard :key="projects[currentIndex].id" :project="projects[currentIndex]" class="project-card"/>
    </Transition>
    <div class="pagination-dots" :style="{ pointerEvents: isAnimating ? 'none' : 'auto' }">
      <span
        v-for="(project, index) in projects"
        :key="project.id"
        :class="['dot', { active: index === currentIndex }]"
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ProjectCard from './ProjectCard.vue'
import tooltracker from '../assets/images/toolTracker.png'
import biezy from '../assets/images/biezy.png'
import todo from '../assets/images/todo.jpg'
import portfolio from '../assets/images/island.png'

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'This Portfolio, built with Vue.js and hosted on firebase. The project is made for showcasing my creative work and skills.',
    image: portfolio,
    tags: ['Vue.js', 'Firebase'],
    link: 'https://github.com/Nikolaihoej/webPortfolio'
  },
  {
    id: 2,
    title: 'To-do Application',
    description: 'A simple and modern styled to-do application made for the purpose of managing my daily tasks efficiently. made with Vue.js, MongoDB and Mongoose. still making it possible to edit tasks.',
    image: todo,
    tags: ['Vue.js', 'MongoDB', 'Mongoose'],
    link: 'https://github.com/Nikolaihoej/Todo-list'
  },
  {
    id: 3,
    title: 'Appsheet Application',
    description: 'Developed a Google AppSheet app for Total Ejendom Service to manage tool loans and track usage, reducing wasted trips and saving employee time.',
    image: tooltracker,
  },
  {
    id: 4,
    title: 'Beezy - BI dashboard Web Application',
    description: 'My bachelor project, that i got insipration for from my internship at Ordbogen.com, I developed the frontend for the project. Made with Vue.js, and PHP.',
    image: biezy,
    tags: ['Vue.js', 'laravel', 'SQL'],
    link: 'https://github.com/Nikolaihoej/BA-BI-frontend'
  }
]

const currentIndex = ref(0)
const direction = ref('right')
const transitionName = ref('animate__animated animate__slideInRight')
const isAnimating = ref(false)
const ANIMATION_DURATION = 700 // ms, adjust to match your CSS animation


function goTo(index) {
  if (isAnimating.value || index === currentIndex.value) return
  isAnimating.value = true
  direction.value = index > currentIndex.value ? 'right' : 'left'
  transitionName.value = direction.value === 'right'
    ? 'animate__animated animate__slideInRight'
    : 'animate__animated animate__slideInLeft'
  currentIndex.value = index
  setTimeout(() => {
    isAnimating.value = false
  }, ANIMATION_DURATION)
}


function onWheel(e) {
  if (e.deltaY > 0 && currentIndex.value < projects.length - 1) {
    goTo(currentIndex.value + 1)
  } else if (e.deltaY < 0 && currentIndex.value > 0) {
    goTo(currentIndex.value - 1)
  }
}

onMounted(() => {
  window.addEventListener('wheel', onWheel)
})
onUnmounted(() => {
  window.removeEventListener('wheel', onWheel)
})
</script>

<style scoped>
.projects-root {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.project-card {
  width: 100%;
  max-width: 774px;
}

.pagination-dots {
  display: flex;
  gap: 0.7rem;
  margin-top: 2rem;
  justify-content: center;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #888;
  opacity: 0.5;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;
}

.dot.active {
  background: #fff;
  opacity: 1;
  box-shadow: 0 0 8px #fff;
}

.animate__slideInRight {
  animation-name: slideInRightCustom;
}

.animate__slideOutLeft {
  animation-name: slideOutLeftCustom;
}

.animate__slideOutRight {
  animation-name: slideOutRightCustom;
}

@keyframes slideInRightCustom {
  0% {
    transform: translateX(120vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutLeftCustom {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-120vw);
    opacity: 0;
  }
}

@keyframes slideOutRightCustom {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(120vw);
    opacity: 0;
  }
}
</style>