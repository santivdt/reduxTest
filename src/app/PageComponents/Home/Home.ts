import {State} from '../../redux/redux'
import {getPeople} from '../../redux/get'
import './Home.scss'
import {INgRedux} from 'ng-redux'
import {PeopleActions} from '../../redux/root/people/peopleActions'

class HomeController {

  public PeopleActions = PeopleActions

  constructor(
    public $ngRedux: INgRedux,
    $scope:          angular.IScope
  ) {

    $scope.$on('$destroy', this.$ngRedux.connect(this._mapState.bind(this))(this))

  }

  private _mapState(state: State) {
    return {
      people:   getPeople(state),
    }
  }

  private addPerson(input) {
    console.log('adding ', input, ' to the store')
    this.$ngRedux.dispatch(PeopleActions.addPerson(input))
  }

}

angular.module('energieloket').component('home', {
  controller: HomeController,
  template:   require('./Home.html'),
})
