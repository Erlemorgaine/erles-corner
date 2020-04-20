import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Link} from "../../../../models/d3/link";
import {Node} from "../../../../models/d3/node";
import {ForceDirectedGraph} from "../../../../models/d3/force-directed-graph";
import {D3Service} from "../../../../services/d3.service";
import * as d3 from "d3";
import * as _ from 'lodash';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-force-directed-graph',
  templateUrl: './force-directed-graph.component.html',
  styleUrls: ['./force-directed-graph.component.scss']
})
export class ForceDirectedGraphComponent implements OnInit, AfterViewInit {

  nodes: Node[] = [];
  links: Link[] = [];
  questions: string[][] = [
    ['taking_serious_mh_ph', 'Do you feel that your employer takes mental health as seriously as physical health?'],
    ['having_mhi_hurts_career', 'Do you feel that being identified as a person with a mental health issue would hurt your career?'],
    ['discussing_mhd_neg_cons', 'Do you think that discussing a mental health disorder with your employer would have negative consequences?'],
    ['discussing_phi_neg_cons', 'Do you think that discussing a physical health issue with your employer would have negative consequences?']
  ];

  colors: {} = {
    [this.questions[0][0]]: ['#8b2020', '#e42e2d'],
    [this.questions[1][0]]: ['#0a4a76', '#2f76ce'],
    [this.questions[2][0]]: ['#1c067b', '#5B00FE'],
    [this.questions[3][0]]: ['#9a3f08', '#e77008']
  };

  hoverGroup: string;
  graph$: BehaviorSubject<ForceDirectedGraph> = new BehaviorSubject(null);
  options: { width, height } = { width: 800, height: 600 };

  constructor(private d3Service: D3Service, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    const questions = Object.keys(this.colors);

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

            return Object.assign(
              new Node(d, questions[i1], amountAnswered, this.colors[questions[i1]][0], this.colors[questions[i1]][1]),
              {x: 200 * (i2 + 1), y: 180 * (i1 + 1) - 50, vx: 0, vy: 0}
              );
          });

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

                  // todo: when hovering over a node, highlight connections
                  if (secondNode) {
                    this.links.push(new Link(
                      this.links.length,
                      node,
                      secondNode,
                      [this.colors[node.group][0], this.colors[secondNode.group][0]],
                      answerCounts[a]
                    ));
                  }
                });
              })

            // filter out nodes that already have all connections
            nodesToSearch = nodesToSearch.filter((n) => n !== node);
          });
        }
      });

      this.graph$.next(this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options));
    });
  }

  ngAfterViewInit(): void {
    this.graph$.subscribe((g) => {
      if (g) {
        g.initSimulation(this.options);
        this.changeDetectorRef.detectChanges();
      }
    })
  }

  highlightQuestion(group: string): void {
    this.hoverGroup = group;
  }
}
