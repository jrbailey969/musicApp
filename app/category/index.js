import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './category.route';
import categoryListComponent from './category-list/category-list.component';
import categoryFormComponent from './category-form/category-form.component';
import { CategoryService } from './shared/category.service';
import './category-form/category-form.component.scss';

angular
  .module('category', [uirouter])
  .component('categoryList', categoryListComponent)
  .component('categoryForm', categoryFormComponent)
  .service('categoryService', CategoryService)
  .config(routing);
