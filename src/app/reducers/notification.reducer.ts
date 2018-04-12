import { Note } from '../models/note'
import { Action } from '@ngrx/store'
import { AppState } from '../models/app.state'
import { state } from '@angular/core';
import { createStore } from 'redux'

export const ADD_NOTE = 'ADD_NOTE'



const initialState: AppState = {
    notes: [{ id: 0, name: 'gg', lastName: 'fgh', text: 'fghj' }]
}

export function noteReducer(state = initialState, action: Action) {

    switch (action.type) {
        case ADD_NOTE:
            console.log([action.payload], [state.notes], state.notes.concat([action.payload]))
            return { ...state,
                notes: state.notes.concat([action.payload])
            }
            
        default:
            return state
            
    }


}
 