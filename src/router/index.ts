import { createRouter, createWebHistory } from 'vue-router';

import ShopLayout from '@/modules/shop/layouts/ShopLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tienda',
      component: ShopLayout,
    },
  ],
});

export default router;
