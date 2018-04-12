import {Note} from '../models/note'
import { createStore } from 'redux'
import { Store } from '@ngrx/store'

export interface AppState {
    notes: Note[]
}