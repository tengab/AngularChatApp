import { Injectable } from '@angular/core';
import { Notification } from '../classes/notification'
import { addNotification } from '../store'


@Injectable()
export class CardsServiceService {

  public notifications: Notification[]
  public nextId: number
  nots: object = [
    addNotification('marek', 'walczak', 'siema'),
    addNotification('pawel', 'galek', 'costam costam')
  ]
  constructor() {
    this.notifications = [],
      this.nextId = 0
      console.log('notificationReducer1', this.nots)
  }

  public addNotification(name: string, lastName: string, text: string): void {

    let notification = new Notification(this.nextId, name, lastName, text)
    this.notifications.push(notification)
    this.nextId++
    console.log('NOTIFICATION after click', notification)

  }

  public getNotifications(): Notification[] {
    return this.notifications
  }

}
