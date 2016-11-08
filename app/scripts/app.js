'use strict';

/**
 * @ngdoc overview
 * @name distrinetApp
 * @description
 * # distrinetApp
 *
 * Main module of the application.
 */
angular
  .module('distrinetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/acercade', {
        templateUrl: 'views/acercade.html',
        controller: 'AcercadeCtrl',
        controllerAs: 'acercade'
      })
      .when('/sedes', {
        templateUrl: 'views/sedes.html',
        controller: 'SedesCtrl',
        controllerAs: 'sedes'
      })
      .when('/contactenos', {
        templateUrl: 'views/contactenos.html',
        controller: 'ContactenosCtrl',
        controllerAs: 'contactenos'
      })
      .when('/ferreteria', {
        templateUrl: 'views/ferreteria.html',
        controller: 'FerreteriaCtrl',
        controllerAs: 'ferreteria'
      })
      .when('/filtracion', {
        templateUrl: 'views/filtracion.html',
        controller: 'FiltracionCtrl',
        controllerAs: 'filtracion'
      })
      .when('/seguridad', {
        templateUrl: 'views/seguridad.html',
        controller: 'SeguridadCtrl',
        controllerAs: 'seguridad'
      })
      .when('/repuestos', {
        templateUrl: 'views/repuestos.html',
        controller: 'RepuestosCtrl',
        controllerAs: 'repuestos'
      })
      .when('/shoprespuestos', {
        templateUrl: 'views/shoprepuestos.html',
        controller: 'ShoprespuestosCtrl',
        controllerAs: 'shoprespuestos'
      })
      .when('/ferreconstru', {
        templateUrl: 'views/ferreconstru.html',
        controller: 'FerreconstruCtrl',
        controllerAs: 'ferreconstru'
      })
      .when('/ferreabrasivos', {
        templateUrl: 'views/ferreabrasivos.html',
        controller: 'FerreabrasivosCtrl',
        controllerAs: 'ferreabrasivos'
      })
      .when('/ferrehmanual', {
        templateUrl: 'views/ferrehmanual.html',
        controller: 'FerrehmanualCtrl',
        controllerAs: 'ferrehmanual'
      })
      .when('/ferrehelect', {
        templateUrl: 'views/ferrehelect.html',
        controller: 'FerrehelectCtrl',
        controllerAs: 'ferrehelect'
      })
      .when('/ferregriferia', {
        templateUrl: 'views/ferregriferia.html',
        controller: 'FerregriferiaCtrl',
        controllerAs: 'ferregriferia'
      })
      .when('/filaceites', {
        templateUrl: 'views/filaceites.html',
        controller: 'FilaceitesCtrl',
        controllerAs: 'filaceites'
      })
      .when('/filtfilt', {
        templateUrl: 'views/filtfilt.html',
        controller: 'FiltfiltCtrl',
        controllerAs: 'filtfilt'
      })
      .when('/segcabeza', {
        templateUrl: 'views/segcabeza.html',
        controller: 'SegcabezaCtrl',
        controllerAs: 'segcabeza'
      })
      .when('/segpies', {
        templateUrl: 'views/segpies.html',
        controller: 'SegiesCtrl',
        controllerAs: 'segies'
      })
      .when('/segauditiva', {
        templateUrl: 'views/segauditiva.html',
        controller: 'SegauditivaCtrl',
        controllerAs: 'segauditiva'
      })
      .when('/segcaidas', {
        templateUrl: 'views/segcaidas.html',
        controller: 'SegcaidasCtrl',
        controllerAs: 'segcaidas'
      })
      .when('/segcorporal', {
        templateUrl: 'views/segcorporal.html',
        controller: 'SegcorporalCtrl',
        controllerAs: 'segcorporal'
      })
      .when('/segmanos', {
        templateUrl: 'views/segmanos.html',
        controller: 'SegmanosCtrl',
        controllerAs: 'segmanos'
      })
      .when('/segrespira', {
        templateUrl: 'views/segrespira.html',
        controller: 'SegrespiraCtrl',
        controllerAs: 'segrespira'
      })
      .when('/ferreagri', {
        templateUrl: 'views/ferreagri.html',
        controller: 'FerreagriCtrl',
        controllerAs: 'ferreagri'
      })
      .when('/ferrepegante', {
        templateUrl: 'views/ferrepegante.html',
        controller: 'FerrepeganteCtrl',
        controllerAs: 'ferrepegante'
      })
      .when('/ferrequimi', {
        templateUrl: 'views/ferrequimi.html',
        controller: 'FerrequimiCtrl',
        controllerAs: 'ferrequimi'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .when('/micarrito', {
        templateUrl: 'views/micarrito.html',
        controller: 'micarritoCtrl',
        controllerAs: 'micarrito'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
