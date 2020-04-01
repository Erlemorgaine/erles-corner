import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SunsetComponent} from "./sunset/sunset.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sunset', component: SunsetComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
