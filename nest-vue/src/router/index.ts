import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/reg",
    component: () => import("../views/reg.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
