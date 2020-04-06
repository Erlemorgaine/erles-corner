import {Component, OnInit} from '@angular/core';
import {chartFontColor} from "../../chart-data";
import * as d3 from 'd3';
import * as _ from 'lodash';
// import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-colors-theme',
  templateUrl: './colors-theme.component.html',
  styleUrls: ['./colors-theme.component.scss']
})
export class ColorsThemeComponent implements OnInit {

  public data: object;
  public currentDecade: string = '1990';
  public decades: string[];

  public barChartOptions = {
    responsive: true,
    animation: {
      duration: 2000
    },
    // todo my own title with some explanation?
    ...chartFontColor('', false, 'left')
  };

  public barChartLabels = [];
  public barChartData = [];

  ngOnInit(): void {

    d3.csv('assets/amount_parts_color_decade_parent_theme.csv').then((data) => {

      // Group data by parent theme, group data from each parent theme by decade
      const dataByTheme = _.groupBy(data, d => d['parent_theme_name']);
      Object.keys(dataByTheme).forEach((k) => dataByTheme[k] = _.groupBy(dataByTheme[k], d => d['decade']));

      // Pick random theme, sort each decade by quantity of (colored) parts
      // todo: be able to choose theme
      const testData = dataByTheme['Space'];

      Object.keys(testData).map((k) => testData[k] = testData[k]
        // reverse sort so that labels are more clearly ordered (large -> small)
        .sort((a, b) => -(a['part_quantity'] - b['part_quantity'])));

      this.data = testData;
      this.setDecades(testData);
      this.setLabels(testData, this.currentDecade);
      this.setData(testData, this.currentDecade);

      console.log(testData);
    });
  }

  setDecades(data: object): void {
    const decades = Object.keys(data);
    this.decades = decades.filter((y, i) => decades.indexOf(y) === i)
      .sort((a, b) => Number(a) - Number(b));
  }

  setLabels(data: object, decade: string): void {
    this.barChartLabels = data[decade].map((d) => d['color_name']);
  }

  setData(data: object, decade: string): void {
    this.barChartData = [{
      data: data[decade]
        .map((d) => d['part_quantity']),
      label: 'test',
      backgroundColor: data[decade].map((d) => '#' + d['rgb']),
      borderWidth: 0
    }];
  }

  setOtherDecade(decade: string): void {
    this.currentDecade = decade;
    this.setLabels(this.data, decade);
    this.setData(this.data, decade);
  }
}
