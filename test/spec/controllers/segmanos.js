'use strict';

describe('Controller: SegmanosCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var SegmanosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SegmanosCtrl = $controller('SegmanosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SegmanosCtrl.awesomeThings.length).toBe(3);
  });
});
