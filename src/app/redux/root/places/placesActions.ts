import {Place} from './placesReducers'
export const ADD_PLACE = 'ADD_PLACE'

export const PlacesActions = {

  addPlace: (place: Place) => ({
    payload: {
      place,
    },
    type: ADD_PLACE,
  }),
}
