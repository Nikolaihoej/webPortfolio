<!-- filepath: c:\Users\Nikol\Desktop\Coding\webPortfolio\src\components\about.vue -->
<template>
  <div class="container-fluid g-0" id="about">
    <div class="aboutContent">
      <div class="container">
        <div class="row g-0" @touchstart="onTouchStart" @touchend="onTouchEnd">
          <div class="imageContainer col-lg-5 col-12 mb-4 d-flex justify-content-center">
            <div class="aboutImageWrap position-relative d-flex justify-content-center">
              <div class="ufoBack position-absolute w-100 d-flex justify-content-center" style="z-index:0; bottom:0;">
                <img class="ufoBackImage img-fluid" src="../assets/images/ufoBack.png" alt="UFO Back">
              </div>
              <button class="swipeArrow left" aria-label="Previous" @click="prevOption" type="button">&#8249;</button>
              <button class="swipeArrow right" aria-label="Next" @click="nextOption" type="button">&#8250;</button>
              <img :src="images[displayedOption]" :alt="displayedOption + ' image'" class="aboutImage img-fluid position-relative" :class="imageAnimationClass" style="z-index:1;"/>
              <div class="ufoFront position-absolute w-100 d-flex justify-content-center" style="z-index:2; bottom:0;">
                <img class="ufoFrontImage img-fluid" src="../assets/images/ufoFront.png" alt="UFO Front">
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-12 d-flex flex-column">
            <div class="aboutHeader d-flex flex-row align-items-center justify-content-between mb-5">
              <h3 class="aboutTitle mb-0">About me</h3>
              <h4 class="aboutSubTitle mobileOnly d-block d-md-none">{{ displayedOption }}</h4>
              <div class="aboutNav d-none d-md-flex gap-2">
                <button v-for="option in navOptions" :key="option" class="aboutNavButton btn btn-outline-light" :class="{ active: displayedOption === option, pending: pendingOption === option }" @click="setOption(option)">
                  {{ option }}
                </button>
              </div>
            </div>
            <p class="aboutText" v-html="texts[displayedOption]"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import animMeDrawing from '@/assets/images/animMeDrawing.png'
import animMeNature from '@/assets/images/naturetwo.png'
import animMeGaming from '@/assets/images/animMeGaming.png'
import animMeWorking from '@/assets/images/interesttwo.png'

const navOptions = ['Interest', 'Drawing', 'Nature', 'Gaming']
const displayedOption = ref('Interest')
const imageAnimationClass = ref('')
const touchStartX = ref(0)
const pendingOption = ref(null)

const images = {
  Interest: animMeWorking,
  Drawing: animMeDrawing,
  Nature: animMeNature,
  Gaming: animMeGaming
}
const texts = {
  Interest: `I am a frontend developer with a passion for turning complex problems into simple, user-friendly solutions. What excites me most about this field is the combination of creativity and logic. Whether I am working on design challenges or development tasks, I enjoy finding ways to make digital experiences more intuitive and engaging. I am motivated by the opportunity to help others, to solve challenges, and to keep learning. Beyond my education, internships, and work experience, my personal interests and curiosity have shaped who I am today, both as a person and as a developer. My goal is to continuously grow, refine my skills, and push myself to become a better developer every day.`,
  Drawing: `I have been drawing since childhood, with a strong passion for creativity and visual expression. Over the years, I've explored everything from cartoon and game characters to custom tattoo designs. Drawing is not only something I deeply enjoy. It also sharpens my ability to conceptualize and sketch design ideas. It supports my work in UX/UI and graphic design by helping me quickly visualize concepts, experiment with styles, and explore new creative directions I might not have considered otherwise.`,
  Nature: `Nature has always been an important part of my life and something I truly value. Growing up close to the forest, I spent much of my time outdoors whether it was LARPing, skateboarding, or simply exploring the woods near my childhood home. When I was younger, I also had several pets, including a parakeet, two cats, and a dog. Although they are no longer with me, I hope to have pets again in the future.`,
  Gaming: `In addition to spending a lot of time outdoors and drawing, gaming has also been a significant part of my life. I still remember playing my very first game, Pong, on my father's computer and from that moment, video games became a lasting passion. Over the years, I've explored a wide variety of titles, though I've always been most drawn to MMOs. That said, I've also enjoyed my fair share of single-player adventures. I started out as a dedicated PlayStation gamer in my early years, but with the release of World of Warcraft, I fully transitioned to PC and have been ever since.`
}

const setOption = (option) => {
  if (option === displayedOption.value) return
  pendingOption.value = option
  imageAnimationClass.value = 'fadeOutDown'
  setTimeout(() => {
    displayedOption.value = option
    imageAnimationClass.value = 'fadeInUp'
    setTimeout(() => {
      imageAnimationClass.value = ''
      pendingOption.value = null
    }, 400)
  }, 400)
}

const nextOption = () => {
  const i = navOptions.indexOf(displayedOption.value)
  setOption(navOptions[(i + 1) % navOptions.length])
}

const prevOption = () => {
  const i = navOptions.indexOf(displayedOption.value)
  setOption(navOptions[(i - 1 + navOptions.length) % navOptions.length])
}

const onTouchStart = (e) => {
  if (e.changedTouches?.length) {
    touchStartX.value = e.changedTouches[0].clientX
  }
}
const onTouchEnd = (e) => {
  if (!e.changedTouches?.length) return
  const dx = e.changedTouches[0].clientX - touchStartX.value
  if (Math.abs(dx) < 40) return
  dx < 0 ? nextOption() : prevOption()
}
</script>

<style scoped>
.aboutContent {
  background: var(--secondary-bg);
  position: relative;
  z-index: 10;
  height: 800px;
  padding-top: 190px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  transform: translateY(-14%);
}

.aboutImageWrap {
  position: relative;
  top: -70px;
  width: 100%;
  max-width: 422px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: ufo-hover 5s cubic-bezier(0.45,0,0.55,1) infinite;
}

@keyframes ufo-hover {
  0%,100% { transform: translateY(0) rotate(-2deg) scale(1);}
  20%,80% { transform: translateY(-10px) rotate(2deg) scale(1.02);}
  50%     { transform: translateY(-18px) rotate(-2deg) scale(1.01);}
}

.ufoBack, .ufoFront {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  pointer-events: none;
}
.ufoBack { z-index: 0; transform: translate(-62px,160px);}
.ufoFront { z-index: 2; transform: translate(-62px,160px);}

.ufoBackImage, .ufoFrontImage, .aboutImage {
  width: 100%;
  max-width: 422px;
  height: auto;
  display: block;
}

.aboutImage {
  position: relative;
  z-index: 1;
}

.fadeInUp    { animation: fadeInUp 0.4s; }
.fadeOutDown { animation: fadeOutDown 0.4s; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(50px);}
  to   { opacity: 1; transform: none;}
}
@keyframes fadeOutDown {
  from { opacity: 1; transform: none;}
  to   { opacity: 0; transform: translateY(50px);}
}

.aboutTitle {
  font-size: 2.5rem;
  color: var(--text-main);
  margin: 0;
}
.aboutText {
  color: var(--text-main);
  font-size: 1.2rem;
  line-height: 1.6;
}
.aboutHeader {
  width: 100%;
}
.aboutNavButton {
  opacity: 0.5;
  transition: color 0.2s, background 0.2s, opacity 0.2s;
  font-weight: 600;
  border: 4px solid var(--text-main);
}
.aboutNavButton:hover,
.aboutNavButton.pending,
.aboutNavButton.active {
  background: var(--text-main) !important;
  color: var(--text-hover) !important;
  opacity: 0.85;
}

.aboutSubTitle {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: opacity .3s;
}
.mobileOnly { display: none; }

.swipeArrow {
  position: absolute;
  top: 45%;
  background: transparent;
  border: none;
  color: var(--text-main);
  font-size: 2.6rem;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding: 0;
}
.swipeArrow.left { left: -20px; }
.swipeArrow.right { right: -20px; }

@media (max-width: 900px) {
  .aboutContent {
    min-height: 480px;
    padding-top: 24px;
    height: auto;
    transform: none;
  }
  .aboutHeader {
    justify-content: center !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center;
    gap: 0.5rem;
    margin-bottom: 12px !important;
  }
  .aboutTitle, .aboutSubTitle {
    width: 100%;
    text-align: center;
    display: block;
  }
  .aboutText {
    font-size: 1rem;
    line-height: 1.8;
    padding: 10px;
  }
  .swipeArrow { display: flex; }
  .aboutNav { display: none !important; }
  .mobileOnly { display: block !important; }
  .imageContainer { margin-bottom: 34% !important; }
  .aboutImageWrap {
    max-width: 80%;
    animation: none;
    top: 0;
  }
  .aboutImage { width: 80%; }
  .ufoBack, .ufoFront { transform: translate(-8px,108px);}
}
</style>