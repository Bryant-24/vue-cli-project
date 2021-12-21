import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage';
import CardDetailPage from '../views/CardDetailPage';
import SearchPage from '../views/SearchPage';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: HomePage
  },
  {
    path: '/film/:id',
    name: 'Film',
    component: CardDetailPage
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
