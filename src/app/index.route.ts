import {INgRedux} from 'ng-redux'
const routerConfig = (
  $stateProvider:     angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider
) => {

  $stateProvider
    .state('home', {
      template:  '<home></home>',
      url:       '/',
    })
}

angular.module('energieloket').config(routerConfig)
