import { Artist } from './artist.model';
import { ARTISTS } from './artist.mock-data';

export class ArtistService {
    constructor() {
        this.artists = ARTISTS.slice(0);
    }
    getList() {
        return angular.copy(this.artists);
    }

    getById(id) {
        return angular.copy(this._getById(id));
    }

    createNew() {
        return new Artist();
    }

    add(artist) {
        let newArtist = angular.copy(artist);
        newArtist.id = this._getNextId();
        this.artists.push(newArtist);

        return newArtist;
    }

    update(artist) {
        let existing = this._getById(artist.id);
        if (existing) {
            Object.assign(existing, artist);
        }
    }

    delete(artist) {
        let existing = this.artists.find(a => a.id === artist.id);
        if (existing) {
        let index = this.artists.indexOf(existing);
        this.artists.splice(index, 1);
        }
    }

    // Private methods
    _getById(id) {
        return this.artists.find((a) => a.id === id);        
    }

    _getNextId() {
        let maxId = Math.max(...(this.artists.map(a => parseInt(a.id)).sort()), 0);
        return (maxId + 1).toString();
    }
}