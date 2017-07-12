import angular from 'angular';
import uirouter from 'angular-ui-router';
// import example from './example/example.module';
import artist from './artist'

require('./main.scss');

angular.module('app', [
  uirouter,
  // 'example',
  'artist'
]);
