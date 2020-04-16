import {draw} from "patternomaly";
import * as _ from 'lodash';

export abstract class LegoChartComponent {

  public data: object;
  public dataOfTheme: object;
  public themes: string[];
  public colorBlindMode: boolean;

  public barChartOptions: object;
  public barChartLabels = [];
  public barChartData = [];
  public patterns: ('plus' | 'cross' | 'dash' | 'cross-dash' | 'dot' | 'dot-dash' | 'disc' | 'ring' | 'line' | 'line-vertical' | 'weave' | 'zigzag' | 'zigzag-vertical' | 'diagonal' | 'diagonal-right-left' | 'square' | 'box' | 'triangle' | 'triangle-inverted' | 'diamond' | 'diamond-box')[] = ['plus', 'cross', 'dash', 'cross-dash', 'dot', 'dot-dash', 'disc', 'ring', 'line', 'line-vertical', 'weave', 'zigzag', 'zigzag-vertical', 'diagonal', 'diagonal-right-left', 'square', 'box', 'triangle', 'triangle-inverted', 'diamond', 'diamond-box'];

  setInitialDataByTheme(data: object[]): object {
    return _.groupBy(
      data.filter((d) => !['Universal Building Set', 'Classic Town', 'Racers'].includes(d['parent_theme_name'])),
      d => d['parent_theme_name']
    );
  }

  setDecades(decades: string[]): string[] {
    return decades.filter((y, i) => decades.indexOf(y) === i)
      .sort((a, b) => Number(a) - Number(b));
  }

  setColorBlindMode(color: string, i: number, isWhite: boolean, colorBlindMode: boolean): string | CanvasPattern {
    if (colorBlindMode) {
      const factorIndexPatterns = i / (this.patterns.length - 1);
      const patternColor = isWhite ? 'black' : 'white';

      if (factorIndexPatterns > 1) {
        return draw(this.patterns[i - (this.patterns.length * Math.floor(factorIndexPatterns))], color, patternColor)
      }
      return draw(this.patterns[i], color, patternColor)
    }
    return color
  }
}
