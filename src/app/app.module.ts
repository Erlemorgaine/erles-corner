import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SunsetComponent} from "./pages/sunset/sunset.component";
import {HomeComponent} from "./pages/home/home.component";
import {ChartsComponent} from "./pages/charts/charts.component";
import { ChartsModule } from 'ng2-charts';
import {BarChartComponent} from "./pages/charts/bar-chart/bar-chart.component";
import {RadarChartComponent} from "./pages/charts/radar-chart/radar-chart.component";
import {PieChartComponent} from "./pages/charts/pie-chart/pie-chart.component";
import {ThemeDecadeComponent} from "./pages/charts/lego/theme-per-decade/theme-decade.component";
import {LegoChartsComponent} from "./pages/charts/lego/lego-charts.component";
import {DefaultChartsComponent} from "./pages/charts/default/default-charts.component";
import {ColorsThemeComponent} from "./pages/charts/lego/colors-per-theme/colors-theme.component";
import { ImageDetectionComponent } from './pages/image-detection/image-detection.component';
import { MenuComponent } from './components/menu/menu.component';
import {ForceDirectedGraphComponent} from "./pages/charts/d3/force-directed-graph/force-directed-graph.component";
import {NodeVisualComponent} from "./components/visuals/node-visual";
import {LinkVisualComponent} from "./components/visuals/link-visual";
import {ZoomableDirective} from "./directives/zoomable.directive";
import {DraggableDirective} from "./directives/draggable.directive";
import {D3ChartsComponent} from "./pages/charts/d3/d3-charts.component";
import {UfoLoomGraphComponent} from "./pages/charts/d3/ufo-loom-graph/ufo-loom-graph.component";

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
    ForceDirectedGraphComponent,
    ImageDetectionComponent,
    MenuComponent,
    NodeVisualComponent,
    LinkVisualComponent,
    ZoomableDirective,
    DraggableDirective,
    D3ChartsComponent,
    UfoLoomGraphComponent
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
