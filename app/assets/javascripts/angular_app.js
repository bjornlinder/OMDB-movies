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
    $scope.query = 'The Matrix';
    $scope.omdbCall = function() {
      OmdbAPI.fetch($scope.query)
      .success(function(response){
        if (response.Response == 'False') {
          $(".movie-container").hide();
          $scope.message = 'No results available!'
        } else {
          $scope.message = null;
          if (response.Poster == "N/A") {
            response.Poster = 'images/archer-meme.jpg';
            response.imgUnavailable = true;
          }
          $scope.movie = response;
          $(".movie-container").show();
        }
      });
    }
  });
})();
