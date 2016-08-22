import {Action} from '../../redux'
import * as update from 'immutability-helper'
import {ADD_PLACE} from './placesActions'

export interface Place {
  name:       string
  province:   string
  id:         number
  rating:     number
}

const defaultPlaces: Place[] = []

export default (places: Place[] = defaultPlaces, action: Action) => {

  if (action.type === ADD_PLACE) {

    return update(places, {$push: [action.payload.place]})
  }

  return places
}

