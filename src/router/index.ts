import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calc',
      name: 'calculator',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CalcView.vue')
    },
    {
      path: '/learn',
	  redirect: {path: '/learn/introduct'},
      name: 'learner',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LearnView.vue'),
      children: [
        {
          path: 'introduct',
          component: () => import('../views/learnPages/IntroductionView.vue'),
        },
        {
          path: 'strong',
          component: () => import('../views/learnPages/StrongView.vue'),
        },
        {
          path: 'independent',
          component: () => import('../views/learnPages/IndependentView.vue'),
        },
        {
          path: 'linear',
          component: () => import('../views/learnPages/LinearView.vue'),
        },
        {
          path: 'linear2',
          component: () => import('../views/learnPages/Linear2View.vue'),
        },
        {
          path: 'weights',
          component: () => import('../views/learnPages/WeightsView.vue'),
        },
        {
          path: 'weak',
          component: () => import('../views/learnPages/WeakView.vue'),
        },
        {
          path: 'result',
          component: () => import('../views/learnPages/ResultView.vue'),
        },
      ]
    }
  ]
})

export default router
