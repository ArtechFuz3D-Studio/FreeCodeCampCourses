// import { Point } from "./helpers/primitives/point.js"
import { Polygon } from "./helpers/primitives/polygon.js";
import { Graph } from "./helpers/math/graph.js"
// import { Segment } from "./helpers/primitives/segment.js"
import { addRandomPoint, addRandomSegment, removeRandomSegment, removeRandomPoint, removeAll } from "./helpers/controls.js";
import { GraphEditor } from "./helpers/graphEditor.js";
import { Viewport } from "./helpers/viewport.js";
import { Envelope } from "./helpers/primitives/envelope.js";
import { World } from "./helpers/world.js";

// myCanvas.width = 600
// myCanvas.height = 600

const ctx = myCanvas.getContext("2d")

// removed after adding save function
// const p1 = new Point(200, 200)
// const p2 = new Point(500, 200)
// const p3 = new Point(400, 400)
// const p4 = new Point(100, 300)

// const s1 = new Segment(p1, p2)
// const s2 = new Segment(p1, p3)
// const s3 = new Segment(p1, p4)
// const s4 = new Segment(p2, p3)
// const s5 = new Segment(p4, p3)

const graphString = localStorage.getItem('graph')
const graphInfo = graphString ? JSON.parse(graphString) : null
// const graph = new Graph([p1, p2, p3, p4], [s1, s2, s3, s4, s5])
const graph = graphInfo
    ? Graph.load(graphInfo)
    :  new Graph()
    const world = new World(graph)
const viewport = new Viewport(myCanvas)
// const graphEditor = new GraphEditor(myCanvas, graph,)
const graphEditor = new GraphEditor(viewport, graph,)
// graph.draw(ctx)

animate()
function animate(){
    // ctx.restore()
    // ctx.clearRect(0,0,myCanvas.width, myCanvas.height)
    // ctx.save()
    // ctx.translate(viewport.center.x, viewport.center.y)
    // ctx.scale(1 / viewport.zoom, 1 / viewport.zoom)
    // const offset = viewport.getOffset()
    // ctx.translate(offset.x, offset.y)

    viewport.reset()
    world. generate()
    world.draw(ctx)
    graphEditor.display()

    // new Polygon(graph.points).draw(ctx)
    // new Envelope(graph.segments[0], 200, 20).draw(ctx)
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
// window.graphInfo = graphInfo

// Attach to the global scope
window.dispose = dispose;
window.save = save;


//
// Set up the event listener to add random points
addRandomPoint(graph, ctx, myCanvas);
addRandomSegment(graph, myCanvas, ctx)
removeRandomSegment(graph, myCanvas, ctx)
removeRandomPoint(graph, myCanvas, ctx)
removeAll(graph, myCanvas, ctx)
save(graph, myCanvas, ctx)
dispose(graph, myCanvas, ctx)
