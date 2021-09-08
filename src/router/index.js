/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import ContactDirectory from "../views/ContactDirectory.vue";

const routes = [
  {
    path: "/",
    name: "ContactDirectory",
    component: ContactDirectory,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
