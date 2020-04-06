import {Component, OnInit} from '@angular/core';
import {chartFontColor} from "../chart-data";

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [];
  public radarChartOptions = {
    responsive: true,
    animation: {
      duration: 2000
    },
    ...chartFontColor('A radar chart', true)
  };

  ngOnInit(): void {
    const ctx = (document.getElementById('radar') as HTMLCanvasElement).getContext('2d');
    const gradient1 = ctx.createLinearGradient(20,0, 1500, 500);
    const gradient2 = ctx.createLinearGradient(40,0, 2000, 1000);
    const colors1 = ['rgba(235,54,190,0.51)', 'rgba(54,162,235,0.53)', 'rgba(235,54,190,0.51)', 'rgba(54,162,235,0.53)', 'rgba(235,54,190,0.51)'];
    const colors2 = ['rgba(235,14,0,0.51)', 'rgba(235,202,14,0.53)', 'rgba(235,19,8,0.51)', 'rgba(235,224,21,0.53)', 'rgba(235,19,8,0.51)'];

    colors1.forEach((c, i) => gradient1.addColorStop(i / colors1.length, c));
    colors2.forEach((c, i) => gradient2.addColorStop(i / colors1.length, c));

    this.radarChartData = [
      {
        data: [120, 130, 180, 70],
        label: '2017',
        backgroundColor: gradient1,
        borderColor: 'rgb(167,12,255)',
        borderWidth: 1
      },
      {
        data: [90, 150, 80, 200],
        label: '2018',
        backgroundColor: gradient2,
        borderColor: 'rgb(235,141,9)',
        borderWidth: 1
      },
    ];
  }
}
