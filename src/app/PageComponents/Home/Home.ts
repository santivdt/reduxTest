import {State} from '../../redux/redux'
import {getPeople, getPlaces} from '../../redux/get'
import './Home.scss'
import {INgRedux} from 'ng-redux'
import {PeopleActions} from '../../redux/root/people/peopleActions'
import {PlacesActions} from '../../redux/root/places/placesActions'

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
      places:   getPlaces(state),
    }
  }

  private addPerson(input) {
    this.person = {}
    this.$ngRedux.dispatch(PeopleActions.addPerson(input))
  }

  private addPlace(input) {
    this.place = {}
    this.$ngRedux.dispatch(PlacesActions.addPlace(input))
  }

}

angular.module('energieloket').component('home', {
  controller: HomeController,
  template:   require('./Home.html'),
})
