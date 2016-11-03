import angular from 'angular';
import 'angular-mocks';
import {header} from './header';

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('coffeeHeader', ['app/header/header.html'])
      .component('coffeeHeader', header);
    angular.mock.module('coffeeHeader');
  });

  it('should render \'We ♥ Coffee\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<coffee-header></coffee-header>')($rootScope);
    $rootScope.$digest();
    const header = element.find('h2');
    expect(header.html().trim()).toEqual('We ♥ Coffee');
  }));
});
