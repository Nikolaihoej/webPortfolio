<template>
  <section id="projects">
    <div class="container">
      <div class="sectionTitle text-center">
        <h1>Projects</h1>
      </div>
      <div class="sectionDescription text-center pb-4">
        <p>Here are some of my recent projects. Showcasing my skills and creativity in web development and design.</p>
      </div>
    </div>
    <div class="container">
      <div class="align-items-center justify-content-center d-flex flex-wrap ">
        <div v-for="(project, index) in projects" :key="project.id" class="project-fade-in" v-intersect:style="{ transitionDelay: (index * 200) + 'ms' }" @click="openBlog(project)" style="cursor: pointer;">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
import { ref } from "vue";
import ProjectCard from "./projectCard.vue";
import { useProjectsStore } from '../stores/projectsData.js';
import { useRouter } from 'vue-router';
const router = useRouter();

const projectsStore = useProjectsStore();
const projects = projectsStore.projects;

// Intersection Observer directive for fade-in animation
const vIntersect = {
  mounted(el) {
    el.classList.add('is-hidden');
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
  }
};

// Register the directive for this component
defineExpose({ directives: { intersect: vIntersect } });

function openBlog(project) {
  router.push(`/blog/${project.id}`);
}
</script>
  
<style scoped>
section {
  min-height: 100vh;
}

.sectionTitle {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.sectionDescription {
  font-size: 1.2rem;
  color: #fff;
  margin: 0px 25% 0px 25%;
}

h1 {
  color: #fff;
}

/* Fade-in animation for project cards */
.project-fade-in.is-hidden {
  opacity: 0;
  transform: translateY(30px);
}
.project-fade-in.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s cubic-bezier(.4,0,.2,1) var(--delay,0ms), transform 0.6s cubic-bezier(.4,0,.2,1) var(--delay,0ms);
}

@media (max-width: 900px) {
  .sectionDescription {
    font-size: 1rem;
    padding: 0 18px 18px 18px;
    margin: 0;
  }
  .sectionTitle h1 {
    font-size: 2.5rem;
    padding: 18px 18px 0 18px;
  }
  
  .sectionTitle {
    margin-bottom: 0;
  }
}
</style>