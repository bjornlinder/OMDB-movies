(function(){
  'use strict';

  var app = angular.module("omdb", []);
  
  app.factory('OmdbAPI', function($http){
    return {
      "fetch" : function(query){
        return $http.get("http://www.omdbapi.com/?t=The+Matrix&y=&plot=full&r=json");
      }
    }
  });

  app.controller('OmdbAPIController', function($scope, OmdbAPI) {
    $scope.movie = {};

    OmdbAPI.fetch('The Matrix').success(function(response){
      $scope.movie = response;
    });
  });
})();
