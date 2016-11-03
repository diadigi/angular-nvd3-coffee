import angular from 'angular';
import 'angular-mocks';
import {main} from './main';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('app', ['app/main/main.html'])
      .component('app', main);
    angular.mock.module('app');
  });

  it('should render the header, title, charts and footer', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('coffee-header').length).toEqual(1);
    expect(element.find('coffee-intro').length).toEqual(1);
    expect(element.find('coffee-charts').length).toEqual(1);
    expect(element.find('coffee-footer').length).toEqual(1);
  }));
});
