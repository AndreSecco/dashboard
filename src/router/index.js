import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home/HomeComponent.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../pages/Sobre/SobreComponent.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:() => import('../pages/Login/LoginComponent.vue')
  },
  {
    path: '/produtos',
    name: 'produtos',
    component:() => import('../pages/Produtos/ProdutosComponents.vue')
  },
  {
    path: '/clientes',
    name: 'clientes',
    component:() => import('../pages/Clientes/ClientesComponents.vue')
  },
  {
    path: '/vendas',
    name: 'vendas',
    component:() => import('../pages/Vendas/VendasComponents.vue')
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    component:() => import('../pages/Relatorios/RelatoriosComponents.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
