'use strict';

describe('Controller: SegcabezaCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var SegcabezaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SegcabezaCtrl = $controller('SegcabezaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SegcabezaCtrl.awesomeThings.length).toBe(3);
  });
});
