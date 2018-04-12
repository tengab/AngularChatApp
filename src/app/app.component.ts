import { Note } from './models/note'
import { AppState } from './models/app.state'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { Component, OnInit, state } from '@angular/core';
import { State } from '@ngrx/store';
import { Action } from '@ngrx/store'
import { StoreModule } from '@ngrx/store'
import { createStore } from 'redux'
import { noteReducer, myStore } from './reducers/notification.reducer'

const sampleArray = [0, 1, 2, 3, 4, 5, 6]

const ADD_NOTE = 'ADD_NOTE'
let id = 0
 const note = {} as Note

let addNote = (name: string, lastName: string, text: string) => ({
  type: ADD_NOTE,
  payload: <Note>{
    id: ++id,
    name,
    lastName,
    text
  }
})



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginName: string = localStorage.getItem('loginName')
  isAuthorized: string = localStorage.getItem('isAuthorized')
  sampleArray = [
    {
      id: 0,
      name: 'gg',
      lastName: 'fgh',
      text: 'fghj'
    },
    {
      id: 1,
      name: 'this.theNoteName',
      lastName: 'this.theNoteLastName',
      text: 'this.theNoteText'
    },
    {
      id: 2,
      name: 'this.theNoteName',
      lastName: 'this.theNoteLastName',
      text: 'this.theNoteText'
    },
    {
      id: 3,
      name: 'this.theNoteName',
      lastName: 'this.theNoteLastName',
      text: 'this.theNoteText'
    },
    {
      id: 4,
      name: 'this.theNoteName',
      lastName: 'this.theNoteLastName',
      text: 'this.theNoteText'
    }
  ]
  public notes: Observable<Note[]>

  constructor(public store: Store<AppState>) {

    this.notes = this.store.select(state => state.notes)

    this.store.select(s => s.notes)
      .subscribe((data: any) => {
        console.log('app component got reducer\'s state: ', data.notes)
      });
    
  }

  sampleArray2 = myStore.getState().notes
  
  
  handleClick() {

    this.store.dispatch(addNote('this.theNoteName', 'this.theNoteLastName', 'this.theNoteText'))

    console.log('aaaaa', this.notes, myStore.getState().notes)

  }

  

}
