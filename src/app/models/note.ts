import { createStore } from 'redux'
import { Store } from '@ngrx/store'


export interface Note {
    id: number
    name: string
    lastName: string
    text: string
}