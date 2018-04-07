import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component'
import { CardComponent } from './card/card.component'
import { CardListComponent } from './card-list/card-list.component'
import {CardsServiceService} from './cards-service.service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialAppModule } from './ngmaterial.module';
import { NotificationItemComponent } from './notification-item/notification-item.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    NotificationItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    FormsModule
  ],
  providers: [
    CardsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
