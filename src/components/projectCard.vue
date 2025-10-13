<template>
  <div class="card-wrap" @mousemove="handleMouseMove" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" ref="card">
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <h1>{{ project.title }}</h1>
          <p>
            <span class="bold" v-if="project.highlightText"> {{ project.highlightText }}</span>
          </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const card = ref(null);
const width = ref(0);
const height = ref(0);
const mouseX = ref(0);
const mouseY = ref(0);
let mouseLeaveDelay = null;

onMounted(() => {
  width.value = card.value.offsetWidth;
  height.value = card.value.offsetHeight;
});

const mousePX = computed(() => mouseX.value / width.value);
const mousePY = computed(() => mouseY.value / height.value);

const cardStyle = computed(() => {
  const rX = mousePX.value * 30;
  const rY = mousePY.value * -30;
  return {
    transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
  };
});

const cardBgTransform = computed(() => {
  const tX = mousePX.value * -40;
  const tY = mousePY.value * -40;
  return {
    transform: `translateX(${tX}px) translateY(${tY}px)`,
  };
});

const cardBgImage = computed(() => ({
  backgroundImage: `url(${props.project.image})`,
}));

function handleMouseMove(e) {
  if (!card.value) return;
  const rect = card.value.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left - width.value / 2;
  mouseY.value = e.clientY - rect.top - height.value / 2;
}
function handleMouseEnter() {
  clearTimeout(mouseLeaveDelay);
}
function handleMouseLeave() {
  mouseLeaveDelay = setTimeout(() => {
    mouseX.value = 0;
    mouseY.value = 0;
  }, 1000);
}

</script>

<style scoped>

.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  position: relative;   /* Add this */
  z-index: 0;
  cursor: pointer;
  
}

.card {
  position: relative;
  flex: 0 0 380px;
  width: 380px;
  height: 440px;
  background-color: transparent;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.281), 0 1.5px 6px 0 rgba(0, 0, 0, 0.267), inset #333 0 0 0 1.5px, inset rgba(255, 255, 255, 0.13) 0 0 0 2px;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  flex-shrink: 0;
  z-index: 0;
}

.card-bg {
  opacity: 1;
  position: absolute;
  top: -20px;
  left: -20px;
  width: calc(100% + 40px);
  height: calc(100% + 40px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
  z-index: 1;
}

.card-bg::after {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(30, 30, 30, 0.329); /* adjust opacity for more/less grey */
  pointer-events: none;
  z-index: 2;
}

.card-info {
  padding: 18px;
  position: absolute;
  bottom: 0;
  color: var(--text-main);
  transform: translateY(10%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 100%;
  z-index: 2;
  min-height: 100px;
}
.card-info p {
  opacity: 0;
  text-shadow: rgba(0,0,0,1) 0 2px 3px;
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 1;
  font-size: 1.2rem;
}
.card-info h1 {
  font-size: 24px;
  font-weight: 600;
  
}
.card-info * {
  position: relative;
}

.card-info a {
  z-index: 4;
}
.card-info:after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.753) 100%);
  opacity: 0;
  transform: translateY(100%);
  transition: 2s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-wrap:hover .card-info {
  transform: translateY(0);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.card-wrap:hover .card-info p {
  opacity: 1;
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.card-wrap:hover .card-info:after {
  opacity: 1;
  transform: translateY(0);
  transition: 2s cubic-bezier(0.23, 1, 0.32, 1);
}
.card-wrap:hover .card-bg {
  opacity: 0.8;
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
}
.card-wrap:hover .card {
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.336), 0 2px 8px 0 rgba(0, 0, 0, 0.329), inset #333 0 0 0 2px, inset #fff 0 0 0 2.5px;
  transition: 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 1s cubic-bezier(0.23, 1, 0.32, 1);
}

.bold {
  font-weight: bold;
}

@media (max-width: 900px) {
  .card {
    width: 332px;
  }
  .card-wrap {
    margin: 8px 0 8px 0;
  }

}  
</style>