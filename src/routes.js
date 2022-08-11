(function () {
'use strict';

  angular
    .module('MenuAppModule')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/modules/menuapp/template/home.template.html'
      })

      // Premade list page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/modules/menuapp/template/categories.template.html',
        resolve: {
          categories: ['DataService', function(DataService) {
            return DataService.getItems();
          }]
        }
      })

      .state('itemDetail', {
        url: '/item-detail/{itemId}',
        templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
        controller: 'ItemDetailController as itemDetail',
        resolve: {
          item: ['$stateParams', 'ShoppingListService',
                function ($stateParams, ShoppingListService) {
                  return ShoppingListService.getItems()
                    .then(function (items) {
                      return items[$stateParams.itemId];
                    });
                }]
        }
      });
  }

})();
