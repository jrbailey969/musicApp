import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'ng-tags-input';
import 'ng-tags-input/build/ng-tags-input.min.css';
import 'angularjs-slider';
import 'angularjs-slider/dist/rzslider.min.css';
import routing from './category.route';
import categoryListComponent from './category-list/category-list.component';
import categoryFormComponent from './category-form/category-form.component';
import subjectClassificationComponent from './subject-classification/subject-classification.component';
import { CategoryService } from './shared/category.service';
import './category-form/category-form.component.scss';

angular
  .module('category', [uirouter, 'ngTagsInput', 'rzModule'])
  .component('categoryList', categoryListComponent)
  .component('categoryForm', categoryFormComponent)
  .component('subjectClassification', subjectClassificationComponent)
  .service('categoryService', CategoryService)
  .config(routing);
