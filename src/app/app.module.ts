import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SunsetComponent} from "./sunset/sunset.component";
import {HomeComponent} from "./home/home.component";
import {ChartsComponent} from "./charts/charts.component";
import { ChartsModule } from 'ng2-charts';
import {BarChartComponent} from "./charts/bar-chart/bar-chart.component";
import {RadarChartComponent} from "./charts/radar-chart/radar-chart.component";
import {PieChartComponent} from "./charts/pie-chart/pie-chart.component";

@NgModule({
  declarations: [
    AppComponent,
    SunsetComponent,
    HomeComponent,
    ChartsComponent,
    BarChartComponent,
    RadarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
