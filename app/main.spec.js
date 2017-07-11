import 'angular';
import 'angular-ui-router'
import 'angular-mocks/angular-mocks';

var testsContext = require.context(".", true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);

describe('Meaningful Test', () => {
    it('1 + 1 => 2', () => {
        expect(1 + 1).toBe(2);
    });
}); 