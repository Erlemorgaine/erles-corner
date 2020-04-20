import {Component, Input, OnInit} from '@angular/core';
import {Node} from "../../models/d3/node";
import {respondents} from "../../models/d3/force-directed-graph";

@Component({
  selector: '[nodeVisual]',
  templateUrl: `./node-visual.svg`
})
export class NodeVisualComponent implements OnInit {
  @Input('nodeVisual') node: Node;

  public percentage: number;

  ngOnInit(): void {
    this.percentage = Math.round(this.node.amountAnswered / respondents * 100);
  }
}
