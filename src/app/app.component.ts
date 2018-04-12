import { Note } from './models/note'
import { AppState } from './models/app.state'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { Component, OnInit, state } from '@angular/core';
import { State } from '@ngrx/store';
import { Action } from '@ngrx/store'
import { StoreModule } from '@ngrx/store'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginName: string = localStorage.getItem('loginName')
  isAuthorized: string = localStorage.getItem('isAuthorized')

  notes: Observable<Note[]>

  constructor(private store: Store<AppState>) {
    this.notes = this.store.select(state => state.notes)
  }

  id = 0
  note = {} as Note
  addNote() {
    console.log('name', this.store)
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
}
