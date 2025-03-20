<template>
    <div class="aboutBox">
        <section id="about" class="aboutContainer text-white d-flex flex-column flex-md-row justify-content-around align-items-center">
            <h1 class="mt-5 mb-5">About me</h1>
        </section>
        <div class="aboutContent text-white my-3 d-flex flex-column flex-md-row align-items-center">
            <div class="aboutImage d-flex justify-content-end col-md-5">
                <img class="responsiveImage" src="../assets/images/nikologo.png" alt="niko">
            </div>
            <div class="aboutText col-md-5">
                <p class=" lh-lg">
                I've always been a creative person with a passion for design, technology, and problem-solving. My interest in the digital world started with gaming, which led me to explore web development and UI/UX design.
                I specialize in both frontend and backend development, with experience in HTML, CSS, JavaScript, TypeScript, Vue.js, PHP, Laravel, and various databases like MySQL and MongoDB. I also work with CMS platforms like WordPress and have a strong understanding of responsive design and UX/UI principles.
                I enjoy creating intuitive, visually appealing, and functional digital experiences. I'm always eager to learn new technologies and refine my skills. When I'm not working on projects, I spend time drawing, gaming, or experimenting with new ideas in tech.
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>

    .aboutBox {
        background-color: #1f1a29;
        padding-bottom: 100px;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }

    .aboutText {
        max-width: 100%;
        border-left: 5px solid #fff;
        padding: 20px;
        font-size: 18px;
        color: hsl(0, 0%, 80%);
    }

    .aboutImage {
        padding: 20px;
        max-width: 100%;
        height: auto;
    }

    .responsiveImage {
        max-width: 100%;
        height: auto;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }

    @media (max-width: 768px) {
        .aboutContainer {
            margin-top: 25px;
            margin-bottom: 50px;
        }
        .aboutText {
            max-width: 100%;
            font-size: 14px;
            border-left: none;
        }
        .aboutBox {
            padding-bottom: 50px;
        }
        .separator {
            display: none;
        }
    }
</style>