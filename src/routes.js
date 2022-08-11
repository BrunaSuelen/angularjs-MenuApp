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
  }

})();
