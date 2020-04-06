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
import {ThemeDecadeComponent} from "./charts/lego/theme-per-decade/theme-decade.component";
import {LegoChartsComponent} from "./charts/lego/lego-charts.component";
import {DefaultChartsComponent} from "./charts/default/default-charts.component";
import {ColorsThemeComponent} from "./charts/lego/colors-per-theme/colors-theme.component";
import {FocusDirective} from "./directives/focus.directive";

@NgModule({
  declarations: [
    AppComponent,
    SunsetComponent,
    HomeComponent,
    ChartsComponent,
    DefaultChartsComponent,
    BarChartComponent,
    RadarChartComponent,
    PieChartComponent,
    LegoChartsComponent,
    ThemeDecadeComponent,
    ColorsThemeComponent,
    FocusDirective
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
