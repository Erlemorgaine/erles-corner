import {Component, OnInit} from '@angular/core';
import {titleOptions} from "../../chart-data";
import * as d3 from 'd3';
import * as _ from 'lodash';

@Component({
  selector: 'app-theme-decade',
  templateUrl: './theme-decade.component.html',
  styleUrls: ['./theme-decade.component.scss']
})
export class ThemeDecadeComponent implements OnInit {
  public barChartOptions = {
    responsive: true,
    animation: {
      duration: 2000
    },
    // todo my own title with some explanation?
    title: {
      ...titleOptions,
      text: 'Amount of Lego sets per theme'
    }
  };

  public barChartLabels = [];

  public barChartData = [];

  ngOnInit(): void {

    d3.csv('assets/sets_parent_theme_decade.csv').then((data) => {
       // set labels as years
      let years = data.map((d) => d['decade']);
      years = years.filter((y, i) => years.indexOf(y) === i)
        .sort((a, b) => Number(a) - Number(b));

      this.barChartLabels = years;

      // Group data by parent theme, take some random themes
      const dataByTheme = _.groupBy(data, d => d['parent_theme_name']);
      const testData = [dataByTheme['Train'], dataByTheme['Space'], dataByTheme['Pirates'], dataByTheme['Castle']];

      // Make sure that the data corresponds with the correct decade, and that decades with no data have null values
      this.barChartData = testData.map((d, i) => {
        const data = years.map((y) => {
          const val = d.find((decadeData) => decadeData['decade'] === y);
          return !!val ? val['set_num'] : null;
        });

        return {
          data,
          label: d[0]['parent_theme_name'],
          backgroundColor: `rgba(${i * 50},48,77,0.7)`,
          borderColor: `rgba(${i * 50},48,77)`
        };
      });
    });
  }
}
