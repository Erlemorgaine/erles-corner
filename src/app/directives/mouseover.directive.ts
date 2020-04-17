import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from "@angular/core";
import {D3Service} from "../services/d3.service";
import {ForceDirectedGraph} from "../models/d3/force-directed-graph";
import { Node } from '../models/d3/node';

@Directive({
  selector: '[mouseOverNode]'
})
export class MouseOverDirective implements OnInit {
  @Input('mouseOverNode') mouseOverNode: Node;
  @Input('mouseOverInGraph') mouseOverInGraph: ForceDirectedGraph;

  @Output('mouseOver') mouseOver: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('mouseover') onMouseOver() {
    this.mouseOver.emit(this.mouseOverNode.group);
  }

  constructor(private d3Service: D3Service, private _element: ElementRef) {}

  ngOnInit(): void {
    this.d3Service.applyMouseOverBehaviour(this._element.nativeElement, this.mouseOverNode, this.mouseOverInGraph);
  }
}