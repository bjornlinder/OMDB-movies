(function(){
  'use strict';

  var app = angular.module("omdb", []);
  
  app.factory('OmdbAPI', function($http){
    return {
      "fetch" : function(query){
        var path = 'http://www.omdbapi.com/?t=';
        return $http.get(path + query + '&y=&plot=full&r=json');
      }
    }
  });

  app.controller('OmdbAPIController', function($scope, OmdbAPI) {
    $scope.movie = {};
    $scope.query = 'Lord of the Rings';

    $scope.omdbCall = function() {
      OmdbAPI.fetch($scope.query)
      .success(function(response){
        $scope.movie = response;
      });
    }

  });
})();
