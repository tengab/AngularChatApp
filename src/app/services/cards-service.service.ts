import { Injectable } from '@angular/core';
import { Notification } from '../classes/notification'

@Injectable()
export class CardsServiceService {

  public notifications: Notification[]
  public nextId: number

  constructor() {
    this.notifications = [],
      this.nextId = 0
  }

  public addNotification(name: string, lastName: string, text: string): void {

    let notification = new Notification(this.nextId, name, lastName, text)
    this.notifications.push(notification)
    this.nextId++
    console.log('NOTIFICATION', notification)
  }

  public getNotifications(): Notification[] {
    return this.notifications
  }

}
