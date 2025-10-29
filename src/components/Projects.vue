<template>
  <div class="projects-root">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import tooltracker from '../assets/images/tooltrackerRed.png'
import beezyRed from '../assets/images/beezyRed.png'
import todored from '../assets/images/todoRed.png'
import websiteRed from '../assets/images/websiteRed.png'

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'This Portfolio, built with Vue.js and hosted on firebase. The project is made for showcasing my creative work and skills.',
    image: websiteRed,
    link: 'https://github.com/Nikolaihoej/webPortfolio'
  },
  {
    id: 2,
    title: 'To-do Web App',
    description: 'A simple and modern styled to-do application made for the purpose of managing my daily tasks efficiently. made with Vue.js, MongoDB and Mongoose. still making it possible to edit tasks.',
    image: todored,
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
    title: 'Beezy - BI dashboard Web App',
    description: 'My bachelor project, that i got insipration for from my internship at Ordbogen.com, I developed the frontend for the project. Made with Vue.js, and PHP.',
    image: beezyRed,
    link: 'https://github.com/Nikolaihoej/BA-BI-frontend'
  }
]
</script>

<style scoped>

@media (max-width: 768px) {
  .projects-root {
    margin-top: 0; /* Adjust for smaller screens */
  }
}
</style>
