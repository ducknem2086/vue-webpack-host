import { createApp, defineAsyncComponent } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "./App.vue";
const HelloWorld = defineAsyncComponent(() => import('remote1/App'));

const Home = () => import("./components/HelloWorld.vue");

// Types come from env.d.ts's module declaration

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/page1",
  },
  {
    path: "/page1",
    component: HelloWorld,
  },
  {
    path: "/page2",
    component: () => import("./pages/page2.vue"),
  },
  {
    path: "/page3",
    component: () => import("./pages/page3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
