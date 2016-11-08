'use strict';

describe('Controller: FerrehmanualCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var FerrehmanualCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FerrehmanualCtrl = $controller('FerrehmanualCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FerrehmanualCtrl.awesomeThings.length).toBe(3);
  });
});
