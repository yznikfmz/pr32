import { createRouter, createWebHistory } from 'vue-router'
import CoursesPage from '../pages/CoursesPage.vue'
import CoursePage from '../pages/CoursePage.vue'
import CourseDescriptionPage from '../pages/CourseDescriptionPage.vue'
import CourseProgramPage from '../pages/CourseProgramPage.vue'
import CourseReviewsPage from '../pages/CourseReviewsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
        {
      path: '/:pathMatch(.*)*',
      component: () => import('../pages/NotFoundPage.vue'),
    },
    { path: '/', redirect: '/courses' },
        {
      path: '/login',
      component: () => import('../pages/LoginPage.vue'),
      meta: { guestOnly: true },
    },
    {
      path: '/dashboard',
      component: () => import('../pages/DashboardPage.vue'),
      meta: { requiresAuth: true },
    },
    { path: '/courses', component: CoursesPage },
    {
      path: '/courses/:id',
      component: CoursePage,
      children: [
        {
          path: '',
          redirect: to => `/courses/${to.params.id}/description`,
        },
        { path: 'description', component: CourseDescriptionPage },
        { path: 'program', component: CourseProgramPage },
        { path: 'reviews', component: CourseReviewsPage },
      ],
    },
  ],
})
router.beforeEach((to) => {
  const isLoggedIn = Boolean(localStorage.getItem('authToken'))

  if (to.meta.requiresAuth && !isLoggedIn) {
    return {
      path: '/login',
      query: { redirect: to.fullPath },
    }
  }

  if (to.meta.guestOnly && isLoggedIn) {
    return '/dashboard'
  }
})
export default router
