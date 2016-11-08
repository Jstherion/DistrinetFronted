'use strict';

describe('Controller: FerregriferiaCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var FerregriferiaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FerregriferiaCtrl = $controller('FerregriferiaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FerregriferiaCtrl.awesomeThings.length).toBe(3);
  });
});
