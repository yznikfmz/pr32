import { createRouter, createWebHistory } from 'vue-router'
import CoursesPage from '../pages/CoursesPage.vue'
import CoursePage from '../pages/CoursePage.vue'
import CourseDescriptionPage from '../pages/CourseDescriptionPage.vue'
import CourseProgramPage from '../pages/CourseProgramPage.vue'
import CourseReviewsPage from '../pages/CourseReviewsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/courses' },
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

export default router