(function () {
  'use strict';

  angular
    .module('MenuAppModule')
    .component('items', {
      templateUrl: 'src/module/menuappModule/components/items.component.js',
      bindings: {
        items: '<'
      }
    });

})();
