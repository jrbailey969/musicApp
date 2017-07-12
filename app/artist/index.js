import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './artist.route';
import artistListComponent from './artist-list/artist-list.component';
import artistFormComponent from './artist-form/artist-form.component';
import { ArtistService } from './shared/artist.service';

angular
  .module('artist', [uirouter])
  .component('artistList', artistListComponent)
  .component('artistForm', artistFormComponent)
  .service('artistService', ArtistService)
  .config(routing);
