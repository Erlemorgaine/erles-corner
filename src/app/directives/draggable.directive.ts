import {Directive, ElementRef, Input, OnInit} from "@angular/core";
import {D3Service} from "../services/d3.service";
import {ForceDirectedGraph} from "../models/d3/force-directed-graph";
import { Node } from '../models/d3/node';

@Directive({
  selector: '[draggableNode]'
})
export class DraggableDirective implements OnInit {
  @Input('draggableNode') draggableNode: Node;
  @Input('draggableInGraph') draggableInGraph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private _element: ElementRef) {}

  ngOnInit(): void {
    this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
  }
}
