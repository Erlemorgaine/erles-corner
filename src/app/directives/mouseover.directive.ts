import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from "@angular/core";
import {D3Service} from "../services/d3.service";
import {ForceDirectedGraph} from "../models/d3/force-directed-graph";
import { Node } from '../models/d3/node';

@Directive({
  selector: '[mouseOverInGraph]'
})
export class MouseOverDirective implements OnInit {
  @Input('mouseOverNode') mouseOverNode: Node;
  @Input('mouseOverQuestion') mouseOverQuestion: string;
  @Input('mouseOverInGraph') mouseOverInGraph: ForceDirectedGraph;

  @Output('mouseOver') mouseOver: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('mouseover') onMouseOver() {
    if (!!this.mouseOverNode) {
      this.mouseOver.emit(this.mouseOverNode.group);
    }
  }

  @HostListener('mouseout') onMouseOut() {
    this.mouseOver.emit(null);

    // if (!!this.mouseOverQuestion) {
    //   this.mouseOverInGraph.nodes = this.mouseOverInGraph.nodes.map((n) => {
    //     n.hover = false;
    //     n.connected = false;
    //     return n;
    //   })
    // }
  }

  constructor(private d3Service: D3Service, private _element: ElementRef) {}

  ngOnInit(): void {
    if (!!this.mouseOverNode) {
      this.d3Service.applyMouseOverBehaviour(this._element.nativeElement, this.mouseOverInGraph,  this.mouseOverNode);
    }
  }
}
