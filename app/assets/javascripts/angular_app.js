(function(){
  'use strict';

  var app = angular.module("todo", []);
  // app.module('omdb', []);
  // app.factory('omdbAPI', function($http){

  app.factory('TodoList', function($http){
    return {
      "fetch" : function(){
        return $http.get("/todo.json");
      }
    }
  });

  app.controller('TodoController', function($scope, TodoList) {
    $scope.items = [];

    TodoList.fetch().success(function(response){
      $scope.items = response.items;
    });
  });
})();
