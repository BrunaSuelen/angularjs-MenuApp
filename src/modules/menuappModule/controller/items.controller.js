(function () {
  'use strict';

  angular
    .module('DataModule')
    .controller('ItemsController', ItemsController)


    ItemsController.$inject = ['items']

    function ItemsController(items) {
      let $ctrl = this;

      $ctrl.$onInit = function() {
        console.log(items)
        $ctrl.items = items;
      };
    }

})();
