import { createRouter, createWebHashHistory } from 'vue-router'
import ListaL from '@/components/ListaL'
import CrearL from '@/components/CrearL'
import EditarL from '@/components/EditarL'
import MostrarL from '@/components/MostrarL'

const routes = [
  {
    path: '/',
    name: 'ListaL',
    component: ListaL
  },
  {
    path: '/create',
    name: 'CrearL',
    component: CrearL
  },
  {
    path: '/edit/:id',
    name: 'EditarL',
    component: EditarL
  },
  {
    path: '/show/:id',
    name: 'MostrarL',
    component: MostrarL
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
