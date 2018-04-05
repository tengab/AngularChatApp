import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
