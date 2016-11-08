'use strict';

describe('Controller: SegcaidasCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var SegcaidasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SegcaidasCtrl = $controller('SegcaidasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SegcaidasCtrl.awesomeThings.length).toBe(3);
  });
});
