import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SunsetComponent} from "./pages/sunset/sunset.component";
import {HomeComponent} from "./pages/home/home.component";
import {ChartsComponent} from "./pages/charts/charts.component";
import {LegoChartsComponent} from "./pages/charts/lego/lego-charts.component";
import {DefaultChartsComponent} from "./pages/charts/default/default-charts.component";
import {ImageDetectionComponent} from "./pages/image-detection/image-detection.component";
import {D3ChartsComponent} from "./pages/charts/d3/d3-charts.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sunset', component: SunsetComponent },
  { path: 'image-detection', component: ImageDetectionComponent },
  {
    path: 'charts',
    component: ChartsComponent,
    children: [
      { path: 'default', component: DefaultChartsComponent },
      { path: 'lego', component: LegoChartsComponent },
      { path: 'd3', component: D3ChartsComponent }
    ]
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
