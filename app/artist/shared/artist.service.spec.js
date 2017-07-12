import { Artist } from './artist.model';
import { ArtistService } from './artist.service';

describe('ArtistService', () => {
    let artistService;

    beforeEach(() => {
        artistService = new ArtistService();
    });

    it('#getList should get all artists', () => {
        // Act
        let artists = artistService.getList();

        // Assert
        expect(artists).toBeDefined();
        expect(artists.length).toEqual(3);
        expect(artists[0].id).toEqual('1');
        expect(artists[0].name).toEqual('Amy Winehouse');
    });

    it('#getById should return specific artist', () => {
        // Act
        let artist = artistService.getById('2');

        // Assert
        expect(artist).toBeDefined();
        expect(artist.id).toEqual('2');
        expect(artist.name).toEqual('Beastie Boys');
    });

    it('#getById should return null', () => {
        // Act
        let artist = artistService.getById('10');

        // Assert
        expect(artist).not.toBeDefined();
    });
    
    it('#getById should return null', () => {
        // Act
        let artist = artistService.getById('10');

        // Assert
        expect(artist).not.toBeDefined();
    });
    
    it('#add should add artist to list', () => {
        // Arrange
        let artist = {
            id: '101', // value will be ignored when adding
            name: 'James Brown'
        };

        // Act
        artistService.add(artist);

        // Assert
        let result = artistService.getById('4')
        expect(result).toBeDefined();
        expect(result.id).toEqual('4');
        expect(result.name).toEqual(artist.name);
    });

    it('#update should update artist in list', () => {
        // Arrange
        let artist = artistService.getById('1');

        // Act
        artist.name = 'Aimee Whinehouse';
        artistService.update(artist);

        // Assert
        let result = artistService.getById('1')
        expect(result).toBeDefined();
        expect(result.id).toEqual(artist.id);
        expect(result.name).toEqual(artist.name);
    });

    it('#delete should remove artist from list', () => {
        // Arrange
        let artist = artistService.getById('2');

        // Act
        artistService.delete(artist);

        // Assert
        let results = artistService.getList();
        expect(results).toBeDefined();
        expect(results.length).toEqual(2);
        expect(results[0].id).toEqual('1');
        expect(results[1].id).toEqual('3');
    });

    it('#_getNextId should return max id value + 1', () => {
        // Act
        let result = artistService._getNextId();

        // Assert
        expect(result).toEqual('4');
    });

});