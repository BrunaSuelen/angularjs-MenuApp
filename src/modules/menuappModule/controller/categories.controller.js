(function () {
  'use strict';

  angular
    .module('DataModule')
    .controller('CategoriesController', CategoriesController)


    CategoriesController.$inject = ['categories']

    function CategoriesController(categories) {
      let $ctrl = this;

      $ctrl.$onInit = function() {
        $ctrl.categories = categories;
      };
    }

})();
