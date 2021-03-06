(function() {
  var app = angular.module('personal', []);

  app.factory('RestaurantData', function() {

    var firstDataSet = {name: 'Spices-2', visitors: '400', ratings: '4'};
    var secondDataSet = [{name: 'Spices-2', visitors: '400', ratings: '4'}, 
      {name: 'BurmaSuperStar', visitors: '1000', ratings: '5'},
      {name: 'kitchenStory', visitors: '3000', ratings: '5.5'}      
    ]
    return firstDataSet;
  });

  app.controller('MainController', ['$scope', 'RestaurantData', function($scope, RestaurantData) {
    $scope.changeVisitors = function() {
      RestaurantData.visitors = 20;
      RestaurantData.name = "Crab House";
    }
  }]);

  app.controller('NameListController', ['$scope', 'RestaurantData', function($scope, RestaurantData) {
    $scope.restaurantInfo = RestaurantData;
  }]); 

  app.controller('VisitorsListController', ['$scope', 'RestaurantData', function($scope, RestaurantData) {
    $scope.visitors = RestaurantData.visitors;
  }]); 

  app.directive('nameList', function() {
    return {
      restrict: 'E',
      templateUrl: 'name-list.html'
    };
  });

  app.directive('visitorsList', function() {
    return {
      restrict: 'E',
      templateUrl: 'visitors-list.html'
    };
  });
}) (); 