// import { Point } from "./helpers/primitives/point.js"
// import { Polygon } from "./helpers/primitives/polygon.js";
import { Graph } from "./helpers/math/graph.js"
// import { Segment } from "./helpers/primitives/segment.js"
import { addRandomPoint, addRandomSegment, removeRandomSegment, removeRandomPoint, removeAll, setMode, disableEditors } from "./helpers/controls.js";
import { GraphEditor } from "./helpers/graphEditor.js";
import { Viewport } from "./helpers/viewport.js";
// import { Envelope } from "./helpers/primitives/envelope.js";
import { World } from "./helpers/world.js";
import { scale } from "./helpers/math/utils.js";
import { save, dispose } from "./helpers/controls.js";


myCanvas.width = 1000
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

setMode("graph")

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

// export function dispose() {
//     document.getElementById("dispose").addEventListener("click", () => {
//     graphEditor.dispose()
// }
// )}
// export function save(graph){
//     document.getElementById("save").addEventListener("click", () => {
//         localStorage.setItem("graph", JSON.stringify(graph))
//     })

// }
//
// Expose graph to the global scope for debugging
window.graph = graph; // or globalThis.graph = graph
window.ctx = ctx
// or
// console.log(graph); // Prints the graph instance to the browser console

// Expose variables globally
// variables declared in main must be given window to express themselves

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
window.setMode = setMode
window.disableEditors = disableEditors

// Set up the event listeners must be called in main from controls
addRandomPoint(graph, ctx, myCanvas);
addRandomSegment(graph, myCanvas, ctx)
removeRandomSegment(graph, myCanvas, ctx)
removeRandomPoint(graph, myCanvas, ctx)
removeAll(graph, myCanvas, ctx)
save(graph, myCanvas, ctx)
dispose(graph, myCanvas, ctx)
setMode()
disableEditors()
