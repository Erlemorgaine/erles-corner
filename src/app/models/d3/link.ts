import * as d3 from 'd3';
import {Node} from './node';

export class Link implements d3.SimulationLinkDatum<Node> {
  index?: number;
  source: Node;
  target: Node;
  colors: [string, string];
  amountForLink: number;
  hover: boolean = false;
  connecting: boolean = false;

  constructor(index, source, target, colors, amountForLink = 1) {
    this.index = index;
    this.source = source;
    this.target = target;
    this.colors = colors;
    this.amountForLink = amountForLink;
  }

  setHoverEffect(node: Node): Link {
    this.hover = true;
    if (this.source === node || this.target === node) {
      this.connecting = true;
    }

    return this;
  }

  restoreAfterHover(): Link {
    this.hover = false;
    this.connecting = false;
    return this;
  }
}
