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
        if (response.Poster == "N/A") {
          response.Poster = 'images/archer-meme.jpg'
        }
        $scope.movie = response;
      });
    }

  });
  
  // app.config( function ( $routeProvider ) {
  //   $routeProvider
  //   .when('/', {templateUrl: 'movies/show.html', controller: "OmdbAPIController"})
  // });
})();
