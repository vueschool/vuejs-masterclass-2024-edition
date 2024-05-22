import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue')
    },
    {
      // /projects/dfioahiugfdbsiufa
      path: '/projects/:id',
      name: 'single-project',
      component: () => import('@/views/SingleProjectView.vue')
    }
  ]
})

export default router
