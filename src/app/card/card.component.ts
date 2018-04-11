import { Component, OnInit } from '@angular/core';
import { CardsServiceService } from '../services/cards-service.service'
import { addNotification } from '../store'


import { Notification } from '../classes/notification'

import { Store } from '@ngrx/store'

import { Note } from '../models/note'
import { AppState } from '../models/app.state'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public notificationName: string
  public notificationLastName: string
  public notificationText: string

  nots: object = [addNotification('grzegorz', 'banani', 'wypowiedz'), addNotification('jaroslaw', 'muniek', 'koper')]

  // constructor(public cardsServiceService: CardsServiceService) {
  //   this.notificationName = '',
  //     this.notificationLastName = '',
  //     this.notificationText = ''
  //     console.log('notificationReducer2', this.nots)
  // }

  ngOnInit() { }

  public addNotification(): void {

    let dataObject: { name: string; lastName: string; text: string } = {
      name: this.notificationName,
      lastName: this.notificationLastName,
      text: this.notificationText
    }

    const newNot = addNotification(dataObject.name, dataObject.lastName, dataObject.text)
    console.log('NEWNOT', newNot)
    // this.cardsServiceService.addNotification(dataObject.name, dataObject.lastName, dataObject.text)
    this.notificationName = ''
    this.notificationLastName = ''
    this.notificationText = ''

  }
  id = 0
  note = {} as Note

  constructor(private store: Store<AppState>) { }

  addNote() {
    console.log('name', this.store)
    const ActionForThis = {      
      type: 'ADD_NOTE',
      payload: <Note>{
        id: ++this.id,
        name: this.note.name,
        lastName: this.note.lastName,
        text: this.note.text
      }
    }
    console.log('ActionForThis',ActionForThis);

    this.store.dispatch(ActionForThis)
  }





}





