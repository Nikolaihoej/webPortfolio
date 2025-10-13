<!-- filepath: c:\Users\Nikol\Desktop\Coding\webPortfolio\src\components\heroComponent.vue -->
<template> 
  <div class="heroContainer container-fluid position-relative overflow-hidden py-5" id="home">
    <div class="heroBlob"></div>
    <div class="heroBlobSmall"></div>
    <div class="container">
      <div class="row align-items-center flex-lg-row flex-column-reverse g-4">
        <div class="col-lg-6 col-12 d-flex flex-column justify-content-center">
          <div class="heroText"><h2>Hey, I am <br/> Nikolai Jensen <br/>Web Developer</h2>
            <p class="heroDescription"> Trying my best to blend <span class="highlightWord">creativity</span><br /> And <span class="highlightWord">technology</span> into <span class="highlightWord">intuitive</span> digital <span class="highlightWord">experiences</span> That <span class="highlightWord">solve problems</span> and make <span class="highlightWord">simple solutions</span></p>
          </div>
        </div>
        <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center heroImage">
          <img src="../assets/images/heroImageb.png" alt="Hero Image" class="img-fluid d-none d-lg-block" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.heroContainer {
  position: relative;
  z-index: 1;
  width: 100%;
}

.heroBlob {
  position: absolute;
  top: 30%;
  right: 30%;
  width: 450px;
  height: 450px;
  background: linear-gradient(135deg, #756696 60%, #6a6adf 100%);
  filter: blur(60px);
  border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
  animation: sliderShape 18s linear infinite;
  z-index: -1;
  opacity: 0.85;
  pointer-events: none;
}

.heroBlobSmall {
  position: absolute;
  top: 24%;
  right: 24%;
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, #6a6adf 60%, #e52eb7 100%);
  filter: blur(40px);
  border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
  animation: sliderShapeSmall 24s linear infinite;
  z-index: -1;
  opacity: 0.7;
  pointer-events: none;
}

@keyframes sliderShape {
  0%,100% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0,0,0) rotateZ(0.01deg);
  }
  34% {
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform: translate3d(0,5px,0) rotateZ(0.01deg);
  }
  50% {
    transform: translate3d(0,0,0) rotateZ(0.01deg);
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    transform: translate3d(0,-3px,0) rotateZ(0.01deg);
  }
}

@keyframes sliderShapeSmall {
  0%,100% {
    border-radius: 50% 50% 60% 40% / 50% 60% 40% 50%;
    transform: translate3d(0,0,0) rotateZ(0.01deg);
  }
  34% {
    border-radius: 60% 40% 50% 50% / 40% 50% 60% 50%;
    transform: translate3d(0,3px,0) rotateZ(0.01deg);
  }
  50% {
    transform: translate3d(0,0,0) rotateZ(0.01deg);
  }
  67% {
    border-radius: 80% 60% 60% 80% / 80% 80% 60% 60%;
    transform: translate3d(0,-2px,0) rotateZ(0.01deg);
  }
}

.heroDescription {
  color: var(--text-secondary);
  font-size: 1.5rem;
  line-height: 2.2rem;
  margin-bottom: 20px;
}

.highlightWord {
  transition: opacity 0.2s;
  color: var(--text-main);
  font-weight: 600;
}

.heroText h2 {
  color: var(--text-main);
  font-size: 4rem;
  margin-bottom: 12px;
  line-height: 1.15;
}

.heroImage img {
  height: auto;
  position: relative;
  z-index: 1;
  animation: fadein 4s;
}

@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@media (max-width: 900px) {
  .heroContainer {
    padding-top: 10vh;
  }
  .heroBlob {
    width: 100px;
    height: 100px;
    right: 55%;
    top: 50%;
    filter: blur(30px);
  }
  .heroBlobSmall {
    width: 50px;
    height: 50px;
    right: 30%;
    top: 35%;
    filter: blur(20px);
  }

  .heroImage img {
    display: none;
  }

  .heroText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }

  .heroText h2 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  
  .heroDescription {
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin-bottom: 10px;
  }
}
</style>