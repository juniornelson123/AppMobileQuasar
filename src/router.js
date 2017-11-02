import Vue from 'vue'
import VueRouter from 'vue-router'
import consts from 'consts'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}


const requireAuth = (to, from, next) => {
  if (!localStorage.getItem(consts.consts.loginUser)) {
    // console.log(localStorage.getItem('user'))
    next({
      path: '/auth'
    })
  } else {
    // console.log(localStorage.getItem('user'))
    next()
  }
}


export default new VueRouter({


  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
  {
    path: '/',
    component: load('AppMain'),
    redirect: '/index',
    beforeEnter: requireAuth,
    children: [
      {
        path: 'index',
        name: 'index',
        component: load('app/Main')
      }
    ]
  },
  { 
    path: '/auth', 
    component: load('Auth'),
    redirect: 'auth/entrar',
    children: [
      {
        path: 'entrar',
        name: 'entrar',
        component: load('auth/SignIn')
      },
      {
        path: 'cadastrar',
        name: 'cadastrar',
        component: load('auth/SignUp')
      }
    ]
  },
    { path: '*', component: load('Error404') } // Not found
  ]
})
