import {Person} from './peopleReducers'
export const ADD_PERSON = 'ADD_PERSON'

export const PeopleActions = {

  addPerson: (person: Person) => ({
    payload: {
      person,
    },
    type: ADD_PERSON,
  }),

}
