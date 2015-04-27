(function(){
  'use strict';

  describe('Service: OmdbAPI', function () {
    beforeEach(module('omdb'));

    it('returns a JSON movie object', inject(function ($httpBackend, OmdbAPI) {
      var movie;
      $httpBackend.when('GET', '/search.json').respond({movie: {"Title":"The Matrix","Plot":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."}}, {});

      var omdb = OmdbAPI.fetch().success(function(response){ movie = response.movie; });
      expect(movie).not.toBeDefined();

      $httpBackend.flush();
      expect(movie).toEqual({"Title":"The Matrix","Plot":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."});
    }));
  });
  // it('calls the omdb api') {
  //   $httpBackend.whenGET("/search.json").respond({ hello: 'World' });
  //   $httpBackend.expectGET( "http://www.omdbapi.com/?t=The+Matrix&y=&plot=full&r=json" );
  //
  // }
})();