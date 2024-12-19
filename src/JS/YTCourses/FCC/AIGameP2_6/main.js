// import { Point } from "./helpers/primitives/point.js"
// import { Polygon } from "./helpers/primitives/polygon.js";
import { Graph } from "./helpers/math/graph.js"
// import { Segment } from "./helpers/primitives/segment.js"
import { addRandomPoint, addRandomSegment, removeRandomSegment, removeRandomPoint, removeAll } from "./helpers/controls.js";
import { GraphEditor } from "./helpers/graphEditor.js";
import { Viewport } from "./helpers/viewport.js";
// import { Envelope } from "./helpers/primitives/envelope.js";
import { World } from "./helpers/world.js";
import { scale } from "./helpers/math/utils.js";

myCanvas.width = 600
myCanvas.height = 600

const ctx = myCanvas.getContext("2d")

const graphString = localStorage.getItem('graph')
const graphInfo = graphString ? JSON.parse(graphString) : null
const graph = graphInfo
    ? Graph.load(graphInfo)
    :  new Graph()
const world = new World(graph)
const viewport = new Viewport(myCanvas)
const graphEditor = new GraphEditor(viewport, graph,)

let oldGraphHash = graph.hash()
animate()
function animate(){
    viewport.reset()
    if (graph.hash() != oldGraphHash) {
        world. generate()
        oldGraphHash = graph.hash()
    }
    const viewPoint = scale(viewport.getOffset(), -1)
    world.draw(ctx, viewPoint)
    ctx.globalAlpha = 0.4;
    graphEditor.display(ctx)
    requestAnimationFrame(animate)
}

export function dispose() {
    document.getElementById("dispose").addEventListener("click", () => {
    graphEditor.dispose()
}
)}
export function save(graph){
    document.getElementById("save").addEventListener("click", () => {
        localStorage.setItem("graph", JSON.stringify(graph))
    })

}
//
// Expose graph to the global scope for debugging
window.graph = graph; // or globalThis.graph = graph
window.ctx = ctx
// or
// console.log(graph); // Prints the graph instance to the browser console

// Expose variables globally for debugging
// window.p1 = p1;
// window.p2 = p2;
// window.p3 = p3;
// window.p4 = p4;
// window.graph = graph;
window.graphEditor = graphEditor;
window.viewport = viewport;
window.graphString = graphString
window.graphInfo = graphInfo
window.world = world
// window.graphInfo = graphInfo
window.dispose = dispose;
window.save = save;

// Set up the event listener to add random points
addRandomPoint(graph, ctx, myCanvas);
addRandomSegment(graph, myCanvas, ctx)
removeRandomSegment(graph, myCanvas, ctx)
removeRandomPoint(graph, myCanvas, ctx)
removeAll(graph, myCanvas, ctx)
save(graph, myCanvas, ctx)
dispose(graph, myCanvas, ctx)
