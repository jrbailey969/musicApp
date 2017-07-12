import angular from 'angular';
import uirouter from 'angular-ui-router';
import bootstraploader from 'bootstrap-loader'; 
import artist from './artist'

require('./main.scss');

angular.module('app', [
  uirouter,
  // 'example',
  'artist'
]);
