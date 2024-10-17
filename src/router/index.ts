import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "@/views/auth/LoginView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import ConfigurationsView from "@/views/dashboard/ConfigurationsView.vue";
import StatsView from "@/views/dashboard/StatsView.vue";
import DashboardView from "@/views/DashboardView.vue";
import HomeView from "@/views/HomeView.vue";

const publicPages = ["/login", "/register", "/"];
const invitePages = ["/login", "/register"];

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
    component: DashboardView,
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

router.beforeEach((to, from, next) => {
  const authRequired = !publicPages.includes(to.path);
  const onlyInvite = invitePages.includes(to.path);
  const loggedIn = localStorage.getItem("vUserSessionToken");

  if (to.path !== "/login" && authRequired && !loggedIn) {
    return next({ path: "/login" });
  } else if (to.path !== "/dashboard" && onlyInvite && loggedIn) {
    return next({ path: "/dashboard" });
  }
  next();
});

export default router;
