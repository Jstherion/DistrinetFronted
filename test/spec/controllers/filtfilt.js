'use strict';

describe('Controller: FiltfiltCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var FiltfiltCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FiltfiltCtrl = $controller('FiltfiltCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FiltfiltCtrl.awesomeThings.length).toBe(3);
  });
});
