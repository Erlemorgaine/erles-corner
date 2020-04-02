import {Component, OnInit} from '@angular/core';
import { draw } from 'patternomaly';
import { Chart } from 'chart.js';
import {titleOptions} from "../chart-data";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public barChartOptions = {
    responsive: true,
    animation: {
      duration: 2000
    },
    title: {
      ...titleOptions,
      text: 'A Bar Chart'
    }
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [];

  ngOnInit(): void {
    const ctx = (document.getElementById('bar') as HTMLCanvasElement).getContext('2d');
    const gradient1 = ctx.createLinearGradient(20,0, 1500, 500);
    const colors1 = ['rgba(235,54,190,0.51)', 'rgba(54,162,235,0.53)', 'rgba(235,54,190,0.51)', 'rgba(54,162,235,0.53)', 'rgba(235,54,190,0.51)'];

    colors1.forEach((c, i) => gradient1.addColorStop(i / colors1.length, c));

    this.barChartData = [
      {
        data: [65, 59, 80, 81, 56],
        label: 'Series A',
        backgroundColor: gradient1,
        borderColor: 'rgb(167,12,255)',
        borderWidth: 1
      },
      {
        data: [28, 48, 40, 69, 86],
        label: 'Series B',
        backgroundColor: [
            draw('square', 'rgba(235,48,77,0.51)'),
            draw('ring', 'rgba(54,162,235,0.53)'),
            draw('diamond', 'rgba(204,101,254,0.5)'),
            draw('triangle', 'rgba(255,206,86,0.5)'),
            draw('weave', 'rgba(31,255,99,0.51)')],
        borderColor: 'rgba(235,141,9,0.5)',
        borderWidth: 1
      },
    ];
  }
}
