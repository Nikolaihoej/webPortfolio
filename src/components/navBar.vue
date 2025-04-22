<template>
    <div class="navbar" >
        <div class="navContent">
            <a href="#about" class="nav-link">About me</a>
            <span class="separator">|</span>
            <a href="#projects" class="nav-link">Projects</a>
            <span class="separator">|</span>
            <a href="#experience" class="nav-link">Experience</a>
        </div>
        <div class="navAboutContainer d-flex flex-row">
            <div class="navAbout">
                <h2>HI! Welcome to my Portfolio</h2>
                <p>My name is Nikolai! I'm a Web-developer & Multi-media designer specializing in UI/UX. I create functional, visually appealing web apps with expertise in mock-ups, photo editing, and redesigns. With an AP Degree in Multimedia Design and a PBA in Web Development (Jan 2025), I blend technical skills with a passion for design.</p>
                <div class="contact-box d-flex flex-column"> 
                    <p class="socialsText">Get in Touch:</p>
                    <div class="d-flex justify-content-left">
                        <ContactCircle link="https://www.linkedin.com/in/nikolai-jensen-472577195/" name="Linkedin" iconClass="bi bi-linkedin" style="animation-delay: 1.7;"/>
                        <ContactCircle link="https://github.com/Nikolaihoej" iconClass="bi bi-github" name="Github" style="animation-delay: 1.3s;" />
                        <ContactCircle link="mailto:nikolaihjensen@hotmail.com" iconClass="bi bi-envelope-fill" name="E-mail" style="animation-delay: 1s;" />
                    </div>
                </div>
            </div>
            <div class="navImage">
                <img src="../assets/images/myselftwo.jpg" alt="myself" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<script setup>
import ContactCircle from './contactIconComponent.vue';

</script>

<style scoped>
@keyframes jump {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

@keyframes jump-two {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.contact-box .contact-circle {
    animation: jump 2s infinite;
}

.socialsText {
    font-family: 'JetBrains Mono', sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: bold;

}

.navbar {
    color: #fff;
    min-height: 1000px;
    margin-bottom: 455px;
}

.navContent {
    z-index: 1;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold; 
    margin: 0 10px;
}

.nav-link:hover {
    text-decoration: underline;
}

.separator {
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 18px;
}

.navAboutContainer {
    width: 100%;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.navImage{
    display: flex;
    justify-content: center;
    align-items: center;
}
.navImage img {
    max-width: 455px;
    height: auto;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    animation: jump-two 4s infinite;
}

.navAbout {
    max-width: 45%;
    margin: 20px;
    background-color: #1f1a29;
    padding: 16px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}

.navAbout p {
    color: hsl(0, 0%, 80%);
    font-size: 18px;
    line-height: 2.5rem;
}


@media (max-width: 768px) {
    .navbar {
        margin-bottom: 100px;
    }
    .navAboutContainer {
        flex-direction: column-reverse;
    } 
    .navContent {
        justify-content: space-around;
    }
    .nav-link {
        font-size: 18px; 
        margin: 5px 10px;
    }

    .contact-box {
        align-items: center;
    }

    .navImage img {
        max-width: 70%;
    }

    .navAbout {
        max-width: 90%;
    }
    .navAbout p {
        font-size: 14px;
        line-height: 2rem;
    }
    .responsiveImage {
        max-width: 80%;
    }
    .navImage {
        display: flex;
        margin-top: 25px;
        margin-bottom: 25px;
        justify-content: center;
    }
}
</style>