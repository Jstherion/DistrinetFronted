'use strict';

describe('Controller: RepuestosCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var RepuestosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepuestosCtrl = $controller('RepuestosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RepuestosCtrl.awesomeThings.length).toBe(3);
  });
});
