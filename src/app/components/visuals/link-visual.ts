import {Component, Input} from '@angular/core';
import {Node} from "../../models/d3/node";
import {Link} from "../../models/d3/link";

@Component({
  selector: '[linkVisual]',
  templateUrl: `./link-visual.svg`
})
export class LinkVisualComponent {
  @Input('linkVisual') link: Link;
}
