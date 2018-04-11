import { Note } from '../models/note'
import { Action } from '@ngrx/store'


export const ADD_NOTE = 'ADD NOTE'

export function noteReducer(state: Note[] = [], action: Action) {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, action.payload]
        default:
            return state
    }
}