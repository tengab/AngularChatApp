import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { NgRedux, NgReduxModule, } from '@angular-redux/store'
import { noteReducer } from './reducers/notification.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component'



import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialAppModule } from './ngmaterial.module';
import { DialogComponent } from './dialog/dialog.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component'
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    FormsModule,
    NgReduxModule,
    StoreModule.provideStore({ notes: noteReducer }),
    StoreDevtoolsModule.instrumentStore({ maxAge: 10 })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogModalComponent]
})

export class AppModule {
  constructor() {

  }
}
