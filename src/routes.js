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
        templateUrl: 'src/modules/menuappModule/template/home.template.html'
      })

      // PAGE CATEGORIES
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/modules/menuappModule/template/categories.template.html',
        controller: 'CategoriesController as ctrl',
        resolve: {
          categories: ['MenuDataService', function(MenuDataService) {
            return MenuDataService
              .getAllCategories()
              .then(function(response) {
                console.log('router', response)
                return response.data;
              });
          }]
        }
      })

      // PAGE ITEMS OF CATEGORY
      .state('items', {
        url: '/items/:category',
        templateUrl: 'src/modules/menuappModule/template/items.template.html',
        controller: 'ItemsController as ctrl',
        resolve: {
          items: [
            '$stateParams',
            'MenuDataService',
            function($stateParams, MenuDataService) {
              return MenuDataService
                .getItemsForCategory($stateParams.category)
                .then(function(response) {
                  return response.data;
                });
            }
          ]
        }
      })
  }

})();
