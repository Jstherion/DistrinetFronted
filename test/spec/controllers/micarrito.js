'use strict';

describe('Controller: MicarritoCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var MicarritoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MicarritoCtrl = $controller('MicarritoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MicarritoCtrl.awesomeThings.length).toBe(3);
  });
});
