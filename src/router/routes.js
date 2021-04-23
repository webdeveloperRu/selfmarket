import { Store } from "../store/index";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/HomePage.vue") },
      {
        path: "/login",
        component: () => import("src/pages/auth/Login.vue")
      },
      {
        path: "/register",
        component: () => import("src/pages/auth/Register.vue")
      },
      {
        path: "/forgot-password",
        component: () => import("src/pages/auth/ForgotPassword.vue")
      },
      {
        path: "/reset-password",
        component: () => import("src/pages/auth/ResetPassword.vue")
      },
      {
        path: "/twofactor-auth",
        component: () => import("src/pages/auth/TwoFactorAuth.vue"),
        beforeEnter: (to, from, next) => {
          if (Store.state.auth.loggedIn) next();
          else next("/login");
        }
      },
      {
        path: "/twofactor-setup",
        component: () => import("src/pages/auth/TwoFactorAuthSetup.vue"),
        beforeEnter: (to, from, next) => {
          if (Store.state.auth.loggedIn) next();
          else next("/login");
        }
      },
      {
        path: "/account-settings",
        component: () => import("src/pages/account/AccountSettings.vue"),
        beforeEnter: (to, from, next) => {
          if (Store.state.auth.loggedIn) next();
          else next("/login");
        }
      },
      {
        path: "/profile",
        component: () => import("src/pages/account/Profile.vue"),
        beforeEnter: (to, from, next) => {
          if (Store.state.auth.loggedIn) next();
          else next("/login");
        }
      },
      {
        path: "/station",
        component: () => import("src/pages/account/Station.vue"),
        beforeEnter: (to, from, next) => {
          if (Store.state.auth.loggedIn) next();
          else next("/login");
        }
      },
      {
        path: "/transfer",
        component: () => import("src/pages/account/Transfer.vue"),
        beforeEnter: (to, from, next) => {
          if (Store.state.auth.loggedIn) next();
          else next("/login");
        }
      },
      {
        path: "/sell",
        component: () => import("src/pages/account/Sell.vue"),
        beforeEnter: (to, from, next) => {
          if (Store.state.auth.loggedIn) next();
          else next("/login");
        }
      },
      {
        path: "/develop",
        component: () => import("src/pages/create/Develop.vue"),
        beforeEnter: (to, from, next) => {
          if (Store.state.auth.loggedIn) next();
          else next("/login");
        }
      },
      {
        path: "/docs",
        component: () => import("src/pages/create/Docs.vue"),
        beforeEnter: (to, from, next) => {
          if (Store.state.auth.loggedIn) next();
          else next("/login");
        }
      },
      {
        path: "/my-collection",
        component: () => import("src/pages/create/MyCollection.vue"),
        beforeEnter: (to, from, next) => {
          if (Store.state.auth.loggedIn) next();
          else next("/login");
        }
      },
      {
        path: "/submit",
        component: () => import("src/pages/create/Submit.vue"),
        beforeEnter: (to, from, next) => {
          if (Store.state.auth.loggedIn) next();
          else next("/login");
        }
      },
      {
        path: "/collection/:id",
        component: () => import("src/pages/Collection.vue")
      },
      {
        path: "/assets/:product_id",
        component: () => import("pages/ProductDetails.vue")
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/SecondaryLayout.vue"),
    children: [
      { path: "/assets", component: () => import("pages/BrowsePage.vue") },

      { path: "/activity", component: () => import("pages/ActivityPage.vue") },
      { path: "/rankings", component: () => import("pages/RankingsPage.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
