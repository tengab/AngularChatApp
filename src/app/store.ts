import {ReduxNotification} from './reduxNotification'


export interface ReduxAppState {
    notifications: ReduxNotification[]
    lastUpdate: Date

}

export const INITIAL_STATE: ReduxAppState = {
    notifications: [],
    lastUpdate: null
}

export function rootReducer(state, action) {
    return state

}