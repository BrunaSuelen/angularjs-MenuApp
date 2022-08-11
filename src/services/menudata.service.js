(function () {
  'use strict';

  angular
    .module('DataModule')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


  MenuDataService.$inject = ['$http', 'ApiBasePath'];

  function MenuDataService($http, ApiBasePath) {
    let service = this;

    service.getAllCategories = function() {
      let url = `${ApiBasePath}/categories.json`;
      return $http.get(url);
    };

    service.getItemsForCategory = function(categoryShortName) {
      let url = `${ApiBasePath}/menu_items.json?category=${categoryShortName}`;
      return $http.get(url);
    };
  }

})();
