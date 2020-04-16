import {Injectable} from "@angular/core";
import * as d3 from 'd3';
import {Link} from "../models/d3/link";
import {Node} from "../models/d3/node";
import {ForceDirectedGraph} from "../models/d3/force-directed-graph";

@Injectable({
  providedIn: 'root',
})
export class D3Service {
  /** This service will provide methods to enable user interaction with elements
   * while maintaining the d3 simulations physics
   */
  constructor() {}

  /** A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehaviour(svgElement, containerElement) {
    const svg = d3.select(svgElement);
    let container = d3.select(containerElement);

    const zoomed = () => {
      const transform = d3.event.transform;
      container.attr("transform", "translate(" + transform.x + "," + transform.y + ") scale(" + transform.k + ")");
    }

    const zoom = d3.zoom().on("zoom", zoomed);
    svg.call(zoom);
  }

  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(element, node: Node, graph: ForceDirectedGraph) {
    const d3Element = d3.select(element);

    function started () {
      /** Preventing propagation of dragstart to parent elements */
      d3.event.sourceEvent.stopPropagation();

      if (!d3.event.active) {
        graph.simulation.alphaTarget(0.3).restart();
      }

      function dragged() {
        node.x = d3.event.x;
        node.y = d3.event.y;
      }

      function ended() {
        if (!d3.event.active) {
          graph.simulation.alphaTarget(-0.2);
        }
      }

      d3.event.on("drag", dragged).on("end", ended);
    }

    d3Element.call(d3.drag().on("start", started));
  }

  // TODO: MAKE IT WORK
  // problem is that i have no access to the links here (is outside of element)
  applyMouseOverBehaviour(element, node: Node, graph: ForceDirectedGraph) {
    const d3Element = d3.select(element);

    function fade(opacity) {
      return d => {
        graph.links = graph.links.map((l) => l.setHoverEffect(node));
        graph.nodes = graph.nodes.map((n) => n.setHoverColor(isConnected(node, n)));
      };
    }

    function mouseOut() {
      graph.nodes = graph.nodes.map((n) => n.restoreAfterHover());
      graph.links = graph.links.map((l) => l.restoreAfterHover());
    }

    function isConnected(a, b) {
      return linkedByIndex[`${a.index},${b.index}`] || linkedByIndex[`${b.index},${a.index}`] || a.index === b.index;
    }

    const linkedByIndex = {};

    graph.links.forEach(d => {
      linkedByIndex[`${d.source.index},${d.target.index}`] = 1;
    });

    d3Element
      .on('mouseover.fade', fade(0.1))
      .on('mouseout', mouseOut);
  }

  /** The interactable graph we will simulate in this article
   * This method does not interact with the document, purely physical calculations with d3
   */
  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width, height }) {
    return new ForceDirectedGraph(nodes, links, options);
  }
}
