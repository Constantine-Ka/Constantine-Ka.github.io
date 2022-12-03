import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import Forms from "@/views/forms.vue";
import Buttons from "@/views/btn.vue";
import Cards from "@/views/card.vue";
import Loaders from "@/views/loader.vue";
import NavBars from "@/views/navbars.vue";
import NotFound from "@/views/404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/forms",
      name: "Forms",
      component: Forms,
    },
    {
      path: "/card",
      name: "Cards",
      component: Cards,
    },
    {
      path: "/btn",
      name: "Buttons",
      component: Buttons,
    },
    {
      path: "/loaders",
      name: "Loaders",
      component: Loaders,
    },
    {
      path: "/nav",
      name: "NavBars",
      component: NavBars,
    },
    // {
    //   path: "/drawing",
    //   name: "Drawing",
    //   component: Drawing,
    // },
    {
      path: "/:pathMatch(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.name}`;
  next();
});
export default router;
