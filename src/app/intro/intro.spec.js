import angular from 'angular';
import 'angular-mocks';
import {intro} from './intro';

describe('intro component', () => {
  beforeEach(() => {
    angular
      .module('coffeeIntro', ['app/intro/intro.html'])
      .component('coffeeIntro', intro);
    angular.mock.module('coffeeIntro');
  });

  it('should render \'Gotta love coffee...\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<coffee-intro></coffee-intro>')($rootScope);
    $rootScope.$digest();
    const intro = element.find('h1');
    expect(intro.html().trim()).toEqual('Gotta love coffee...');
  }));
});
