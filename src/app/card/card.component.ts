import { Component, OnInit } from '@angular/core';
import { CardsServiceService } from '../cards-service.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public notificationName: string
  public notificationLastName: string
  public notificationText: string

  constructor(public cardsServiceService: CardsServiceService) {
    this.notificationName = '',
      this.notificationLastName = '',
      this.notificationText = ''
  }

  ngOnInit() { }

  public addNotification(): void {

    let dataObject: { name: string; lastName: string; text: string }  = {
    name: this.notificationName,
    lastName: this.notificationLastName,
    text: this.notificationText
    }

    this.cardsServiceService.addNotification(dataObject.name, dataObject.lastName, dataObject.text)
    this.notificationName = ''
    this.notificationLastName = ''
    this.notificationText = ''

  }

}





