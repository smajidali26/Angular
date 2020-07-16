import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CovidComponent } from './covid/covid.component';
import { SynergyComponent } from './synergy/synergy.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidComponent,
    SynergyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
