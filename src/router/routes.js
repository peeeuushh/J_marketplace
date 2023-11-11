
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import("components/list_grid.vue") },
      { path: '/list', component: () => import("components/grid_list.vue") },
      { path: '/description', component: () => import("components/app_description.vue") },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
