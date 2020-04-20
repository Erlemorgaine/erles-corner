import {Component, OnInit} from '@angular/core';
import {chartFontColor} from "../../chart-data";
import * as d3 from 'd3';
import * as _ from 'lodash';
import {LegoChartComponent} from "../lego-chart.component";
import {ColorBlindService} from "../../../../services/color-blind.service";

@Component({
  selector: 'app-colors-theme',
  templateUrl: './colors-theme.component.html',
  styleUrls: ['./colors-theme.component.scss']
})
export class ColorsThemeComponent extends LegoChartComponent implements OnInit {

  public currentTheme: string = 'Pirates';
  public decades: string[];
  public currentDecade: string = '1990s';
  public typingAnimation: boolean = true;

  public barChartOptions = {
    responsive: true,
    animation: {
      duration: 2000
    },
    ...chartFontColor('', false, 'left'),
  };

  constructor(private colorBlindService: ColorBlindService) {
    super();
  }

  ngOnInit(): void {

    d3.csv('assets/reduced_color_data.csv').then((data) => {

      // Group data by parent theme, group data from each parent theme by decade
      const dataByTheme = this.setInitialDataByTheme(data);
      const themes = Object.keys(dataByTheme);
      this.themes = themes;
      themes.forEach((k) => dataByTheme[k] = _.groupBy(dataByTheme[k], d => d['decade']));
      this.data = dataByTheme;

      this.colorBlindService.colorBlindModeOn$.subscribe((res) => {
        const dataOfTheme = this.sortTheme(dataByTheme[this.currentTheme]);

        this.dataOfTheme = dataOfTheme;
        this.decades = this.setDecades(Object.keys(dataOfTheme));
        this.barChartLabels = this.setLabels(dataOfTheme, this.currentDecade);

        this.colorBlindMode = res;
        this.setData(dataOfTheme, this.currentDecade, res);
      });
    });
  }

  // Sorts each decade by quantity of (colored) parts
  sortTheme(data: object): object {
    Object.keys(data).map((k) => data[k] = data[k]
      // reverse sort so that labels are more clearly ordered (large -> small)
      .sort((a, b) => -(a['part_quantity'] - b['part_quantity'])));

    return data;
  }

  setLabels(data: object, decade: string): string[] {
    return data[decade].map((d) => d['color_name']);
  }

  setTheme(theme: string): void {
    // hacky way to re-fire the typing animation
    this.typingAnimation = false;
    setTimeout(() => {this.typingAnimation = true}, 1);

    this.currentTheme = theme;
    const newData = this.sortTheme(this.data[theme]);
    this.dataOfTheme = newData;
    const decades = this.setDecades(Object.keys(newData));
    this.decades = decades;
    this.setOtherDecade(decades[0]);
  }

  setOtherDecade(decade: string): void {
    this.currentDecade = decade;
    this.setData(this.dataOfTheme, decade, this.colorBlindMode);
    this.barChartLabels = this.setLabels(this.dataOfTheme, decade);
  }

  setData(data: object, decade: string, colorBlindMode: boolean): void {
    this.barChartData = [{
      data: data[decade].map((d) => d['part_quantity']),
      backgroundColor: data[decade].map((d, i) => {
        return this.setColorBlindMode(
          '#' + d['rgb'],
          i,
          ['White', 'Trans-Clear'].includes(d['color_name']),
          colorBlindMode
        );
      }),
      borderWidth: 0
    }];
  }
}
