import {Component} from '@angular/core';
import {Chart} from "chart.js";
import { ILink } from "../../components/menu/menu.component";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

  url: string;
  chartLinks: ILink[] = [
    {link: 'default', text: 'Try-and-see'},
    {link: 'lego', text: 'Lego land'},
    {link: 'd3', text: 'D3 Visuals'}
  ];

  constructor() {
    Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontFamily = 'Raleway';
    Chart.defaults.global.elements.line.borderColor = 'white';
    Chart.defaults.global.legend.onHover = (e: Event) => (<HTMLElement>e.target).style.cursor = 'pointer';
  }
}
