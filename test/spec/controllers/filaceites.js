'use strict';

describe('Controller: FilaceitesCtrl', function () {

  // load the controller's module
  beforeEach(module('distrinetApp'));

  var FilaceitesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilaceitesCtrl = $controller('FilaceitesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FilaceitesCtrl.awesomeThings.length).toBe(3);
  });
});
