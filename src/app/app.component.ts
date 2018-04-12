import { Note } from './models/note'
import { AppState } from './models/app.state'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { Component, OnInit, state } from '@angular/core'
import { State } from '@ngrx/store';
import { Action } from '@ngrx/store'
import { StoreModule } from '@ngrx/store'
import { createStore } from 'redux'
import { noteReducer } from './reducers/notification.reducer'


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

  noteName: any;
  noteLastName: any;
  noteText: any;
  loginName: string = localStorage.getItem('loginName')
  isAuthorized: string = localStorage.getItem('isAuthorized')

  public notes: Observable<Note[]>
  constructor(public store: Store<AppState>) {
    this.store.select(s => s.notes)
      .subscribe((data: any) => {
        this.notes = data.notes
      });
  }

  handleClick() {
    this.store.dispatch(addNote(this.noteName, this.noteLastName, this.noteText))
    
    this.noteName = ''
    this.noteLastName = ''
    this.noteText = ''
  }
}


