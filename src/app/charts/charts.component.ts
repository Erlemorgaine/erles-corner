import { Component } from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  constructor() {
    Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontFamily = 'Raleway';
    Chart.defaults.global.elements.line.borderColor = 'white';
  }
}
