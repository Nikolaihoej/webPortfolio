<template>
    <section id="projects">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-5 mb-3">
            <h1>Projects</h1>
          </div>
          <div>
            <p class="textInfo text-center mb-5 text-light">These are some of the projects I have created myself. Some were developed as part of my education in web development, while others were passion projects I worked on in my spare time.</p>
          </div>
        </div>
        <div class="row">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ProjectCard from './projectCard.vue';
  
  const projects = ref([
    {
      id: 1,
      title: 'PugRun',
      description: 'PugRun is a vanilla JavaScript game that I created for fun one summer between semester writings in my education. I chose to further develop PugRun so I could bring the game to a JavaScript exam.',
      image: new URL('@/assets/images/PugRun.png', import.meta.url).href,
      link: 'https://github.com/Nikolaihoej/PugRun',
      disabled: false
    },
    {
      id: 2,
      title: 'This Portfolio',
      description: 'This Portfolio is a project I created to showcase my skills and projects. I used Vue.js to build the site and added animations with Vanta.js and bootstrap. The site is fully responsive and optimized for performance.',
      image: new URL('@/assets/images/placeholder.jpg', import.meta.url).href,
      link: 'http://example.com/project-two',
      disabled: false
    },
    {
      id: 3,
      title: 'Soon to come',
      description: '',
      image: new URL('@/assets/images/placeholder.jpg', import.meta.url).href,
      link: 'http://example.com/project-two',
      disabled: true
    },
    // Add more projects as needed
  ]);
  </script>
  
  <style scoped>
  h1 {
    color: #fff;
  }
  section {
    min-height: 100vh;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .row {
    width: 100%;
  }
  .col-12 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .textInfo {
    font-size: 22px;
    line-height: 2.5rem;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 576px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 1rem;
    }
  }
  </style>