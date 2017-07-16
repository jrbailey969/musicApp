import { Artist } from './artist.model';
import { ARTISTS } from './artist.mock-data';

export class ArtistService {
    constructor($http, $window) {
        this.$http = $http;
        this.$window = $window;
        this.artists = ARTISTS.slice(0);
        this.resourceUrl = API_BASE_URL + '/api/artist'; // Constant defined in webpack config files.
    }
    getList() {
        return this.$http({
            method: 'GET',
            url: this.resourceUrl
        }).then(function successCallback(response) {
            return response.data;
        }, this._errorCallback.bind(this));
        //return angular.copy(this.artists);
    }

    getById(id) {
        return this.$http({
            method: 'GET',
            url: this.resourceUrl + '/' + id
        }).then(function successCallback(response) {
            return response.data;
        }, this._errorCallback);
        //return angular.copy(this._getById(id));
    }

    createNew() {
        return new Artist();
    }

    add(artist) {
        let newArtist = angular.copy(artist);
        return this.$http({
            method: 'POST',
            url: this.resourceUrl,
            data: artist
        }).then(function successCallback(response) {
            return response.data;
        }, this._errorCallback);
        //return newArtist;
    }

    update(artist) {
        return this.$http({
            method: 'PUT',
            url: this.resourceUrl + '/' + artist.id,
            data: artist
        }).then(function successCallback(response) {
            return;
        }, this._errorCallback);
        // let existing = this._getById(artist.id);
        // if (existing) {
        //     Object.assign(existing, artist);
        // }
    }

    delete(artist) {
        return this.$http({
            method: 'DELETE',
            url: this.resourceUrl + '/' + artist.id
        }).then(function successCallback(response) {
            return;
        }, this._errorCallback);
        // let existing = this.artists.find(a => a.id === artist.id);
        // if (existing) {
        // let index = this.artists.indexOf(existing);
        // this.artists.splice(index, 1);
        // }
    }

    // Private methods
    // _getById(id) {
    //     return this.artists.find((a) => a.id === id);        
    // }

    // _getNextId() {
    //     let maxId = Math.max(...(this.artists.map(a => parseInt(a.id)).sort()), 0);
    //     return (maxId + 1).toString();
    // }

    _errorCallback(err) {
        this.$window.alert('error' + JSON.stringify(err));

        return err;
    }
}