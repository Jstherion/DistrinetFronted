'use strict';

describe('Controller: FerreagriCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var FerreagriCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FerreagriCtrl = $controller('FerreagriCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FerreagriCtrl.awesomeThings.length).toBe(3);
  });
});
