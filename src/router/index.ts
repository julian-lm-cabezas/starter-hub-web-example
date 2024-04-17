import { createRouter, createWebHistory } from 'vue-router'
import Base from '@/views/Base.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: {name: 'home'}},
    { path: '/main', component: Base, children: [
      { path: 'home', name: 'home', component: Home },
      { path: 'about', name: 'about', component: About },
    ]},
    { path: "/:pathMatch(.*)*", redirect: {name: 'home'}}
  ]
})

export default router
