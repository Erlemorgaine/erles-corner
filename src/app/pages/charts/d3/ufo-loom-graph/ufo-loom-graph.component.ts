import {Component, OnInit} from '@angular/core';
import * as d3 from "d3";
import { loom } from "../../../../loom-package/loom.js";
import { string } from "../../../../loom-package/string.js";
import * as _ from 'lodash';

@Component({
  selector: 'app-ufo-loom',
  templateUrl: './ufo-loom-graph.component.svg',
  styleUrls: ['./ufo-loom-graph.component.scss']
})
export class UfoLoomGraphComponent implements OnInit {
  public data: {[k: string]: { state, shape, amountSightings }[]} = {};
  public states: string[] = [];
  public abbrToState = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'FL': 'Florida',
    'GA': 'Georgia',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MD': 'Maryland',
    'MA': 'Massachusetts',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming'
  };

  public prevSize: string;

  ngOnInit(): void {
    d3.csv("assets/ufo-data.csv").then((data) => {
      const dataByState = _.groupBy(
        data.map((d) => {
          d['state'] = !!this.abbrToState[d['state'].toUpperCase()] ? this.abbrToState[d['state'].toUpperCase()] : 'Canada';
          return d
        }),
          d => d['state']
      );

      this.states = Object.keys(dataByState).sort((a, b) => dataByState[a].length - dataByState[b].length);
      this.states.forEach((s) => dataByState[s] = _.groupBy(dataByState[s], d => d['shape']));

      const division = Math.floor(this.states.length / 3);

      const formattedData = _.flatten(this.states.map((st, i) => {
        const dataByShape = dataByState[st];

        return Object.keys(dataByShape)
          .map((sh) => ({
            state: st,
            shape: sh,
            amountSightings: dataByShape[sh].length
          }));
        }));

      const dataBySize = {
        small: formattedData.filter((d) => this.states.slice(0, division).includes(d["state"])),
        medium: formattedData.filter((d) => this.states.slice(division, division * 2).includes(d["state"])),
        large: formattedData.filter((d) => this.states.slice(division * 2, this.states.length).includes(d["state"]))
      }

      this.data = dataBySize;
      this.createSVG("large", dataBySize["large"]);
    });
  }

  createSVG(id: string, data: { state, shape, amountSightings }[]): void {
    d3.select('.ufo-graph-' + this.prevSize).remove();
    this.prevSize = id;

    const shapeByAmount = ['light', 'triangle', 'circle', 'fireball', 'unknown', 'other', 'sphere', 'disk', 'oval', 'formation', 'cigar', 'changing', 'flash', 'rectangle', 'cylinder', 'diamond', 'chevron', 'teardrop', 'egg', 'cone', 'cross', 'delta', 'round', 'crescent', 'pyramid', 'hexagon', 'changed', 'flare'];

    const colors = {}
    this.states.forEach((s, i) => {
      const amount = data.filter((d) => d.state === s)
        .reduce((a, b) => a + b['amountSightings'], 0);
      colors[s] = `rgb(${Math.round(90000 / amount)}, ${Math.round(s.length * 15)}, ${Math.round(amount / 20)})`
    });

    const innerRadius = 230;
    const loomGraph = loom()
      .value((d) => d.amountSightings)
      .inner((d) => d.shape)
      .outer((d) => d.state)
      .padAngle(0.07) // distance between two outer labels
      // these 3 are defaults
      .widthInner((d, i) => i + 20) // distance between inner labels and strings
      .heightInner(25) // distance between inner labels
      .emptyPerc(.5)
      .sortSubgroups((a, b) => shapeByAmount.indexOf(a) - shapeByAmount.indexOf(b))
      .sortLooms(d3.descending);

    const pullOutSize = 150;
    const loomString = string()
      .radius(innerRadius)
      // default values
      .pullout(pullOutSize)
      .thicknessInner(0.1);

    const arc = d3.arc()
      .innerRadius(innerRadius * 1.1)
      .outerRadius(240);

    const width = 1000;
    const height = 650;
    const svg = d3.select('.ufo-graph')
      .append('svg')
      .attr("class", "ufo-graph-" + id)
      .attr("width", width)
      .attr("height", height);

    const g = svg.append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .datum(loomGraph(data));

    const arcGroup = g.append("g").attr("class", "arc-outer-wrapper");
    const arcs = arcGroup.selectAll('.arc-wrapper')
      .data((d) => d.groups)
      .enter().append("g")
      .attr("class", "arc-wrapper")
      .each((d) => d['pullOutSize'] = ( pullOutSize * (d["startAngle"] > Math.PI + 1e-2 ? -1 : 1) ));

    arcs.append("path")
      .attr("class", "arc")
      .style("fill", (d) => colors[d["outername"]])
      .attr("d", arc)
      .attr("transform", (d, i) => "translate(" + d["pullOutSize"] + ',' + 0 + ")")

    const outerLabels = arcs.append("g")
      .each((d) => d["angle"] = ((d["startAngle"] + d["endAngle"]) / 2))
      .attr("class", "outer-labels")
      .attr("text-anchor", (d) => d["angle"] > Math.PI ? "end" : null)
      .attr("transform", (d, i) => {
        const c = arc.centroid(d as {innerRadius, outerRadius, startAngle, endAngle});
        return "translate(" + (c[0] + d["pullOutSize"]) + "," + c[1] + ")"
          + "rotate(" + (d["angle"] * 180 / Math.PI - 90) + ")"
          + "translate(" + 26 + ",0)"
          + (d["angle"] > Math.PI ? "rotate(180)" : "");
      })

    outerLabels.append("text")
      .attr("class", "outer-label")
      .attr("dy", ".35em")
      .style("fill", (d) => {
        const brighterColor = d3.color(colors[d["outername"]]).brighter(1.2);
        return `rgb(${brighterColor['r']}, ${brighterColor['g']}, ${brighterColor['b']})`;
      })
      .style("font-family", "Do Hyeon")
      .text((d) => d["outername"])
      .on("mouseover.highlight", highlight("outer"))
      .on('mouseout', hightlightOff(.85));

    outerLabels.append("text")
      .attr("class", "outer-label-value")
      .attr("dy", "1.5em")
      .style("fill", "#ffffff")
      .text((d) => d["value"])

    const stringGroup = g.append("g").attr("class", "string-wrapper")
    const strings = stringGroup.selectAll("path")
      .data((strings) => strings)
      .enter().append("path")
      .attr("class", "string")
      .style("fill", (d) => colors[d["outer"]["outername"]])
      .style("opacity", 0.85)
      .attr("d", loomString)

    const innerLabelGroup = g.append("g").attr("class", "inner-label-wrapper");

    //Place the inner text labels in the middle
    innerLabelGroup.selectAll("text")
      .data( (s) => s.innergroups)
      .enter().append("text")
      .attr("class", "inner-label")
      .attr("x",  (d) => d["x"])
      .attr("y",  (d) => d["y"])
      .attr("dy", ".35em")
      .attr("text-anchor", 'middle')
      .style("fill", "#ffffff")
      .style("font-family", "Do Hyeon")
      .text(d => d["name"])
      .on('mouseout', hightlightOff())
      .on('mouseover.highlight', highlight("inner"));

    function highlight(labelType) {
      return label => {
        strings
          .style("opacity", s => {
            const name = (labelType === "inner" ? "" : labelType) + "name";
            return s[labelType][name] === label[name] ? 1 : 0
          })
          .style("stroke", (d) => colors[d["outer"]["outername"]])
          .style("stroke-width", '.02em')
      }
    }

    function hightlightOff(opacity = 1) {
      return d => {
        strings.style("opacity", opacity)
          .style("stroke", 'none')
          .style("stroke-width", 0)
      }
    }
  }
}
