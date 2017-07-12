import example from './example.module';

describe('Service: ExampleService', function() {
  let exampleService;

  beforeEach(() => { 
      angular.mock.module('example', function($provide) {
        $provide.provider('$state', function() {
            this.$get = function() {
                return { current: { name: 'test' } };
            } 
        });
      }); 
    });


  beforeEach(inject(function(_exampleService_) {
    exampleService = _exampleService_;
  }));

  it('title is test', function() {
    let title = exampleService.title();
    expect(title).toBe('test');
  });
});