import angular from 'angular';
import 'angular-mocks';
import {footer} from './footer';

describe('footer component', () => {
  beforeEach(() => {
    angular
      .module('coffeeFooter', ['app/footer/footer.html'])
      .component('coffeeFooter', footer);
    angular.mock.module('coffeeFooter');
  });

  it('should credit \'ICO\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<coffee-footer></coffee-footer>')($rootScope);
    $rootScope.$digest();
    const footer = element.find('a');
    expect(footer.html().trim()).toEqual('ICO');
  }));
});
