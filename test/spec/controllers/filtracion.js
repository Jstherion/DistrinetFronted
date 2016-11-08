'use strict';

describe('Controller: FiltracionCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var FiltracionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FiltracionCtrl = $controller('FiltracionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FiltracionCtrl.awesomeThings.length).toBe(3);
  });
});
