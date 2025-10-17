<template>
    <div class="hero-title">Nikolai Jensen</div>
    <div class="hero-subtitle">Frontend Developer</div>
</template>
<script setup></script>

<style scoped>
.hero-title {
    padding-top: 5%;
    font-size: clamp(2.5rem, 8vw, 6rem);
    text-align: center;
    font-family: 'Vollkorn SC', serif;
    font-weight: 500;
    word-break: break-word;
    color: #363636;
}

.hero-subtitle {
    margin-top: -1rem;
    font-size: clamp(1.2rem, 4vw, 2rem);
    text-align: center;
    font-family: 'Catamaran', sans-serif;
    font-weight: 600;
    color: #363636;
}

@media (max-width: 600px) {
    .hero-title {
        padding-top: 2rem;
    }
    .hero-subtitle {
        margin-top: -0.5rem;
    }
}
</style>