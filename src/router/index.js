import { createRouter, createWebHistory } from 'vue-router'

import Island from '../components/Island.vue'
import Projects from '../components/Projects.vue'
import About from '../components/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'island',
      component: Island
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
