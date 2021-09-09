/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import ContactDirectory from "../views/ContactDirectory.vue";

const routes = [
  {
    path: "/",
    name: "ContactDirectory",
    component: ContactDirectory,
  },
  {
    path: "/contacts/:id",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ContactDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
