<template>
    <div class="contact-circle">
        <a :href="link" target="_blank" rel="noopener noreferrer">
            <i :class="iconClass"></i>
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    link: {
        type: String,
        required: true
    },
    iconClass: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
</script>

<style scoped>
.contact-circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #2f283e;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}

.contact-circle a {
    color: #fff;
    font-size: 30px;
}

.contact-circle a:hover {
    color: #ddd;
}
</style>