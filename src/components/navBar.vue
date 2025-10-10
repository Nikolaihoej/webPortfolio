<template>
  <nav class="navRoot" :class="{ rounded: isSticky }" aria-label="Main navigation">
    <div class="navContent">
      <button class="burger" :class="{ open: menuOpen }" @click="toggleMenu" :aria-expanded="menuOpen.toString()" aria-label="Toggle navigation menu">
        <span></span><span></span><span></span>
      </button>
      <div class="sectionLinks horizontal" role="menubar">
        <a v-for="link in links" :key="link.id" href="javascript:void(0)" class="nav-link" :class="{ active: activeSection === link.id }" role="menuitem" @click.prevent="handleNavClick(link.id)">{{ link.label }}</a>
      </div>
      <transition name="side-fade">
        <aside class="sideMenu" v-if="menuOpen" aria-label="Mobile navigation">
          <a v-for="link in links" :key="link.id" href="javascript:void(0)" class="side-link" :class="{ active: activeSection === link.id }" @click.prevent="handleNavClick(link.id)">{{ link.label }}</a>
        </aside>
      </transition>
      <div class="sideMenuOverlay" v-if="menuOpen" @click="closeMenu" aria-hidden="true"></div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About me' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'socials', label: 'Socials' }
]

const isSticky = ref(false)
const activeSection = ref(links[0].id)
const menuOpen = ref(false)
const stickyOffset = 100

function toggleMenu() { menuOpen.value = !menuOpen.value }
function closeMenu() { menuOpen.value = false }

function handleNavClick(id) {
  const el = document.getElementById(id)
  if (el) {
    const nav = document.querySelector('.navRoot')
    const navHeight = nav ? nav.offsetHeight : 0
    const rect = el.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const targetY = rect.top + scrollTop - navHeight - 8
    window.scrollTo({ top: targetY, behavior: 'smooth' })
    activeSection.value = id
    closeMenu()
  }
}

function updateStickyState() { isSticky.value = window.scrollY > stickyOffset }

function updateActiveSection() {
  const nav = document.querySelector('.navRoot')
  const navHeight = nav ? nav.offsetHeight : 0
  let closest = null
  let minDist = Infinity
  links.forEach(link => {
    const el = document.getElementById(link.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      const dist = Math.abs(rect.top - navHeight)
      if (dist < minDist) {
        minDist = dist
        closest = link.id
      }
    }
  })
  if (closest) activeSection.value = closest
}

onMounted(() => {
  window.addEventListener('scroll', updateStickyState, { passive: true })
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateStickyState()
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateStickyState)
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
html { scroll-behavior: smooth; }

.navRoot {
  position: sticky;
  top: 0;
  z-index: 50;
  transition:  background .35s, backdrop-filter .35s, border-radius .35s, box-shadow .35s;
  background: transparent;
  backdrop-filter: none;
  box-shadow: none;
  border-radius: 32px;
  overflow: hidden;
}

/* Sticky, rounded navbar */
.navRoot.rounded {
  background: rgba(31, 26, 41, 0.65);
  backdrop-filter: blur(12px) saturate(1.2);
  box-shadow: 0 2px 24px 0 rgba(0,0,0,0.12);
  border-radius: 32px;
}


.navContent {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 0;
  transition: padding .35s;
  position: relative;
}

.sectionLinks {
  display: flex;
  color: white;
}
.sectionLinks.horizontal {
  flex-direction: row;
  gap: 55px;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
}

/* Links */
.nav-link {
  text-decoration: none;
  color: #fff;
  position: relative;
  transition: color .2s;
  font-size: 1.5rem;
}
.nav-link::after {
  content: '';
  position: absolute;
  border-radius: 4px;
  left: 0;
  bottom: -4px;
  height: 4px;
  width: 0;
  background: currentColor;
  transition: width .26s;
}
.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
.nav-link.active {
  color: #bbb3b3;
  font-weight: 600;
}

/* Burger styles */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 102;
  overflow: visible;
  padding: 0;
  gap: 6px; /* space between lines */
}

.burger span {
  width: 28px;
  height: 3px;
  background: #fff;
  border-radius: 2px;
  transition: all .3s;
  position: relative;
  display: block;
}

.burger.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Side menu styles */
.sideMenu {
  position: fixed;
  top: 0;
  right: 0;
  width: 220px;
  height: 100%;
  background: #1f1a29;
  box-shadow: -2px 0 16px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  padding: 60px 24px 24px 24px;
  z-index: 101;
  gap: 32px;
  opacity: 1;
  transform: translateX(0);
}

.side-fade-enter-active, .side-fade-leave-active {
  transition: transform 0.35s;
}
.side-fade-enter-from, .side-fade-leave-to {
  transform: translateX(100%);
}
.side-fade-enter-to, .side-fade-leave-from {
  transform: translateX(0);
}

.side-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 8px 8px;
  border-radius: 4px;
  transition: background .2s, color .2s;
}
.side-link.active,
.side-link:hover {
  background: #29213a;
  color: #bbb3b3;
}

/* Overlay for side menu */
.sideMenuOverlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.18);
  z-index: 100;
}

/* Responsive styles */
@media (max-width: 900px) {
  .navRoot {
    border-radius: 0;
    width: 100%;
    max-width: 100%;
  }
  .navRoot.rounded {
    background: transparent !important;
    backdrop-filter: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .navContent {
    justify-content: flex-end;

    padding: 18px 0;
  }
  .sectionLinks.horizontal {
    display: none;
  }
  .burger {
    display: flex;
    background-color: #29213a;
    margin-right: 16px;
    border-radius: 6px;
  }
  .burger.open {
    background-color: transparent;
  }
}
</style>