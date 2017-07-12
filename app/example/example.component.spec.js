import example from './example.module';

describe('Component: ExampleComponent', function() {
  let element, scope;

  beforeEach(() => { 
      angular.mock.module('example', function($provide) {
        $provide.provider('$state', function() {
            this.$get = function() {
                return { current: { name: 'test' } };
            } 
        });
      }); 
    });

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    let $compile = _$compile_;
    let $rootScope = _$rootScope_;

    scope = $rootScope.$new();

    element = angular.element('<example></example>');

    $compile(element)(scope);

  }));    

  it('it should display state name', function() {
    scope.$digest();
    expect(element.text()).toContain('test');
  });
});