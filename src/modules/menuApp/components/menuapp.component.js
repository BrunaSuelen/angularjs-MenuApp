(function () {
  'use strict';

  angular
    .module('MenuAppModule')
    .component('menuapp', {
      templateUrl: 'src/module/menuapp/template/menuapp.template.html',
      bindings: {
        items: '<'
      }
    });

})();
