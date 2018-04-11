import { Note } from '../models/note'
import { Action } from '@ngrx/store'
import {AppState} from '../models/app.state'


export const ADD_NOTE = 'ADD_NOTE'

// const initialState = {
//     note: Note[]
// }

export function noteReducer(oldState: Note[] = [], action: Action) {
    let newState = {};
    switch (action.type) {
        case ADD_NOTE:
        console.log([action.payload], [oldState])
            newState = {
                ...oldState, 
                ...{
                    note: [oldState].concat([action.payload])
                }
            }
            break
        default:
            break
    }

    return newState;
}