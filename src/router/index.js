// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import ServicePage from '../views/ServicePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { title: 'Главная страница - Мой сайт' },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: { title: 'О нас - Мой сайт' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
    meta: { title: 'Контакты - Мой сайт' },
  },
  {
    path: '/service',
    name: 'service',
    component: ServicePage,
    meta: { title: 'Сервис - Мой сайт' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Глобальный хук afterEach для изменения заголовка
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
