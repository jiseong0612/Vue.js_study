import { createWebHistory, createRouter } from "vue-router";
import JobsView from './view/JobsView.vue'
import NewsView from './view/NewsView.vue'
import AskView from './view/AskView.vue'
import ItemView from './view/ItemView.vue'
import UserView from './view/UserView.vue'

const routes = [
  {
    path: "/",
    redirect: "/news"
  },
  {
    path: "/jobs",
    name : 'jobs',
    component: JobsView,
  },
  {
    path: "/news",
    name : 'news',
    component: NewsView,
  },
  {
    path: "/ask",
    name : 'ask',
    component: AskView,
  },
  {
    path: "/user/:id",
    component: UserView,
  },
  {
    path: "/item/:id",
    component: ItemView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
