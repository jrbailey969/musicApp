function categoryRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('categories', {
      url: '/category',
      component: 'categoryList',
      requireADLogin: true
    })
    .state('categories.addCategory', {
      url: '/category/add',
      component: 'categoryForm',
      requireADLogin: true
    })
    .state('categories.category', {
      url: '/:id',
      component: 'categoryForm',
      requireADLogin: true,
      resolve: {
        categoryId: function ($stateParams) {
          return $stateParams.id;
        }
      }
    })
}

export default categoryRoutes;
