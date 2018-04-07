import { Injectable } from '@angular/core';
import { Notification } from './classes/notification'


@Injectable()
export class CardsServiceService {

  private notifications: Notification[]
  private nextId: number

  constructor() {
    this.notifications = [
      new Notification(0, 'Tomek', 'Banani', 'Lorem Ipsum'),
      new Notification(1, 'Paweł', 'Gałek', ' Duis aute irure dolor')
    ],
      this.nextId = 2
  }

  public addNotification(name: string, lastName: string, content: string): void {
    console.log(this.notifications)
    let notification = new Notification(this.nextId, name, lastName, content)
    this.notifications.push(notification)
    this.nextId++
  }

  public getNotifications(): Notification[] {
    return this.notifications
  }

}
