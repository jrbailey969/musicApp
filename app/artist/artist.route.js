function artistRoutes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/artist');
  $urlRouterProvider.when('/', '/artist');

  $stateProvider
    .state('artists', {
      url: '/artist',
      component: 'artistList'
    })
    .state('artists.addArtist', {
      url: '/artist/add',
      component: 'artistForm'
    })
    .state('artists.artist', {
      url: '/:id',
      component: 'artistForm',
      resolve: {
        artistId: function ($stateParams) {
          return $stateParams.id;
        }
      }
    })
}

export default artistRoutes;
