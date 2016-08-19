import {Person,
  default as people,    //TODO snapnie iets in people reducers en default ??
} from './root/people/peopleReducers'
import {INgReduxProvider} from 'ng-redux'
import {combineReducers} from 'redux'
import {initialState} from './constants/initialState'


export interface Action {
  type:       string
  payload:    any
}

export interface Reducer<T> {
  (state: T, action: Action): T
}

export interface State {
  people:     Person[]
}

// let reducer: Reducer<number> = (state: number, action: Action) => state
//
// export type GetState = () => State


const rootReducer = combineReducers({
  people
})



const reduxConfig = (
  $ngReduxProvider: INgReduxProvider
) => {

    $ngReduxProvider.createStoreWith(
      rootReducer,
      [], // TODO if this is not here it cries about middleware bla .
      [
        (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f, // tslint:disable-line:no-any
      ],
      initialState || {}
    )
}



angular.module('energieloket').config(reduxConfig)
