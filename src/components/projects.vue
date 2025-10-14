<template>
  <section id="projects">
    <div class="section-bg-ufo"></div>
    <div class="container position-relative ufo-left-wrap">
      <div class="sectionTitle text-center">
        <h1>Projects</h1>
      </div>
      <div class="sectionDescription text-center pb-4">
        <p>Here are some of my recent projects. Showcasing my skills and creativity in web development and design.</p>
      </div>
    </div>
    <div class="container">
      <div class="projectContainer d-flex flex-wrap justify-content-center ">
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
.projectContainer {
  position: relative;
  z-index: 10;
  scale: 90%;
}

section {
  min-height: 100vh;
}

.sectionTitle {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.sectionDescription {
  font-size: 1.2rem;
  color: var(--text-main);
  margin: 0px 25% 0px 25%;
}

h1 {
  color: var(--text-main);
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

.section-bg-ufo {
  position: absolute;
  height: 400px;
  width: 100%;
  background: url('@/assets/images/ufoProjector.png') no-repeat left;
  pointer-events: none;
  top: 2000px;
  left: -500px;
  z-index: 10;
}
.section-bg-ufo::after {
  content: "";
  position: absolute;
  left: 664px;   /* Move cone tip to match UFO projector */
  top: 38px;     /* Move cone tip to match UFO projector */
  width: 1000px;
  height: 850px;
  background: linear-gradient(90deg, rgba(0,255,200,0.25) 0%, rgba(0,180,255,0.12) 80%, transparent 100%);
  clip-path: polygon(0 49%, 600% -236%, 105% 100%, -4% 49%);
  filter: blur(16px);
  pointer-events: none;
  z-index: 9;
  transform: rotate(18deg);
  animation: ufo-flicker 1.2s infinite;
}

@keyframes ufo-flicker {
  0%   { opacity: 0.7; filter: blur(16px); }
  10%  { opacity: 0.5; filter: blur(18px); }
  20%  { opacity: 0.8; filter: blur(14px); }
  35%  { opacity: 0.6; filter: blur(17px); }
  50%  { opacity: 0.9; filter: blur(15px); }
  65%  { opacity: 0.6; filter: blur(16px); }
  80%  { opacity: 0.8; filter: blur(18px); }
  100% { opacity: 0.7; filter: blur(16px); }
}

@media (max-width: 900px) {
  .section-bg-ufo {
    width: 180px;
    height: 180px;
    opacity: 0.4;
  }
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

  .section-bg-ufo {
    display: none;
  }
}
</style>