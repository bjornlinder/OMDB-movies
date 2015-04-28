(function(){
  'use strict';

  describe('Service: OmdbAPI', function () {
    beforeEach(module('omdb'));
    it('calls the omdb api', inject(function ($httpBackend, OmdbAPI) {
      $httpBackend.expectGET( "http://www.omdbapi.com/?t=The Matrix&y=&plot=full&r=json" ).respond({});
    }));
  });

})();