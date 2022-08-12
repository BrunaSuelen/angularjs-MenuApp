(function () {
  'use strict';

  angular
    .module('MenuAppModule')
    .component('categories', {
      templateUrl: 'src/modules/menuappModule/template/categories.template.html',
      bindings: {
        categories: '<'
      }
    });

})();
