'use strict';

describe('Controller: ShoprespuestosCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var ShoprespuestosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShoprespuestosCtrl = $controller('ShoprespuestosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShoprespuestosCtrl.awesomeThings.length).toBe(3);
  });
});
