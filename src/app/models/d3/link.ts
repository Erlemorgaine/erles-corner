import * as d3 from 'd3';
import {Node} from './node';

export class Link implements d3.SimulationLinkDatum<Node> {
  index?: number;
  source: Node;
  target: Node;
  colors: [string, string];

  constructor(index, source, target, colors) {
    this.index = index;
    this.source = source;
    this.target = target;
    this.colors = colors;
  }
}
