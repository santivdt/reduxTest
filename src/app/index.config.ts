angular.module('energieloket').config(config)

function config(
  $locationProvider:           angular.ILocationProvider
) {

  //enable HTML5 mode
  $locationProvider.html5Mode(true)

}
