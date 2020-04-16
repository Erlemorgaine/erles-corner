import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Link} from "../../../../models/d3/link";
import {Node} from "../../../../models/d3/node";
import {ForceDirectedGraph} from "../../../../models/d3/force-directed-graph";
import {D3Service} from "../../../../services/d3.service";
import * as d3 from "d3";
import * as _ from 'lodash';

@Component({
  selector: 'app-force-directed-graph',
  templateUrl: './force-directed-graph.component.html',
  styleUrls: ['./force-directed-graph.component.scss']
})
export class ForceDirectedGraphComponent implements OnInit, AfterViewInit {

  @Input() nodes: Node[] = [];
  @Input() links: Link[] = [];

  graph: ForceDirectedGraph;
  _options: { width, height } = { width: 800, height: 600 };

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  constructor(private d3Service: D3Service, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this._options);
    const colors = {
      'taking_serious_mh_ph':'#ee9999',
      'having_mhi_hurts_career':'#99ccee',
      'discussing_mhd_neg_cons':'#a999ee',
      'discussing_phi_neg_cons':'#eecf99'
    };
    const questions = Object.keys(colors);

    Promise.all(
      questions.map((q) => d3.csv(`assets/mental-health/${q}.csv`))
        .concat(d3.csv(`assets/mental-health/all_questions.csv`))
    ).then((dataSets) => {
      dataSets.forEach((data, i1) => {
        if (!!questions[i1]) {
          const dataByAnswer = _.groupBy(data, d => d[questions[i1]]);
          const nodes = Object.keys(dataByAnswer).map((d, i2) => {
            const amountAnswered = dataByAnswer[d].reduce((a, b) => {
              return a + Number(b['amount'])
            }, 0);

            const radius = (amountAnswered / 9) + (10 - (amountAnswered / 300));
            return Object.assign(
              new Node(d, questions[i1], radius, colors[questions[i1]]),
              {x: 200 * (i2 + 1), y: 150 * (i1 + 1) - 50, vx: 0, vy: 0}
              );
          });

          // todo: nodes for different questions should have different colors
          // todo: show entire text, and space in a good way
          this.nodes = this.nodes.concat(nodes);

          // else condition is only entered when all nodes are made
        } else {
          let nodesToSearch = this.nodes;

          // for each node, find all rows that contain group & answer of node
          this.nodes.forEach((node) => {
            const dataForNode = data.filter((d) => d[node.group] === node.id);

            // for each question that is not the group of the current node, count amount of answer x
            questions.filter((q) => q !== node.group)
              .forEach((q) => {
                const answerCounts = {};

                dataForNode
                  .map((d) => d[q])
                  .forEach((a) => answerCounts[a] = (answerCounts[a] || 0) + 1)

                // for each answer, find the corresponding node and link the current node to the found node
                Object.keys(answerCounts).forEach((a) => {
                  const secondNode = nodesToSearch.find((n2) => n2.group === q && n2.id === a);

                  // todo: also determine thickness of line by amount of same answers
                  // todo: when hovering over a node, highlight connections
                  if (secondNode) {
                    this.links.push(new Link(
                      this.links.length,
                      node,
                      secondNode,
                      [colors[node.group], colors[secondNode.group]]
                    ));
                  }
                });
              })

            // filter out nodes that already have all connections
            nodesToSearch = nodesToSearch.filter((n) => n !== node);
          });
        }
      });
    });
  }

  ngAfterViewInit(): void {
    this.graph.initSimulation(this.options);
    this.changeDetectorRef.detectChanges();
  }
}
