import {Component, OnInit} from '@angular/core';
import { draw } from 'patternomaly';
import { Chart } from 'chart.js';
import {titleOptions} from "../chart-data";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public barChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public barChartData = [];
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    animation: {
      duration: 2000
    },
    title: {
      ...titleOptions,
      text: 'A Pie Chart'
    }
  };

  ngOnInit(): void {
    const ctx = (document.getElementById('bar') as HTMLCanvasElement).getContext('2d');

    const gradient1 = ctx.createRadialGradient(75, 50, 345, 90, 60, 1000);
    const gradient2 = ctx.createRadialGradient(75, 50, 5, 90, 60, 1000);
    const gradient3 = ctx.createRadialGradient(75, 50, 5, 90, 60, 1000);
    const gradient4 = ctx.createRadialGradient(75, 50, 5, 90, 60, 1000);

    const colors1 = ['transparent', 'rgba(54,162,235,0.53)', 'transparent', 'rgba(54,162,235,0.53)'];
    const colors3 = ['rgba(235,202,25,0.51)', 'transparent', 'rgba(235,202,25,0.51)', 'transparent'];
    const colors2 = ['rgba(235,133,36,0.51)', 'transparent', 'rgba(235,133,36,0.51)', 'transparent'];
    const colors4 = ['rgba(235,14,0,0.51)', 'transparent', 'rgba(235,14,0,0.51)', 'transparent'];

    colors1.forEach((c, i) => gradient1.addColorStop(i / colors1.length, c));
    colors2.forEach((c, i) => gradient2.addColorStop(i / colors2.length, c));
    colors3.forEach((c, i) => gradient3.addColorStop(i / colors3.length, c));
    colors4.forEach((c, i) => gradient4.addColorStop(i / colors4.length, c));

    this.barChartData = [
      {
        data: [120, 150, 180, 90],
        backgroundColor: [
          gradient1,
          gradient2,
          gradient3,
          gradient4
        ],
        borderWidth: 0
      },
    ];
  }
}
