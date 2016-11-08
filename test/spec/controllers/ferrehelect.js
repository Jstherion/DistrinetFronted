'use strict';

describe('Controller: FerrehelectCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var FerrehelectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FerrehelectCtrl = $controller('FerrehelectCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FerrehelectCtrl.awesomeThings.length).toBe(3);
  });
});
