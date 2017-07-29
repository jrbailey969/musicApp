function artistRoutes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/artist');
  $urlRouterProvider.when('/', '/artist');

  $stateProvider
    .state('artists', {
      url: '/artist',
      component: 'artistList',
      requireADLogin: true
    })
    .state('artists.addArtist', {
      url: '/artist/add',
      component: 'artistForm',
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
    .state('artists.artist', {
      url: '/:id',
      component: 'artistForm',
      requireADLogin: true,
      resolve: {
        artistId: function ($stateParams) {
          return $stateParams.id;
        },
        categories: function (categoryService) {
          return categoryService.getList();
        },
        categoryTypeInfo: function (categoryService) {
          return categoryService.getCategoryTypeInfo();
        }
      }
    })
}

export default artistRoutes;
