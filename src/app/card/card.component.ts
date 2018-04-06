import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private notificationName: string
  private notificationLastName: string
  private notificationText: string

  constructor() {
    this.notificationName = '',
      this.notificationLastName = '',
      this.notificationText = ''
  }

  ngOnInit() { }

  private addNotification(): void {

    let dataObject = {}
    dataObject.name = this.notificationName;
    dataObject.lastName = this.notificationLastName;
    dataObject.text = this.notificationText;

    console.log('DATAOBJECT: ', dataObject)

    this.notificationName = ''
    this.notificationLastName = ''
    this.notificationText = ''

    const showName = 'dataObject.name'
  }

  dupa = 'dukpa'

}


//   handleName(event) {
//     console.log('Imie:', event.target.value)

//     return event.target.value
//   }

//   handleLastname(event) {
//     console.log('Nazwisko:', event.target.value)
//   }

//   handleNotification(event) {
//     console.log('Treść:', event.target.value)
//   }

//   addToNotifications() {
//     console.log('notification added')

//   }





