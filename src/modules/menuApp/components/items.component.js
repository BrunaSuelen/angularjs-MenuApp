(function () {
  'use strict';

  angular
    .module('MenuAppModule')
    .component('items', {
      templateUrl: 'src/module/menuapp/components/items.component.js',
      bindings: {
        items: '<'
      }
    });

})();
