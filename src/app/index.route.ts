const routerConfig = (
  $stateProvider:     angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider
) => {

  $stateProvider
    .state('home', {
      template:  '<home></home>',
      url:       '/',
    })

  $urlRouterProvider.when('/home', '/')
  $urlRouterProvider.otherwise('/404')
}

angular.module('energieloket').config(routerConfig)
