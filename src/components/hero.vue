<template>
    <div class="hero-container">
        <h1 class="hero-title">Nikolai Jensen</h1>
        <h3 class="hero-subtitle">Web Developer</h3>
    </div>
</template>

<script setup>
</script>

<style scoped>
.hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 100px;
}

.hero-title {
    text-align: center;

    font-weight: 600;
    font-size: 4rem;
    color: #363636;
}

.hero-subtitle {
    text-align: center;

    font-weight: 500;
    font-size: 2rem;
    color: #363636;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }
}
</style>