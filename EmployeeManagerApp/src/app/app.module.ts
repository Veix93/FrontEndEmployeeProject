import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //required to make Http requests
    FormsModule       // reuired for handling forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
