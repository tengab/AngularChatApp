import { Component, OnInit, Input } from '@angular/core';
import { Notification } from '../classes/notification'
import { CardsServiceService } from '../services/cards-service.service'
import { Store } from '@ngrx/store'

import { Note } from '../models/note'
import { AppState } from '../models/app.state'

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss']
})
export class NotificationItemComponent implements OnInit {


  // @Input()
  // public notification: Notification

  // constructor(public cardsServiceService: CardsServiceService) { }
  id = 0
  note = {} as Note

  constructor(private store: Store<AppState>) { }

  addNote() {
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


  ngOnInit() {
  }

}
