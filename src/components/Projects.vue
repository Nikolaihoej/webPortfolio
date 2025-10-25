<template>
    <div class="cards-container">
    <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
import placeholderImg from '../assets/images/placeholder.jpg';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'This portfolio built with Vue 3. and deployed on firebase hosting.',
    image: placeholderImg,
    // tags: ['Vue3 ', 'JavaScript ', 'CSS '],
    link: 'https://yourportfolio.com'
  },
  {
    title: 'Todo App',
    description: 'A simple todo app built with Vue 3, MongoDB and Mongoose.',
    image: placeholderImg,
    // tags: ['Vue3 ', 'MongoDB ', 'Node.js '],
    link: 'https://yourweatherapp.com'
  },
  {
    title: 'Appsheet App',
    description: 'A simple Low-code app built for Total Ejendom Service, made with the intent of Optimizing internal processes.',
    image: placeholderImg,
    // tags: ['Appsheet ', 'AppsheetDB ', 'Automation (AI)'],
    link: 'https://yourweatherapp.com'
  }
  // Add more projects as needed
];
</script>

<style scoped>
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
}

</style>