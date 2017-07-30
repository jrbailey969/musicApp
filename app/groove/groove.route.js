function grooveRoutes($stateProvider) {

  $stateProvider
    .state('groove', {
      url: '/groove',
      component: 'grooveForm',
      requireADLogin: true,
      resolve: {
        categories: function (categoryService) {
          return categoryService.getList();
        },
        categoryTypeInfo: function (categoryService) {
          return categoryService.getCategoryTypeInfo();
        }
      }
    })
}

export default grooveRoutes;
