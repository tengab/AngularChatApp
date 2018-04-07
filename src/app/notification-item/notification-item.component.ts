import { Component, OnInit, Input } from '@angular/core';
import {Notification } from '../classes/notification'
import {CardsServiceService} from '../cards-service.service'

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss']
})
export class NotificationItemComponent implements OnInit {


  @Input()
  private notification: Notification

  constructor(private cardsServiceService: CardsServiceService) { }

  ngOnInit() {
  }

}