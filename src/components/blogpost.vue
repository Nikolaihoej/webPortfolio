<template>
  <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh;">
    <div class="blogpost-page">
      <div class="blogpost-container">
        <header class="blogpost-header">
          <div class="close-btn-Container"><i class="fa-solid fa-xmark close-btn" @click="goBack"></i></div>
          <div class="title-section">
            <h1>{{ project.title }}</h1>
            <div class="meta">
              <div>
                <span v-if="project.author">made by {{ project.author }}</span>
                <span v-if="project.date"> • {{ project.date }}</span>
              </div>
              <a v-if="project.link" :href="project.link" class="projectBtn proj-btn btn btn-outline-light" target="_blank" rel="noopener noreferrer">Check it out</a>
            </div>
            <!-- Mobile carousel -->
            <div class="extra-images-carousel" v-if="project.extraImages && project.extraImages.length && isMobile">
              <transition name="fade" mode="out-in">
                <img class="extra-image" :key="currentImageIndex" :src="project.extraImages[currentImageIndex]" :alt="`Extra image ${currentImageIndex + 1}`" @touchstart="handleTouchStart" @touchend="handleTouchEnd"/>
              </transition>
              <div class="carousel-controls">
                <button @click="prevImage" aria-label="Previous image">‹</button>
                <span>{{ currentImageIndex + 1 }} / {{ project.extraImages.length }}</span>
                <button @click="nextImage" aria-label="Next image">›</button>
              </div>
              <a v-if="project.link" :href="project.link" class="projectBtn mobile-btn btn btn-outline-light" target="_blank" rel="noopener noreferrer">Check it out</a>
            </div>
            <!-- Desktop gallery -->
            <div
              class="extra-images"
              v-else-if="project.extraImages && project.extraImages.length">
              <img class="extra-image" v-for="(img, index) in project.extraImages" :key="index" :src="img" :alt="`Extra image ${index + 1}`"/>
            </div>
          </div>
          <h4 class="techTitle" v-if="showTechTitle">Technologies Used</h4>
          <section class="tech-icons" v-if="project.techIcons && project.techIcons.length">
            <i v-for="(icon, index) in project.techIcons" :key="index" :class="['tech-icon', icon]" aria-hidden="true"></i>
          </section>
        </header>
        <section class="blogpost-details">
          <p>{{ project.description }}</p>
          <div v-if="Array.isArray(project.details)">
            <p v-for="(paragraph, index) in project.details" :key="index">{{ paragraph }}</p>
          </div>
          <div v-else-if="project.details">
            <p>{{ project.details }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProjectsStore } from '../stores/projectsData.js';

const route = useRoute();
const router = useRouter();
const projectsStore = useProjectsStore();
const project = projectsStore.getProjectById(Number(route.params.id));
const showTechTitle = computed(() => Array.isArray(project.techIcons) && project.techIcons.length > 0);

function goBack() {
  router.back();
}

// Carousel logic for mobile
const currentImageIndex = ref(0);
let touchStartX = 0;

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % project.extraImages.length;
}

function prevImage() {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + project.extraImages.length) % project.extraImages.length;
}

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].clientX;
}

function handleTouchEnd(e) {
  const touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX - 30) nextImage();
  else if (touchEndX > touchStartX + 30) prevImage();
}

// Detect mobile device
const isMobile = ref(false);
onMounted(() => {
  isMobile.value = window.innerWidth <= 900;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 900;
  });
});
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

.techTitle {
  color: var(--text-main);
  margin-top: 8px;
  font-size: 1.3rem;
}

.tech-icons {
  display: flex;
  color: var(--text-main);
  font-size: 1.5rem;
  gap: 8px;
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
  color: var(--text-main);
  margin-bottom: 10px;
  line-height: 1.2;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.1rem;
  color: var(--text-main);
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.blogpost-details {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-main);
  margin-top: 8px;
  margin-bottom: 24px;
}

.projectBtn {
  opacity: 0.5;
  font-weight: 600;
  transition: opacity 0.2s;
  border: 4px solid #fff;
}

.projectBtn:hover {
  opacity: 1;
}

.close-btn-Container {
  color: var(--text-main);
  font-size: 1.5rem;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  
}

.close-btn:hover {
  color: var(--text-secondary);
  transition: color 0.2s;
}

/* Desktop gallery */
.extra-images {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-bottom: 0;
}

.extra-image {
  width: 400px;
  height: 400px;
  border-radius: 6px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.281), 0 1.5px 6px 0 rgba(0, 0, 0, 0.267), inset #333 0 0 0 1.5px, inset rgba(255, 255, 255, 0.13) 0 0 0 2px;
  object-fit: cover;
  user-select: none;
  touch-action: pan-x;
}

/* Mobile carousel */
.extra-images-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 12px;
}

.extra-images-carousel .extra-image {
  width: 80vw;
  max-width: 400px;
  height: 80vw;
  max-height: 400px;
  border-radius: 6px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.281), 0 1.5px 6px 0 rgba(0, 0, 0, 0.267), inset #333 0 0 0 1.5px, inset rgba(255, 255, 255, 0.13) 0 0 0 2px;
  object-fit: cover;
  user-select: none;
  touch-action: pan-x;
}

.carousel-controls {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
}

.carousel-controls button {
  background: none;
  border: none;
  color: var(--text-main);
  font-size: 2rem;
  cursor: pointer;
  padding: 0 8px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

@media (min-width: 900px) {
  .extra-images-carousel {
    display: none;

  }
}
@media (max-width: 900px) {
  .extra-images {
    display: none;
  }

  .blogpost-header {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    position: relative;
  }

  .title-section {
    align-items: center;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 6px;
    word-break: break-word;
  }

  .meta {
    flex-direction: column;
    align-items: center;
    font-size: 0.95rem;
    gap: 4px;
  }

  .proj-btn {
    display: none;
  }
}
</style>