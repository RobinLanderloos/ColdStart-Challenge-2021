import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/components/page-not-found.vue';
import Login from './views/login.vue';

Vue.use(Router);

export default new Router({


  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/catalog',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import(/* webpackChunkName: "catalog" */ './views/catalog/catalog.vue'),
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});
