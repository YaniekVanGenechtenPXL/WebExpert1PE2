import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Overzicht from '../views/OverzichtView.vue'
import Detail from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/shop', component: Overzicht},
    { path: '/detail', component: Detail},
    { path: "/:notFound(.*)", component: Home}
  ]
})

export default router