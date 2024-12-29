import { Graph } from "./helpers/math/graph.js"
import { addRandomPoint, addRandomSegment, removeRandomSegment, removeRandomPoint, removeAll, setMode, disableEditors } from "./helpers/controls.js";
import { GraphEditor } from "./editors/graphEditor.js";
import { StopEditor } from "./editors/stopEditor.js";
import { CrossingEditor } from "./editors/crossingEditor.js";
import { StartEditor } from "./editors/startEditor.js";
import { Viewport } from "./helpers/viewport.js";
import { World } from "./helpers/world.js";
import { scale } from "./helpers/math/utils.js";
import { save, dispose } from "./helpers/controls.js";


myCanvas.width = 1000
myCanvas.height = 600

export const ctx = myCanvas.getContext("2d")

export const graphString = localStorage.getItem('graph')
export const graphInfo = graphString ? JSON.parse(graphString) : null
export const graph = graphInfo
    ? Graph.load(graphInfo)
    :  new Graph()
export const world = new World(graph)

export const viewport = new Viewport(myCanvas)
// export const graphEditor = ;
// export const stopEditor = 
// export const crossingEditor = 
export const tools = {
    graph: { button: document.getElementById("graphBtn"), editor: new GraphEditor(viewport, graph) },
    stop: { button: document.getElementById("stopBtn"), editor: new StopEditor(viewport, world) },
    crossing: { button: document.getElementById("crossingBtn"), editor: new CrossingEditor(viewport, world) },
    start: { button: document.getElementById("startBtn"), editor: new StartEditor(viewport, world) },
    // graph: { button: graphBtn, editor: new GraphEditor(viewport, graph) },
    // stop: { button: stopBtn, editor: new StopEditor(viewport, world) },
    // crossing: { button: crossingBtn, editor: new CrossingEditor(viewport, world) },
    // start: { button: startBtn, editor: new StartEditor(viewport, world) },
    // parking: { button: parkingBtn, editor: new ParkingEditor(viewport, world) },
    // light: { button: lightBtn, editor: new LightEditor(viewport, world) },
    // target: { button: targetBtn, editor: new TargetEditor(viewport, world) },
    // yield: { button: yieldBtn, editor: new YieldEditor(viewport, world) },

}

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

    // this loop will check over the editors, its a refactor to clean up code
    for (const tool of Object.values(tools)) {
        tool.editor.display(ctx)
    }
    // graphEditor.display(ctx)
    // stopEditor.display(ctx)
    // crossingEditor.display(ctx)
    requestAnimationFrame(animate)
}


// moved to controls
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
// window.graphEditor = graphEditor;
// window.stopEditor = stopEditor;
// window.crossingEditor = crossingEditor
window.viewport = viewport;
window.graphString = graphString
window.graphInfo = graphInfo
window.world = world
// window.graphInfo = graphInfo
window.dispose = dispose;
window.save = save;
window.setMode = setMode
window.disableEditors = disableEditors
window.tools = tools



// Set up the event listeners must be called in main from controls
addRandomPoint(graph, ctx, myCanvas);
addRandomSegment(graph, myCanvas, ctx)
removeRandomSegment(graph, myCanvas, ctx)
removeRandomPoint(graph, myCanvas, ctx)
removeAll(graph, myCanvas, ctx)
save(graph, myCanvas, ctx)
dispose(graph, myCanvas, ctx)
setMode(graph)
disableEditors()
// graphEditor(viewport, graph)
// stopEditor(viewport, world)
// crossingEditor(viewport, world)

