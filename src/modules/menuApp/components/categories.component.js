(function () {
  'use strict';

  angular
    .module('MenuAppModule')
    .component('categories', {
      templateUrl: 'src/module/menuapp/components/categories.component.js',
      bindings: {
        categories: '<'
      }
    });

})();
