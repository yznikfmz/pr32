children: [
  {
    path: '',
    redirect: to => `/courses/${to.params.id}/description`,
  },
  {
    path: 'description',
    component: () => import('../pages/CourseDescriptionPage.vue'),
  },
  {
    path: 'program',
    component: () => import('../pages/CourseProgramPage.vue'),
  },
  {
    path: 'reviews',
    component: () => import('../pages/CourseReviewsPage.vue'),
  },
]