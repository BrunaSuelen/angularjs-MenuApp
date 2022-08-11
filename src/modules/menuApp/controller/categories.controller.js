(function () {
  'use strict';

  angular
    .module('DataModule')
    .controller('CategoriesController', CategoriesController)


    CategoriesController.$inject = ['categories']

    function CategoriesController(categories) {
      let $ctrl = this;

      $ctrl.$onInit = function() {
        console.log('init', categories)
      };

      $ctrl.$doCheck = function () {
        console.log("as")
        // if ($ctrl.items.length !== totalItems) {
        //   totalItems = $ctrl.items.length;

        //   $rootScope.$broadcast('shoppinglist:processing', { on: true });
        //   var promises = [];
        //   for (var i = 0; i < $ctrl.items.length; i++) {
        //     promises.push(WeightLossFilterService.checkName($ctrl.items[i].name));
        //   }

        //   $q.all(promises)
        //     .then(function (result) {
        //       // Remove cookie warning
        //       var warningElem = $element.find('div.error');
        //       warningElem.slideUp(900);
        //     })
        //     .catch(function (result) {
        //       // Show cookie warning
        //       var warningElem = $element.find('div.error');
        //       warningElem.slideDown(900);
        //     })
        //     .finally(function () {
        //       $rootScope.$broadcast('shoppinglist:processing', { on: false });
        //     });
        // }
      };
    }

})();
