<template>
  <div class="container">
    <div class="inner-container">
      <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" mode="out-in">
        <div class="project-container" :key="currentProject.image">
          <div class="project-info desktop-info">
            <h3 class="project-title">{{ currentProject.title }}</h3>
            <p class="project-desc">{{ currentProject.description }}</p>
            <a v-if="currentProject.link" :href="currentProject.link" target="_blank" class="project-link">View Project</a>
          </div>
          <img v-if="currentProject" class="project-img" :src="currentProject.image" :alt="currentProject.title"/>
          <div v-if="projects && projects.length > 1" class="pagination-dots" aria-label="Project pagination">
            <span v-for="(p, i) in projects" :key="p.id ?? i" class="dot" :class="{ active: i === currentIndex }" :aria-current="i === currentIndex ? 'true' : 'false'" :aria-label="`Project ${i + 1} of ${projects.length}`"></span>
          </div>
        </div>
      </transition>
      <!-- Prev -->
      <div class="nav-wrap prev">
        <button class="nav-btn" @click="changeProject(-1)"><i class="fas fa-chevron-left"></i></button>
      </div>
      <!-- Next -->
      <div class="nav-wrap next">
        <button class="nav-btn" @click="changeProject(1)"><i class="fas fa-chevron-right"></i></button>
      </div>
      <img class="empty-platform" src="../assets/images/emptyPlatform.png" alt="empty platform"/>
      <div class="project-info mobile-info">
        <h3 class="project-title">{{ currentProject.title }}</h3>
        <p class="project-desc">{{ currentProject.description }}</p>
        <a v-if="currentProject.link" :href="currentProject.link" target="_blank" class="project-link">View Project</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const currentProject = ref(props.projects[0])

watch(
  () => props.projects,
  (newProjects) => {
    if (newProjects?.length) {
      currentIndex.value = 0
      currentProject.value = newProjects[0]
    }
  },
  { immediate: true }
)

function changeProject(direction) {
  if (!props.projects.length) return
  currentIndex.value =
    (currentIndex.value + direction + props.projects.length) % props.projects.length
  currentProject.value = props.projects[currentIndex.value]
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
}

.inner-container {
  position: relative;
  width: 100%;
  max-width: 1080px;
}

.empty-platform {
  display: block;
  margin: 0 auto;
  width: 80%;
  height: auto;
  pointer-events: none;
  user-select: none;
}

.project-container {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  aspect-ratio: 16 / 9;
  z-index: 1;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px;
}

.project-info {
  box-sizing: border-box;
}
.desktop-info {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 32px 32px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(216, 18, 18, 0) 100%);
  z-index: 2;
  color: #fff;
  display: block;
}
.mobile-info {
  display: none;
  margin: 24px auto 0 auto;
  max-width: 600px;
  padding: 0 30px;
  background: transparent;
  border-radius: 8px;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 6px;
}
.project-desc {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.project-link {
  display: inline-block;
  margin-top: 8px;
  border: 4px solid #fff;
  padding: 6px 14px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  
}
.project-link:hover {
  background-color: #fff;
  color: #414040;
  transition: background-color 0.3s, color 0.3s;
}

.project-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Navigation */
.nav-wrap {
  position: absolute;
  transform: translateY(-50%);
  z-index: 2;
}
.nav-wrap.prev { left: 5%; }
.nav-wrap.next { right: 5%; }

.nav-btn {
  position: relative;
  background: transparent;
  border: none;
  color: #404040;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1;
  transition: transform 0.2s;
}

.nav-btn:hover {
  transform: scale(1.5);
}

.pagination-dots {
  position: absolute;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  border: 2px solid rgba(255, 255, 255, 0.6);
  transition: transform 0.15s ease, background 0.15s ease;
  padding: 0;
}

.dot.active {
  background: #ffffff;
  transform: scale(1.35);
}

.animate__animated {
  animation-duration: 0.3s;
}

@media (max-width: 768px) {
  .desktop-info {
    display: none;
  }
  .mobile-info {
    display: block;
  }
  .project-title,
  .project-desc,
  .project-link {
    color: #414040 !important;
  }

  .project-link {
    border-color: #414040;
  }
}
</style>