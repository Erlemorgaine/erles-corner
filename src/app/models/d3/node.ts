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
  colorBackup: string;
  opacity: number = 1;

  constructor(id, group, amountAnswered, color) {
    this.id = id;
    this.group = group;
    this.amountAnswered = amountAnswered;
    this.color = color;

    this.calculateRadius(amountAnswered);
  }

  private calculateRadius(amountAnswered): void {
    this.radius = ((amountAnswered / 9) + (10 - (amountAnswered / 300))).toString();
  }

  setHoverColor(connected: boolean): Node {
    this.colorBackup = this.color;

    this.color = connected ? '#ffffff' : this.color;
    this.opacity = connected ? 1 : .5;
    return this;
  }

  restoreAfterHover(): Node {
    this.color = this.colorBackup;
    this.opacity = 1;
    return this;
  }
}
