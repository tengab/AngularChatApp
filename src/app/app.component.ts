import { Component } from '@angular/core';
import {CardsServiceService} from './services/cards-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor (public cardsServiceService: CardsServiceService) {

  }
}

