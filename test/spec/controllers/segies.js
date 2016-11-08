'use strict';

describe('Controller: SegiesCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var SegiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SegiesCtrl = $controller('SegiesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SegiesCtrl.awesomeThings.length).toBe(3);
  });
});
