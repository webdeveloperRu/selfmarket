const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue") }]
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
