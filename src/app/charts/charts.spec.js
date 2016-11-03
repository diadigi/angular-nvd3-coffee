import angular from 'angular';
import 'angular-mocks';
import {charts} from './charts';
import {StatService} from '../services/stats/stats';

const chartsJson = [
  {
    title: "Coffee Imports (2014)",
    data: [
      {
        key: "Green Coffee",
        color: "rgb(237,194,64)",
        values: [
          {
            label: "United States",
            value: 24373843
          },
          {
            label: "Canada",
            value: 2806568
          },
          {
            label: "United Kingdom",
            value: 2852738
          }
        ]
      },
      {
        key: "Roasted Coffee",
        color: "rgb(175,216,248)",
        values: [
          {
            label: "United States",
            value: 1348047
          },
          {
            label: "Canada",
            value: 1607997
          },
          {
            label: "United Kingdom",
            value: 711094
          }
        ]
      },
      {
        key: "Soluble Coffee",
        color: "rgb(203,75,75)",
        values: [
          {
            label: "United States",
            value: 1837260
          },
          {
            label: "Canada",
            value: 567436
          },
          {
            label: "United Kingdom",
            value: 1332680
          }
        ]
      }
    ]
  },
  {
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
  }
];

describe('charts component', () => {
  beforeEach(() => {
    angular
      .module('coffeeCharts', ['app/charts/charts.html'])
      .service('statService', StatService)
      .component('coffeeCharts', charts);
    angular.mock.module('coffeeCharts');
  });

  it('should render 2 elements <coffee-chart>', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    $httpBackend.when('GET', '').respond(chartsJson);
    const element = $compile('<coffee-charts></coffee-charts>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const charts = element.find('coffee-chart');
    expect(charts.length).toEqual(2);
  }));

  describe('getChartData', () => {
    let deferred;

    beforeEach(angular.mock.inject(($q, $httpBackend) => {
      deferred = $q.defer();
      $httpBackend.when('GET', '').respond(false);
    }));

    describe('catch', () => {
      let component;

      beforeEach(angular.mock.inject(($rootScope, $componentController) => {
        deferred.reject({});
        component = $componentController('coffeeCharts', {});
        spyOn(component.statService, 'getAll').and.callFake(() => {
          return deferred.promise;
        });

        component.getChartData();
        $rootScope.$apply();
      }));

      it('should result in error', () => {
        expect(component.error).toBeTruthy();
      });
    });
  });
});
