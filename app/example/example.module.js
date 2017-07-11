import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './example.route';
import component from './example.component';
import service from './example.service';

angular
  .module('example', [uirouter])
  .component('example', component)
  .factory('exampleService', service)
  .config(routing);
