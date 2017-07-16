import angular from 'angular';
import uirouter from 'angular-ui-router';
//import adal from 'adal-angular';
//import adalAngular from './../node_modules/adal-angular/dist/adal-angular.min'
import 'ng-ui-router-state-events';
import bootstraploader from 'bootstrap-loader'; 
import artist from './artist'

require('./main.scss');

let app = angular.module('app', [
  uirouter,
  'AdalAngular',
  'ui.router.state.events',
  // 'example',
  'artist'
]);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
}]);


app.config(['$httpProvider', 'adalAuthenticationServiceProvider', function ($httpProvider, adalProvider) {

    var endpoints = {
        "https://musicappapi20170705.azurewebsites.net/": "c24ae069-4436-45f7-b582-7d3da0d885da"
    };

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/',
            tenant: 'jimbtuneshotmail.onmicrosoft.com',
            clientId: 'c24ae069-4436-45f7-b582-7d3da0d885da',
            extraQueryParameter: 'nux=1',
            endpoints: endpoints
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
    );

    window.Logging.level = 3;
    window.Logging.log = function (msg) {
      console.log(msg);
    }
}]);

app.controller('homeCtrl', ['$scope', 'adalAuthenticationService','$location', function ($scope, adalService, $location) {
    $scope.login = function () {
        adalService.login();
    };
    $scope.logout = function () {
        adalService.logOut();
    };
    $scope.isActive = function (viewLocation) {        
        return viewLocation === $location.path();
    };
}]);
      