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
  amountAnswered: number;
  radius: string;
  color: string;
  hoverColor: string;
  hover: boolean;
  connected: boolean;

  constructor(id, group, amountAnswered, color, hoverColor) {
    this.id = id;
    this.group = group;
    this.amountAnswered = amountAnswered;
    this.color = color;
    this.hoverColor = hoverColor;

    this.calculateRadius(amountAnswered);
  }

  private calculateRadius(amountAnswered): void {
    this.radius = ((amountAnswered / 9) + (10 - (amountAnswered / 300))).toString();
  }

  setHoverEffect(connected: boolean): Node {
    this.hover = true;
    this.connected = connected;
    return this;
  }

  restoreAfterHover(): Node {
    this.hover = false;
    this.connected = false;
    return this;
  }
}
