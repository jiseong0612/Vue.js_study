import { createWebHistory, createRouter } from "vue-router";
import BoardList from './components/BoardList.vue';
import BoardWrite from './components/BoardWrite.vue'
import BoardDetail from './components/BoardDetail.vue';
// import App from './App.vue';
const routes = [
  {
    path:  "/board/:id",
    component:  BoardDetail,
    props: true 
  },
  {
    path: "/board",
    component: BoardWrite,
  },
  {
    path: "/board/page/:page",
    component: BoardList,
  },
  {
    path: "/",
    component: BoardList,
  },
  // {
  //   path: "/board",
  //   component: App,
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
