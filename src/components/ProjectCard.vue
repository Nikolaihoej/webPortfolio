<template>
  <div class="card">
    <div class="card-info">
      <h2 class="card-header">{{ project.title }}</h2>
      <p class="card-description">{{ project.description }}</p>
      <div class="card-tags" v-if="project.tags">
        <span v-for="tag in project.tags" :key="tag" class="tag-icon">
          <i :class="tagClassMap[tag] || 'fas fa-question-circle'"></i>
        </span>
      </div>
      <a class="card-link" v-if="project.link" :href="project.link" target="_blank" rel="noopener">View Project</a>
    </div>
    <img :src="project.image" :alt="project.title" />
  </div>
</template>

<script setup>

defineProps({
  project: Object
})

const tagClassMap = {
  'Vue.js': 'fab fa-vuejs',
  'Firebase': 'fas fa-fire',
  'MongoDB': 'fas fa-leaf',
  'Mongoose': 'fas fa-database',
  'laravel': 'fab fa-laravel',
  'SQL': 'fas fa-server'
}

</script>

<style scoped>
.card {
  position: relative;
  width: 100%;
  max-width: 774px;
  height: 500px;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  color: #fff;
  display: flex;
}

.card img {
  position: absolute;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  transition: opacity .2s ease-out;
  z-index: 1;
}

.card-info {
  position: absolute;
  border-radius: 8px;

  height: 100%;
  padding: 40px 30px 30px 30px;
    background: linear-gradient(
    to right,
    rgba(40, 44, 52, 0.90) 0%,
    rgba(40, 44, 52, 0.0) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 10;

}

.card-tags {
  display: flex;
  gap: 0.7rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
}

.tag-icon {
  font-size: 1.5rem;
  color: #fcfcfc;
}

.card-header {
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 0 20px rgb(0, 0, 0);
  letter-spacing: 2px;
  margin-bottom: 1rem;
  word-break: break-word;
}

.card-description,
.card-link {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  width: 50%;
}

.card-link {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}
</style>