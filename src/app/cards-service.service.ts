import { Injectable } from '@angular/core';
import { Notification } from './classes/notification'

@Injectable()
export class CardsServiceService {

  private notifications: Notification[]
  private nextId: number

  constructor() {
    this.notifications = [],
      this.nextId = 0
  }

  public addNotification(name: string, lastName: string, text: string): void {

    let notification = new Notification(this.nextId, name, lastName, text)
    this.notifications.push(notification)
    this.nextId++
  }

  public getNotifications(): Notification[] {
    return this.notifications
  }

}
