<template>
    <div class="col-md-4">
      <div class="card mb-4">
        <img :src="project.image" class="card-img-top" :alt="project.title">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ project.description }}</p>
          <a v-if="!project.disabled" :href="project.link" class="btn btn-purp" target="_blank">View Project <i class="bi bi-github"></i></a>
          <span v-else class="btn btn-dark disabled">View Project</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  
  const props = defineProps({
    project: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  

  .card {
    background-color: #1f1a29;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  }
  
  .card p, h5 {
    color: #fff;
  }
  
  .card-img-top {
    height: 200px;
    width: 100%;
    object-fit: cover;
    padding: 18px;
    padding-top: 24px;
  }

  .card-title {
    font-family: 'JetBrains Mono', sans-serif;
  }

  .card-text {
    font-family: 'Inter', sans-serif;
  }

  .btn-purp {
    background-color: #2f283e !important;
    color: #fff;
  }

    .btn-purp:hover {
        background-color: #756696 !important;
    }
  </style>