<template>
  <div class="container">
    <div class="feature-section">
      <div class="content">
        <h2>{{ project.title }}</h2>
        <p class="description">{{ project.description }}</p>
        <a v-if="project.link" :href="project.link" target="_blank" rel="noopener" class="project-link">
          View Project
        </a>
      </div>
      <div class="image-container">
        <div class="paper-container">
          <img src="../assets/images/paperscroll.svg" alt="paper" />
        </div>
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
defineProps({
  project: Object
})
</script>

<style scoped>

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.image-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.paper-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.paper-container img {
    width: 100%;
    height: 534px;
    display: block;
}

.project-image {
    position: absolute;
    top: 100px; /* Adjust as needed */
    left: 50%;
    transform: translateX(-50%);
    width: 70%; /* Adjust size as needed */
    z-index: 2;
}

.project-image img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
}

.content {
    width: 50%;
}

.feature-section {
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;
    align-items: center;
}

.description {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 32px;
}

@media (max-width: 968px) {
  .feature-section {
    flex-direction: column;
  }
}
</style>