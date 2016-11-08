'use strict';

describe('Controller: FerrequimiCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var FerrequimiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FerrequimiCtrl = $controller('FerrequimiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FerrequimiCtrl.awesomeThings.length).toBe(3);
  });
});
