import { Category } from './category.model';
import { Tag } from './tag.model';
import { CATEGORY_TYPE_INFO } from './categoryTypes.data';

export class CategoryService {
    constructor($http, $window, $q) {
        this.$http = $http;
        this.$window = $window;
        this.$q = $q;
        this.resourceUrl = API_BASE_URL + '/api/ClassificationCategory'; // Base URL constant defined in webpack config files.
    }
    getList() {
        return this.$http({
            method: 'GET',
            url: this.resourceUrl
        }).then(function successCallback(response) {
            return response.data;
        }, this._errorCallback.bind(this));
    }

    getById(id) {
        return this.$http({
            method: 'GET',
            url: this.resourceUrl + '/' + id
        }).then(function successCallback(response) {
            return response.data;
        }, this._errorCallback);
    }

    getCategoryTypeInfo() {
        return this.$q.when(CATEGORY_TYPE_INFO);
    }

    createNew() {
        return new Category();
    }

    createNewTag() {
        return new Tag();
    }

    add(category) {
        let newCategory = angular.copy(category);
        return this.$http({
            method: 'POST',
            url: this.resourceUrl,
            data: category
        }).then(function successCallback(response) {
            return response.data;
        }, this._errorCallback);
    }

    update(category) {
        return this.$http({
            method: 'PUT',
            url: this.resourceUrl + '/' + category.id,
            data: category
        }).then(function successCallback(response) {
            return;
        }, this._errorCallback);
    }

    delete(category) {
        return this.$http({
            method: 'DELETE',
            url: this.resourceUrl + '/' + category.id
        }).then(function successCallback(response) {
            return;
        }, this._errorCallback);
    }

    _errorCallback(err) {
        this.$window.alert('error' + JSON.stringify(err));

        return err;
    }
}