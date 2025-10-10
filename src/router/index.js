import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import navBar from '@/components/navBar.vue'
import projects from '@/components/projects.vue'
import about from '@/components/about.vue'
import experience from '@/components/experience.vue'
import heroComponent from '@/components/heroComponent.vue'
import socials from '@/components/socials.vue'
import BlogPost from '@/components/blogpost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/heroComponent',
      name: 'heroComponent',
      component: heroComponent
    },
    {
      path: '/navBar',
      name: 'navbar',
      component: navBar
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/blog/:id',
      name: 'blogpost',
      component: BlogPost
    },
    {
      path: '/experience',
      name: 'experience',
      component: experience
    },
    {
      path: '/socials',
      name: 'socials',
      component: socials
    }

  ]
})

export default router
