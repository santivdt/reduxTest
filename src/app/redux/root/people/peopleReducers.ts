import {Action} from '../../redux'
import {ADD_PERSON} from './peopleActions'
import * as update from 'immutability-helper'

export interface Person {
  name:       string
  age:        number
}

const defaultPeople: Person[] = []

export default (people: Person[] = defaultPeople, action: Action) => {

   if (action.type === ADD_PERSON) {

     return update(people, {$push: [action.payload.person]})

   }

   return people
}
