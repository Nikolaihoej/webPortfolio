<template>
  <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh;">
    <div class="blogpost-page">
      <button class="close-btn" @click="goBack">×</button>
        <div class="blogpost-container">
        <header class="blogpost-header">
            <div class="title-section">
                <h1>{{ project.title }}</h1>
                <div class="meta">
                    <span v-if="project.author">made by {{ project.author }}</span>
                    <span v-if="project.date"> • {{ project.date }}</span>
                </div>
                <p class="subtitle" v-if="project.subtitle">{{ project.subtitle }}</p>
                <div class="extra-images" v-if="project.extraImages && project.extraImages.length">
                  <img class="extra-image" v-for="(img, idx) in project.extraImages" :key="idx" :src="img" :alt="`Extra image ${idx + 1}`"/>
                </div>
            </div>
        </header>
        <section class="tech-icons" v-if="project.techIcons && project.techIcons.length">
          <i
            v-for="(icon, idx) in project.techIcons"
            :key="idx"
            :class="['tech-icon', icon]"
            aria-hidden="true"
          ></i>
        </section>

        <section class="blogpost-content">
            <p>{{ project.description }}</p>
            <div v-if="Array.isArray(project.content)">
            <p v-for="(paragraph, idx) in project.content" :key="idx">{{ paragraph }}</p>
            </div>
            <div v-else-if="project.content">
            <p>{{ project.content }}</p>
            </div>
        </section>
        </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useProjectsStore } from '../stores/projectsData.js';

const route = useRoute();
const router = useRouter();
const projectsStore = useProjectsStore();
const project = projectsStore.getProjectById(Number(route.params.id));

function goBack() {
  router.back();
}
</script>

<style scoped>
.blogpost-page {
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 9999;
}

.blogpost-container {
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 32px;
}

.blogpost-header {
  gap: 32px;
  margin-bottom: 24px;
}

.project-image {

}

.title-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
  line-height: 1.2;
}

.meta {
  color: #bbb3b3;
  font-size: 1rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.1rem;
  color: #fff;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.blogpost-content {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #e0e0e0;
  margin-top: 8px;
}

.close-btn {
  position: absolute;
  top: 24px;
  right: 32px;
  background: none;
  border: none;
  font-size: 5rem;
  color: #fff;
  cursor: pointer;
  z-index: 10;
  transition: color 0.2s;
}
.close-btn:hover {
  color: #ffa100;
}

.extra-images {
  display: flex;
  gap: 22px;
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-bottom: 0;
    
}

.extra-image{
  width: 400px;
  height: 400px;
  border-radius: 6px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.281), 0 1.5px 6px 0 rgba(0, 0, 0, 0.267), inset #333 0 0 0 1.5px, inset rgba(255, 255, 255, 0.13) 0 0 0 2px;
}
</style>