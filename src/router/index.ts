import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { secureMiddleware } from "@/middlewares/SecureURL.midedleware";
import LoginView from "@/views/auth/LoginView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import ConfigurationsView from "@/views/dashboard/ConfigurationsView.vue";
import StatsView from "@/views/dashboard/StatsView.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/register",
    component: RegisterView,
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "",
        component: StatsView,
      },
      {
        path: "config",
        component: ConfigurationsView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(secureMiddleware);


export default router;
