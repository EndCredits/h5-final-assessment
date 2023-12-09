import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DatabaseView from "../views/DatabaseView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/database",
    component: DatabaseView,
  },
  {
    path: "/about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
