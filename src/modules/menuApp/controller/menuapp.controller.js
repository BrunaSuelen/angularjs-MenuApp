(function () {
  'use strict';

  angular
  .module('MenuAppModule')
  .controller('MenuAppController', MenuAppController);


  function MenuAppController() {
    let $ctrl = this;

    $ctrl.$onInit = function() {
      console.log("veio")
    };
  }

})();
