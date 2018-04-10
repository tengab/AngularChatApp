import { Component } from '@angular/core';
import { CardsServiceService } from './services/cards-service.service'
import { addNotification } from './store'
import { notificationReducer } from './store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginName: string = localStorage.getItem('loginName')
  isAuthorized: string = localStorage.getItem('isAuthorized')


  nots: object = [addNotification('tomek', 'staszewski', 'mam cos do powiedzenia'), addNotification('jurek', 'dres', 'slowa slowa slowa') ]

 
  constructor(public cardsServiceService: CardsServiceService) {
console.log('notificationReducer', this.nots)
  }

  // constructor (public cardsServiceService: CardsServiceService) {

  // }

}

