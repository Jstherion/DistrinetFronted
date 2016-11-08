'use strict';

describe('Controller: FerrepeganteCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var FerrepeganteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FerrepeganteCtrl = $controller('FerrepeganteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FerrepeganteCtrl.awesomeThings.length).toBe(3);
  });
});
