import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/core/services/JwtService";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/administrator",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/administrator",
        name: "administrator",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/administrator/funds",
        name: "funds",
        component: () => import("@/views/Funds.vue"),
        meta: {
          pageTitle: "Fund Management",
          breadcrumbs: ["Fund"],
        },
      },
      {
        path: "/administrator/products",
        name: "products",
        component: () => import("@/views/Products.vue"),
        meta: {
          pageTitle: "Products",
          breadcrumbs: ["Products"],
        },
      },
      {
        path: "/administrator/orders",
        name: "orders",
        component: () => import("@/views/Orders.vue"),
        meta: {
          pageTitle: "Orders",
          breadcrumbs: ["Orders"],
        },
      },
      {
        path: "/administrator/adduser",
        name: "adduser",
        component: () => import("@/views/AddUser.vue"),
        meta: {
          pageTitle: "Add User",
          breadcrumbs: ["Add User"],
        },
      },
      {
        path: "/administrator/members",
        name: "members",
        component: () => import("@/views/Members.vue"),
        meta: {
          pageTitle: "Members",
          breadcrumbs: ["Members"],
        },
      },
      {
        path: "/administrator/agents",
        name: "agents",
        component: () => import("@/views/Agents.vue"),
        meta: {
          pageTitle: "Agents",
          breadcrumbs: ["Agents"],
        },
      },
      {
        path: "/administrator/dealers",
        name: "dealers",
        component: () => import("@/views/Dealers.vue"),
        meta: {
          pageTitle: "Dealers",
          breadcrumbs: ["Dealers"],
        },
      },
      {
        path: "/administrator/depot",
        name: "depot",
        component: () => import("@/views/Depot.vue"),
        meta: {
          pageTitle: "Depot",
          broadcrumbs: ["Depot"],
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/administrator/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
        meta: {
          pageTitle: "Sign In",
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/SystemLayout.vue"),
    children: [
      {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/crafted/authentication/Error404.vue"),
        meta: {
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/crafted/authentication/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // current page view title
  document.title = `${to.meta.pageTitle} - ${process.env.VUE_APP_NAME}`;

  // reset config to initial state
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  // verify auth token before each page change
  store.dispatch(Actions.VERIFY_AUTH, { api_token: JwtService.getToken() });

  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (store.getters.isUserAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }

  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

export default router;
