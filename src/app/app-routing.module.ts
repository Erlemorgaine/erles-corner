import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SunsetComponent} from "./sunset/sunset.component";
import {HomeComponent} from "./home/home.component";
import {ChartsComponent} from "./charts/charts.component";
import {LegoChartsComponent} from "./charts/lego/lego-charts.component";
import {DefaultChartsComponent} from "./charts/default/default-charts.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sunset', component: SunsetComponent },
  {
    path: 'charts',
    component: ChartsComponent,
    children: [
      { path: 'default', component: DefaultChartsComponent },
      { path: 'lego', component: LegoChartsComponent }
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
