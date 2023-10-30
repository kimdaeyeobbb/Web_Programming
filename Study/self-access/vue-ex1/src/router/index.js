import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataBinding from "../views/DataBinding.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/request",
    name: "request",
    component: () => import("../views/RequestView.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    // component: () => import("../views/DataBinding.vue"),
    component: DataBinding,
  },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: () => import("../views/DataBindingHtml.vue"),
  },
  {
    path: "/methodex1",
    name: "methodex1",
    component: () => import("../views/MethodEx1.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
