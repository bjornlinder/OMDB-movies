(function(){
  'use strict';

  describe('Controller: OmdbAPIController', function () {
    var scope, OmdbAPI, apiResponse, spy;

    beforeEach(module('omdb', function($provide){
      $provide.value('OmdbAPI', {
        fetch: function(query){
          return {
            success: function(innerBlock) {
              innerBlock(apiResponse);
            }
          }
        }
      });
    }));

    beforeEach(inject(function ($controller, $rootScope, _OmdbAPI_) {
      scope = $rootScope.$new();
      OmdbAPI = _OmdbAPI_;
      spy = spyOn(OmdbAPI,'fetch').and.callThrough();
      var controller = $controller('OmdbAPIController', { $scope: scope });
    }));

    it('sets error message when response is false', function () {
      apiResponse = {'Response':'False'};
      scope.omdbCall();
      expect(spy).toHaveBeenCalled();
      expect(scope.message).toEqual('No results available!');
    });
    
    it('sets the movie variable when response is available', function () {
      apiResponse = {'Title':'The Matrix'};
      scope.omdbCall();
      expect(spy).toHaveBeenCalled();
      expect(scope.message).toBeNull;
      expect(scope.movie).toBeDefined();
    });
  });
})();
