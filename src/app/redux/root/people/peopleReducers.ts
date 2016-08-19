import {Action, State} from '../../redux'
import {ADD_PERSON} from './peopleActions'

export interface Person {
  name:       string
  age:        number
}

const defaultPeople: Person[] = []

export default (people: Person[] = defaultPeople, action: Action) => {

   if (action.type === ADD_PERSON) {

     console.log('action.payload = ', action.payload)

     return {
       people: State.people.add(action.payload)
     }
   }

   else {
     return State
   }

}
