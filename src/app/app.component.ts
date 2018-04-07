import { Component } from '@angular/core';
import {CardsServiceService} from './cards-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor (private cardsServiceService: CardsServiceService) {

  }
}
