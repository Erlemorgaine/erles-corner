import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Link} from "../../../../models/d3/link";
import {Node} from "../../../../models/d3/node";
import {ForceDirectedGraph} from "../../../../models/d3/force-directed-graph";
import {D3Service} from "../../../../services/d3.service";
import * as d3 from "d3";
import * as _ from 'lodash';

@Component({
  selector: 'app-ufo-loom',
  templateUrl: './ufo-loom-graph.component.html',
  styleUrls: ['./ufo-loom-graph.component.scss']
})
export class UfoLoomGraphComponent {
}
