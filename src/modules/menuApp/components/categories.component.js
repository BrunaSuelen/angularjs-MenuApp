(function () {
  'use strict';

  angular
    .module('MenuAppModule')
    .component('categories', {
      templateUrl: 'src/modules/menuapp/template/categories.template.html',
      bindings: {
        categories: '<'
      }
    });

})();
