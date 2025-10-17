<template>
  <div class="tower-tooltip">
    <div class="tooltip-content" :class="`tooltip-${tower}`">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <a class="tooltip-link" :href="link" target="_blank" rel="noopener noreferrer" >Click for more</a>
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: String,
  description: String,
  link: String,
  tower: String
})
</script>

<style scoped>
.tower-tooltip {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 350px;
  height: 335px;
  padding: 16px;
  z-index: 10;
  font-family: 'Catamaran', sans-serif;
  font-weight: 500;
  box-sizing: border-box;
}
.tower-tooltip h1 {
  font-size: 3rem;
  margin-bottom: 0.5em;
  color: #363636;
  
}
.tower-tooltip p {
  font-size: 1.2rem;
  padding-bottom: 18px;
  font-weight: 700;
  color: #363636;
}

.tooltip-content {
  position: relative;

}

.tooltip-mail {
  top: 80%;
  left: 130%;
}
.tooltip-linkedin {
  top: 80%;
  left: 210%;
}
.tooltip-github {
  top: 80%;
  left: 100%;
}

.tooltip-link {
  position: relative;
  display: inline-block;
  padding: 6px 14px;
  background: transparent;
  color: black;
  border: 4px solid #6e6962;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 700;
  transition: border .2s ease-in-out, transform .2s ease-in-out;
}

.tooltip-link:hover {
  border: 4px solid #424242;
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .tower-tooltip {
    z-index: 0;
  }

  .tooltip-content {
  position: absolute;
  z-index: 3;
  scale: 90%;
  top: 90%;
  left: 0;
  }
}

</style>