'use strict';

describe('Controller: FerreteriaCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var FerreteriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FerreteriaCtrl = $controller('FerreteriaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FerreteriaCtrl.awesomeThings.length).toBe(3);
  });
});
