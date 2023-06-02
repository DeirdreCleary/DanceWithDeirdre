import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import FaqPage from "../views/FaqPage.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import FourOhFour from "../views/FourOhFour.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/faq",
    name: "Frequently Asked Questions",
    component: FaqPage
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/:pathMatch(.*)*",
    name: "FourOhFour",
    component: FourOhFour
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
