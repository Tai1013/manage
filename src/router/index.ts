import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE),
  routes,
  scrollBehavior () {
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach(() => {})

export default router
