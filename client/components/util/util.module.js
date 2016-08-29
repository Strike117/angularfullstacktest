'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('angular1test3App.util', [])
  .factory('Util', UtilService)
  .name;
