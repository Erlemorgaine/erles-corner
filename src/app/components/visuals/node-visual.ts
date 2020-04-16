import {Component, Input} from '@angular/core';
import {Node} from "../../models/d3/node";

@Component({
  selector: '[nodeVisual]',
  templateUrl: `./node-visual.svg`
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
}
