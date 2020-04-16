import * as d3 from 'd3';
import {Node} from './node';

export class Link implements d3.SimulationLinkDatum<Node> {
  index?: number;
  source: Node;
  target: Node;
  colors: [string, string];
  colorsBackup: [string, string];
  amountForLink: number;

  constructor(index, source, target, colors, amountForLink = 1) {
    this.index = index;
    this.source = source;
    this.target = target;
    this.colors = colors;
    this.amountForLink = amountForLink;
  }

  setHoverEffect(node: Node): Link {
    this.colorsBackup = this.colors;

    if (this.source === node || this.target === node) {
      this.colors = ['#ffffff', '#ffffff'];
    }

    return this;
  }

  restoreAfterHover(): Link {
    this.colors = this.colorsBackup;
    return this;
  }
}
