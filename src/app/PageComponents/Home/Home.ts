// import {getPropositions} from '../../redux/get'
// import {State} from '../../redux/redux'
// import {getContent} from '../../redux/root/contentObjects/getContentObject'
import './Home.scss'
// import {INgRedux} from 'ng-redux'

// class HomeController {
//
//   constructor(
//     public $ngRedux: INgRedux,
//     $scope:          angular.IScope
//   ) {
//
//     $scope.$on('$destroy', this.$ngRedux.connect(this._mapState.bind(this))(this))
//
//   }
//
//   private _mapState(state: State) {
//     return {
//       content:        getContent('Home')(state),
//       propositions:   getPropositions(state),
//     }
//   }
//
// }

angular.module('energieloket').component('home', {
  template:   require('./Home.html'),
})
