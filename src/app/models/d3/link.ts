import * as d3 from 'd3';
import {Node} from './node';

export class Link implements d3.SimulationLinkDatum<Node> {
  index?: number;
  source: Node;
  target: Node;

  constructor(source, target) {
    this.source = source;
    this.target = target;
  }
}
