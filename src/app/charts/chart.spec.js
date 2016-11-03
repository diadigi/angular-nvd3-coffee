import angular from 'angular';
import 'angular-mocks';
import {chart} from './chart';

describe('chart component', () => {
  beforeEach(() => {
    angular
      .module('coffeeChart', ['app/charts/chart.html'])
      .component('coffeeChart', chart);
    angular.mock.module('coffeeChart');
  });

  it('should render Total Coffee Consumption (2014)', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    $scope.fixture = {
      title: "Total Coffee Consumption (2014)",
      data: [
        {
          color: "rgb(82, 179, 126)",
          values: [
            {
              label: "United States",
              value: 23800000
            },
            {
              label: "Canada",
              value: 3900000
            },
            {
              label: "United Kingdom",
              value: 3600000
            }
          ]
        }
      ]
    };

    const element = $compile('<coffee-chart chart="fixture"></coffee-chart>')($scope);
    $scope.$digest();
    const chart = element.find('md-card-title-text');
    expect(chart.text().trim()).toEqual('Total Coffee Consumption (2014)');
  }));
});
