import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bookmarks',
      component: () => import('@/routs/Bookmarks'),
    },
    {
      path: '/add/:id',
      name: 'add',
      component: () => import('@/routs/Add'),
    },
  ],
});
