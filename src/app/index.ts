import 'angular'
import 'angular-ui-router'
import 'ng-redux'


angular
  .module('energieloket', [
      'ui.router',
      'ngRedux',
])



import './PageComponents/Home/Home'
import './index.config'
import './index.route'
import './redux/redux'
