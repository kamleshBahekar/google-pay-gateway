import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GooglePayButtonModule } from '@google-pay/button-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GooglePayButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
