import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
import ngMaterial from 'angular-material';
import 'd3';
import 'nvd3/build/nv.d3';
import nvd3 from 'angular-nvd3';

import {chartsModule} from './app/charts/index';
import routesConfig from './routes';

import {StatService} from './app/services/stats/stats';
import {main} from './app/main/main';
import {header} from './app/header/header';
import {intro} from './app/intro/intro';
import {footer} from './app/footer/footer';

import 'angular-material/angular-material.css';
import 'nvd3/build/nv.d3.min.css';

import './index.scss';

angular
  .module('app', [chartsModule, 'ui.router', ngMaterial, nvd3])
  .config(routesConfig)
  .service('statService', StatService)
  .component('app', main)
  .component('coffeeHeader', header)
  .component('coffeeFooter', footer)
  .component('coffeeIntro', intro);
