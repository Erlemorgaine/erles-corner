import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SunsetComponent} from "./sunset/sunset.component";
import {HomeComponent} from "./home/home.component";
import {ChartsComponent} from "./charts/charts.component";

@NgModule({
  declarations: [
    AppComponent,
    SunsetComponent,
    HomeComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
