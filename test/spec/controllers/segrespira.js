'use strict';

describe('Controller: SegrespiraCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var SegrespiraCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SegrespiraCtrl = $controller('SegrespiraCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SegrespiraCtrl.awesomeThings.length).toBe(3);
  });
});
