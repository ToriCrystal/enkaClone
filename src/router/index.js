import { createRouter, createWebHistory } from 'vue-router'
import users from './users.js'; // Đảm bảo đường dẫn chính xác

const routes = [...users];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
