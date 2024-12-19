import { Point } from "./helpers/primitives/point.js"
import { Graph } from "./helpers/math/graph.js"
import { Segment } from "./helpers/primitives/segment.js"
import { addRandomPoint, addRandomSegment, removeRandomSegment, removeRandomPoint, removeAll } from "./controls.js";

// myCanvas.width = 600
// myCanvas.height = 600

const ctx = myCanvas.getContext("2d")




const p1 = new Point(200, 200)
const p2 = new Point(500, 200)
const p3 = new Point(400, 400)
const p4 = new Point(100, 300)

const s1 = new Segment(p1, p2)
const s2 = new Segment(p1, p3)
const s3 = new Segment(p1, p4)
const s4 = new Segment(p2, p3)
const s5 = new Segment(p4, p3)

const graph = new Graph([p1, p2, p3, p4], [s1, s2, s3, s4, s5])
graph.draw(ctx)

//
// Expose graph to the global scope for debugging
window.graph = graph; // or globalThis.graph = graph
// or
// console.log(graph); // Prints the graph instance to the browser console
//

// Set up the event listener to add random points
addRandomPoint(graph, ctx, myCanvas);
addRandomSegment(graph, myCanvas, ctx)
removeRandomSegment(graph, myCanvas, ctx)
removeRandomPoint(graph, myCanvas, ctx)
removeAll(graph, myCanvas, ctx)