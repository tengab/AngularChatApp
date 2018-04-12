import { Note } from './models/note'
import { AppState } from './models/app.state'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { Component, OnInit, state } from '@angular/core';
import { State } from '@ngrx/store';
import { Action } from '@ngrx/store'
import { StoreModule } from '@ngrx/store'
import { createStore } from 'redux'

import {noteReducer } from './reducers/notification.reducer'


// combne
const myStore = createStore(noteReducer)


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginName: string = localStorage.getItem('loginName')
  isAuthorized: string = localStorage.getItem('isAuthorized')

  public notes: Observable<Note[]>

  constructor(public store: Store<AppState>) {
  //  this.notes = this.store.select('notes')
  }



  id = 0
  note = {} as Note
  addNote() {
    console.log('name', myStore.getState().notes)
    this.store.dispatch({
      type: 'ADD_NOTE',
      payload: <Note>{
        id: ++this.id,
        name: this.note.name,
        lastName: this.note.lastName,
        text: this.note.text
      }
    })
  }

showStore = myStore.getState().notes

}
