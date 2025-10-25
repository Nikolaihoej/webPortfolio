<template>
  <div class="card" @click="toggleDetails">
    <div class="card-inner">
      <div class="image-container">
        <img :src="image" :alt="title">
      </div>
      <div class="content-container">
        <div :class="['details-wrapper', detailsAnimClass]" @animationend="onDetailsAnimationEnd">
          <h3 class="card-title">{{ title }}</h3>
          <div v-if="showDetails" class="details-content">
            <p>{{ description }}</p>
            <div class="tags">
              <span class="individuel-tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
            </div>
            <a :href="link" class="btn" target="_blank" @click.stop>View Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
  title: String,
  description: String,
  image: String,
  tags: Array,
  link: String
});

const showDetails = ref(false);
const detailsAnimClass = ref('');

function toggleDetails() {
  if (!showDetails.value) {
    detailsAnimClass.value = 'animate__animated animate__slideInUp';
    showDetails.value = true;
  } else {
    detailsAnimClass.value = 'animate__animated animate__slideOutDown';
  }
}

function onDetailsAnimationEnd() {
  if (detailsAnimClass.value.includes('slideOutDown')) {
    showDetails.value = false;
    detailsAnimClass.value = '';
  }
}
</script>

<style scoped>
.card {
    margin: 18px;
    width: 100%;
    max-width: 400px;
    aspect-ratio: 3 / 4;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    cursor: pointer;
}

.card-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.image-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 16px;
}

.image-container img {
    position: absolute;
    width: 100%;
    height: 538px;
    object-fit: cover;
    z-index: 1;
    padding: 0;
}

.content-container {
    padding: 12px 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
}

.details-wrapper {
    --animate-duration: 0.5s;
}

.content-container h3 {
    font-size: 1.6rem;
    line-height: 1.4;
    font-weight: 600;
}

.content-container p {
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 500;
}

.tags {
    margin-top: 8px;
}

.individuel-tag{
    padding: 4px 8px;
    border-radius: 8px;
    margin-right: 6px;
    background-color: #414040;
    color: #fff;
}

.btn {
    display: inline-block;
    padding: 10px 16px;
    background-color: #414040;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    margin-top: 12px;
}
</style>