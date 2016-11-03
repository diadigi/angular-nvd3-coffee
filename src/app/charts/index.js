import angular from 'angular';

import {chart} from './chart';
import {charts} from './charts';

export const chartsModule = 'charts';

angular
  .module(chartsModule, [])
  .component('coffeeChart', chart)
  .component('coffeeCharts', charts);
