// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import(/* webpackChunkname: 'list' */ '../App.vue'),
  },
  {
    path: '/details', // THEN, YOU WILL HAVE TO CHANGE THIS FOR A PARAM!
    name: 'details',
    component: () => import(/* webpackChunkName: 'details' */ '../components/CountryDetails.vue')
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;