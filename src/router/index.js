import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin/Admin.vue'),
  },
  {
    path: '/client',
    name: 'client',
    component: () => import('../views/Client/Client.vue'),
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/Client/Success.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),

  },
  {
    path: '/repay',
    name: 'repay',
    component: () => import('../views/Client/Repay.vue'),

  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestAPI.vue'),
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/', '/login', '/signin','/test'];
  // Yêu cầu quyền khi khác publicPages
  const authRequired = !publicPages.includes(to.path);
  var user = JSON.parse(localStorage.getItem('user'));
  console.log('user',user)
  if (authRequired && to.path !== '/login' && !user?.token) {
    return next('/login');
  }
  next();
})

export default router
