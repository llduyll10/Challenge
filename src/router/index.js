import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{breadCrumb: "Home"},
    component: () => import('../views/Home.vue'),
  },

  {
    path: '/test',
    name: 'test',
    meta:{breadCrumb: "Test"},
    component: () => import('../views/TestAPI.vue'),

  },
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/', '/login', '/signin'];
//   // Yêu cầu quyền khi khác publicPages
//   const authRequired = !publicPages.includes(to.path);
//   var user = JSON.parse(localStorage.getItem('user'));
//   console.log('user',user)
//   if (authRequired && to.path !== '/login' && !user.token) {
//     return next('/login');
//   }
//   next();
// })

export default router
