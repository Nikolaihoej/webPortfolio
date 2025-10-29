<template>
  <div class="nav-container">
    <router-link class="btn" to="/">Island</router-link>
    <router-link class="btn" to="/projects">Projects</router-link>
    <router-link class="btn" to="/about">About</router-link>
  </div>
</template>
<script setup></script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: flex-end;
  color: #414040;
  padding: 1rem;
}

.btn {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  color: #363636;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
}

</style>