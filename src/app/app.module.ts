import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component'
import { CardComponent } from './card/card.component'

import { CardsServiceService } from './services/cards-service.service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialAppModule } from './ngmaterial.module';
import { NotificationItemComponent } from './notification-item/notification-item.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component'


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NotificationItemComponent,
    DialogComponent,
    DialogModalComponent
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
  bootstrap: [AppComponent],
  entryComponents: [DialogModalComponent]
})
export class AppModule { }
