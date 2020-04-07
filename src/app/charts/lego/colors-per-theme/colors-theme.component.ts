import {Component, OnInit} from '@angular/core';
import {chartFontColor} from "../../chart-data";
import * as d3 from 'd3';
import * as _ from 'lodash';
import {draw} from "patternomaly";
// import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-colors-theme',
  templateUrl: './colors-theme.component.html',
  styleUrls: ['./colors-theme.component.scss']
})
export class ColorsThemeComponent implements OnInit {

  public colorBlindMode: boolean = false;
  public data: object;
  public dataOfTheme: object;
  public decades: string[];
  public themes: string[];
  public currentDecade: string = '1990';
  public currentTheme: string = 'Space';

  public barChartOptions = {
    responsive: true,
    animation: {
      duration: 2000
    },
    ...chartFontColor('', false, 'left')
  };

  public barChartLabels = [];
  public barChartData = [];
  public patterns: ('plus' | 'cross' | 'dash' | 'cross-dash' | 'dot' | 'dot-dash' | 'disc' | 'ring' | 'line' | 'line-vertical' | 'weave' | 'zigzag' | 'zigzag-vertical' | 'diagonal' | 'diagonal-right-left' | 'square' | 'box' | 'triangle' | 'triangle-inverted' | 'diamond' | 'diamond-box')[] = ['plus', 'cross', 'dash', 'cross-dash', 'dot', 'dot-dash', 'disc', 'ring', 'line', 'line-vertical', 'weave', 'zigzag', 'zigzag-vertical', 'diagonal', 'diagonal-right-left', 'square', 'box', 'triangle', 'triangle-inverted', 'diamond', 'diamond-box'];

  ngOnInit(): void {

    d3.csv('assets/reduced_color_data.csv').then((data) => {

      // Group data by parent theme, group data from each parent theme by decade
      const dataByTheme = _.groupBy(
        data.filter((d) => !['Universal Building Set', 'Classic Town', 'Racers'].includes(d['parent_theme_name'])),
          d => d['parent_theme_name']
      );
      const themes = Object.keys(dataByTheme);
      this.themes = themes;
      themes.forEach((k) => dataByTheme[k] = _.groupBy(dataByTheme[k], d => d['decade']));
      this.data = dataByTheme;

      const dataOfTheme = this.sortTheme(dataByTheme[this.currentTheme]);

      this.dataOfTheme = dataOfTheme;
      this.decades = this.setDecades(dataOfTheme);
      this.barChartLabels = this.setLabels(dataOfTheme, this.currentDecade);
      this.setData(dataOfTheme, this.currentDecade);
    });
  }

  // Sorts each decade by quantity of (colored) parts
  sortTheme(data: object): object {
    Object.keys(data).map((k) => data[k] = data[k]
      // reverse sort so that labels are more clearly ordered (large -> small)
      .sort((a, b) => -(a['part_quantity'] - b['part_quantity'])));

    return data;
  }

  setDecades(data: object): string[] {
    const decades = Object.keys(data);
    return decades.filter((y, i) => decades.indexOf(y) === i)
      .sort((a, b) => Number(a) - Number(b));
  }

  setLabels(data: object, decade: string): string[] {
    return data[decade].map((d) => d['color_name']);
  }

  toggleColorBlindMode(): void {
    this.colorBlindMode = !this.colorBlindMode;
    this.setData(this.dataOfTheme, this.currentDecade, this.colorBlindMode);
  }

  setData(data: object, decade: string, colorBlindMode: boolean = false): void {
    this.barChartData = [{
      data: data[decade].map((d) => d['part_quantity']),
      label: 'test',
      backgroundColor: data[decade].map((d, i) => {
        if (colorBlindMode) {
          const factorIndexPatterns = i / (this.patterns.length - 1);
          const patternColor = ['White', 'Trans-Clear'].includes(d['color_name']) ? 'black' : 'white';

          if (factorIndexPatterns > 1) {
            return draw(this.patterns[i - (this.patterns.length * Math.floor(factorIndexPatterns))], '#' + d['rgb'], patternColor)
          }
          return draw(this.patterns[i], '#' + d['rgb'], patternColor)
        }
        return '#' + d['rgb']
      }),
      borderWidth: 0
    }];
  }

  setTheme(theme: string): void {
    this.currentTheme = theme;
    const newData = this.sortTheme(this.data[theme]);
    this.dataOfTheme = newData;
    const decades = this.setDecades(newData);
    this.decades = decades;
    this.setOtherDecade(decades[0]);
  }

  setOtherDecade(decade: string): void {
    this.currentDecade = decade;
    this.barChartLabels = this.setLabels(this.dataOfTheme, decade);
    this.setData(this.dataOfTheme, decade);
  }
}
