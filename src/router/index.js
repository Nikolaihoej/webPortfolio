import { createRouter, createWebHistory } from 'vue-router'
import navBar from '../components/navBar.vue'
import projects from '../components/projects.vue'
import about from '../components/about.vue'
import experience from '../components/experience.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/navBar',
      name: 'navbar',
      component: navBar
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/experience',
      name: 'experience',
      component: experience
    }
  ]
})

export default router
