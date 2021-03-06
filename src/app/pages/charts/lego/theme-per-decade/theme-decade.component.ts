import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {LegoChartComponent} from "../lego-chart.component";
import {ColorBlindService} from "../../../../services/color-blind.service";

@Component({
  selector: 'app-theme-decade',
  templateUrl: './theme-decade.component.html',
  styleUrls: ['./theme-decade.component.scss']
})
export class ThemeDecadeComponent extends LegoChartComponent implements OnInit {

  public currentThemes: string[];
  public colors: {[k: string]: string}[] = [
    {name: '', color: 'rgba(54,166,255, .5)', borderColor: 'rgb(54,166,255)'},
    {name: '', color: 'rgba(255,35,196, .5)', borderColor: 'rgb(255,35,196)'},
    {name: '', color: 'rgba(255,171,38, .5)', borderColor: 'rgb(255,171,38)'},
    {name: '', color: 'rgba(59,255,64, .5)', borderColor: 'rgb(40,176,48)'},
    {name: '', color: 'rgba(255,58,114, .5)', borderColor: 'rgb(255,58,114)'},
    {name: '', color: 'rgba(94,52,255, .5)', borderColor: 'rgb(94,52,255)'},
    {name: '', color: 'rgba(161,255,217, .5)', borderColor: 'rgb(161,255,217)'},
    {name: '', color: 'rgba(255, 227, 251, .5)', borderColor: 'rgb(255, 227, 251)'},
    {name: '', color: 'rgba(162,49,255, .5)', borderColor: 'rgb(162,49,255)'}
  ];

  public barChartOptions = {
    responsive: true,
    legend: false,
    animation: {
      duration: 2000
    }
  };

  constructor(private colorBlindService: ColorBlindService) {
    super();
  }

  ngOnInit(): void {

    d3.csv('assets/reduced_theme_decade.csv').then((data) => {

      // Group data by parent theme, take some random themes
      const dataByTheme = this.setInitialDataByTheme(data);
      this.data = dataByTheme;
      this.themes = Object.keys(dataByTheme);
      this.currentThemes = ['Train', 'Space', 'Pirates', 'Castle'];

      this.colorBlindService.colorBlindModeOn$.subscribe((res) => {
        this.colorBlindMode = res;
        const testData = this.currentThemes.map((t) => dataByTheme[t]);

        // set labels as years
        this.barChartLabels = this.setDecades( data.map((d) => d['decade']));

        // Make sure that the data corresponds with the correct decade, and that decades with no data have null values
        // todo: activate cbm again when its clear which pattern fits with which button
        this.barChartData = testData.map((d, i) => this.setData(d, this.themes.indexOf(d[0]['parent_theme_name']), /*res*/ false));
      });
    });
  }

  setTheme(theme: string): void {
    if (this.barChartData.map((d) => d['label']).includes(theme)) {
      this.currentThemes = this.currentThemes.filter((t) => t !== theme);
      this.barChartData = this.barChartData.filter((d) => d['label'] !== theme);
    } else {
      this.dataOfTheme = this.data[theme];
      this.currentThemes.push(theme);
      // todo: activate cbm again when its clear which pattern fits with which button
      this.barChartData.push(this.setData(this.data[theme], this.themes.indexOf(theme), /*this.colorBlindMode*/ false));
    }
  }

  setData(data: object[], colorIndex: number, colorBlindMode: boolean): object {
    const newData = this.barChartLabels.map((y) => {
      const val = data.find((decadeData) => decadeData['decade'] === y);
      return !!val ? val['set_num'] : null;
    });

    return {
      data: newData,
      label: data[0]['parent_theme_name'],
      backgroundColor: this.setColorBlindMode(this.colors[colorIndex]['color'], colorIndex, false, colorBlindMode),
      borderColor: this.colors[colorIndex]['borderColor'],
      pointBackgroundColor: this.colors[colorIndex]['borderColor'],
      lineTension: 0
    };
  }
}
