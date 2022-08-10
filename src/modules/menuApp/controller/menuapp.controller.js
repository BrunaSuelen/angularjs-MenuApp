(function () {
  'use strict';

  angular
  .module('MenuAppModule')
  .controller('MenuAppController', MenuAppController);


  MenuAppController.$inject = ['items'];

  function MenuAppController(items) {
    var mainList = this;
    mainList.items = items;
  }

})();
