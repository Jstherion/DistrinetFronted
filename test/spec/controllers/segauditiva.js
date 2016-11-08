'use strict';

describe('Controller: SegauditivaCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var SegauditivaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SegauditivaCtrl = $controller('SegauditivaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SegauditivaCtrl.awesomeThings.length).toBe(3);
  });
});
