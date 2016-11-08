'use strict';

describe('Controller: FerreconstruCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var FerreconstruCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FerreconstruCtrl = $controller('FerreconstruCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FerreconstruCtrl.awesomeThings.length).toBe(3);
  });
});
