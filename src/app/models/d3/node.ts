import * as d3 from 'd3';

export class Node implements d3.SimulationNodeDatum {
  id: string;
  group: string;
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  radius: string;
  color: string;

  constructor(id, group, radius, color) {
    this.id = id;
    this.group = group;
    this.radius = radius;
    this.color = color;
  }
}
