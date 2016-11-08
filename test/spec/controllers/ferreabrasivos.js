'use strict';

describe('Controller: FerreabrasivosCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var FerreabrasivosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FerreabrasivosCtrl = $controller('FerreabrasivosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FerreabrasivosCtrl.awesomeThings.length).toBe(3);
  });
});
