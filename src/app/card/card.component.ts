import { Component, OnInit } from '@angular/core';
import { CardsServiceService } from '../cards-service.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private notificationName: string
  private notificationLastName: string
  private notificationText: string

  constructor(private cardsServiceService: CardsServiceService) {
    this.notificationName = '',
      this.notificationLastName = '',
      this.notificationText = ''
  }

  ngOnInit() { }

  public addNotification(): void {

    let dataObject = {}
    dataObject.name = this.notificationName;
    dataObject.lastName = this.notificationLastName;
    dataObject.text = this.notificationText;

    this.cardsServiceService.addNotification(dataObject.name, dataObject.lastName, dataObject.text)
    this.notificationName = ''
    this.notificationLastName = ''
    this.notificationText = ''

  }

}





