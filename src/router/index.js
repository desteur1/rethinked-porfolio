import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundPage from "@/components/NotFoundPage.vue";
import ContactForm from "@/components/ContactForm.vue";
import { scrollToTop } from "@/utils/scroll";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFoundPage",
      component: NotFoundPage,
    },
    {
      path: "/ContactForm",
      name: "ContactForm",
      component: ContactForm,
    },
  ],
  //  i state my direction and behavior within my page here and call it in my router-link in app.vue. Note, this is for within the page. To scroll to the top of the page i gotta create a file call scroll.js in which i write my scrollToTop function
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      scrollToTop;
    }
  },
});

export default router;
