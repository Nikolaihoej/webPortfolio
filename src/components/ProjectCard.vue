<template>
  <div class="card" @mouseenter="showDetailsOnHover" @mouseleave="hideDetailsOnHover">
    <div class="card-inner">
      <div class="image-container">
        <img :src="image" :alt="title">
      </div>
      <div class="content-container">
        <div :class="['details-wrapper', detailsAnimClass]" @animationend="onDetailsAnimationEnd">
          <div v-if="showDetails" class="details-content">
            <h3 class="card-title">{{ title }}</h3>
            <p>{{ description }}</p>
            <!-- <div class="tags">
              <span class="individuel-tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
            </div> -->
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

function showDetailsOnHover() {
  detailsAnimClass.value = 'animate__animated animate__slideInUp';
  showDetails.value = true;
}

function hideDetailsOnHover() {
  detailsAnimClass.value = 'animate__animated animate__slideOutDown';
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
}

.content-container {
  padding: 12px;
  flex-grow: 1;
  display: flex;
  z-index: 2;
}

.details-wrapper {
  --animate-duration: 0.4s;
}

.content-container h3 {
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 600;
}

.content-container p {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
}

.btn {
  display: inline-block;
  padding: 10px 16px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  margin-top: 12px;
  text-transform: uppercase;
  line-height: 1.2em;
  letter-spacing: 2.5px;
  fill: #FFFFFF;
  color: #FFFFFF;
  background-color: #4141418A;
  border: 2px solid #FFFFFFC4;
  border-radius: 2px 2px 2px 2px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #414040;
  border-color: #FFFFFF;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.7);
}

/* .tags {
  margin-top: 8px;
}

.individuel-tag{
  padding: 4px 8px;
  border-radius: 8px;
  margin-right: 6px;
  background-color: #414040;
  color: #fff;
} */
</style>