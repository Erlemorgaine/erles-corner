import {ElementRef, EventEmitter, ViewChild} from '@angular/core';
import { Link } from './link';
import { Node } from './node';
import * as d3 from 'd3';

const FORCES = {
  LINKS: 1 / 1500,
  COLLISION: 1,
  CHARGE: 0
};

export class ForceDirectedGraph {
  public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
  public simulation: d3.Simulation<any, any>;

  public nodes: Node[] = [];
  public links: Link[] = [];

  constructor(nodes, links, options: {width, height}) {
    this.nodes = nodes;
    this.links = links;

    this.initSimulation(options);
  }

  initNodes() {
    if (!this.simulation) {
      throw new Error("Simulation not initialized yet");
    }

    this.simulation?.nodes(this.nodes);
  }

  initLinks() {
    if (!this.simulation) {
      throw new Error("Simulation not initialized yet");
    }

    this.simulation.force(
      'links',
      d3.forceLink(this.links).strength(FORCES.LINKS)
    );
  }

  initSimulation(options) {
    if (!options || !options.width || !options.height) {
      throw new Error("Missing options");
    }

    if (!this.simulation) {
      const ticker = this.ticker;

      this.simulation = d3.forceSimulation()
        .force("charge", d3.forceManyBody().strength(FORCES.CHARGE));

      this.simulation.on('tick', () => ticker.emit(this.simulation));

      this.initNodes();
      this.initLinks();
    }

    this.simulation.force("centers", d3.forceCenter(options.width / 2.5, options.height / 2));
    this.simulation.restart();
  }
}
