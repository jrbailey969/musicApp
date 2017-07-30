import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './groove.route';
import grooveFormComponent from './groove-form/groove-form.component';
import { ArtistService } from './../artist/shared/artist.service';
import './groove-form/groove-form.component.scss';

angular
  .module('groove', [uirouter])
  .component('grooveForm', grooveFormComponent)
  .service('artistService', ArtistService)
  .config(routing);
