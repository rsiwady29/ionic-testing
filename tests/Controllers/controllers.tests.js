describe('Controllers', function(){
    var scope;

    // load the controller's module
    beforeEach(module('starter.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('AccountCtrl', {$scope: scope});
    }));

    // tests start here
    it('should have enabled friends to be true', function(){
        expect(scope.settings.enableFriends).toEqual(true);
    });

    it('should add 2 numbers', function(){
      var n1 = 10;
      var n2= 5;
      var expectedResult = 15;

      // Sut
      var result = scope.add(n1, n2);

      expect(result).toEqual(expectedResult);
    });
});
