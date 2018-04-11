import { Component } from '@angular/core';
import { CardsServiceService } from './services/cards-service.service'
import { addNotification } from './store'
import { notificationReducer } from './store'

import { Note } from './models/note'
import { AppState } from './models/app.state'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // loginName: string = localStorage.getItem('loginName')
  // isAuthorized: string = localStorage.getItem('isAuthorized')


  // nots: object = [addNotification('tomek', 'staszewski', 'mam cos do powiedzenia'), addNotification('jurek', 'dres', 'slowa slowa slowa') ]

  notes: Observable<Note[]>

  constructor(private store: Store<AppState>) {
    this.notes = this.store.select(state => state.note)
  }

  // constructor (public cardsServiceService: CardsServiceService) {

  // }

}

