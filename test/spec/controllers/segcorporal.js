'use strict';

describe('Controller: SegcorporalCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var SegcorporalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SegcorporalCtrl = $controller('SegcorporalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SegcorporalCtrl.awesomeThings.length).toBe(3);
  });
});
