

import { Graph } from "./helpers/math/graph.js"
import { addRandomPoint, addRandomSegment, removeRandomSegment, removeRandomPoint, removeAll, setMode, disableEditors, save, dispose } from "./helpers/controls.js";
import { GraphEditor } from "./editors/graphEditor.js";
import { StopEditor } from "./editors/stopEditor.js";
import { CrossingEditor } from "./editors/crossingEditor.js";
import { StartEditor } from "./editors/startEditor.js";
import { Viewport } from "./helpers/viewport.js";
import { World } from "./helpers/world.js";
import { scale } from "./helpers/math/utils.js";

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

// document.getElementById("graphBtn").addEventListener("click", () => {
// const graphBtn = document.getElementById("graphBtn");
// graphBtn.setMode('graph')
// })
// document.getElementById("stopBtn").addEventListener("click", () => {
//     const stopBtn = document.getElementById("stopBtn");
//     stopBtn.setMode('stop')
// })
// document.getElementById("crossingBtn").addEventListener("click", () => {
//     const crossingBtn = document.getElementById("crossingBtn");
//     crossingBtn.setMode('crossing')
// })
// document.getElementById("startBtn").addEventListener("click", () => {
//     const startBtn = document.getElementById("startBtn");
//     startBtn.setMode('start')
// })
// let stop = "stop"
// let start = "start"
// let crossing = "crossing"
// document.getElementById("graphBtn").addEventListener("click", () => setMode('graph'));
// document.getElementById("stopBtn").addEventListener("click", () => setMode('stop'));
// document.getElementById("crossingBtn").addEventListener("click", () => setMode('crossing'));
// document.getElementById("startBtn").addEventListener("click", () => setMode('start'));
// export const tools = {
//     graph: { button: document.getElementById("graphBtn"), editor: new GraphEditor(viewport, graph) },
//     stop: { button: document.getElementById("stopBtn"), editor: new StopEditor(viewport, world) },
//     crossing: { button: document.getElementById("crossingBtn"), editor: new CrossingEditor(viewport, world) },
//     start: { button: document.getElementById("startBtn"), editor: new StartEditor(viewport, world) },
// };


// export const tools = {
//     graph: { button: graphBtn, editor: new GraphEditor(viewport, graph) },
//     stop: { button: stopBtn, editor: new StopEditor(viewport, world) },
//     crossing: { button: crossingBtn, editor: new CrossingEditor(viewport, world) },
//     start: { button: startBtn, editor: new StartEditor(viewport, world) },
// }

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded. Initializing tools...");

    const tools = {
        graph: { button: document.getElementById("graphBtn"), editor: new GraphEditor(viewport, graph) },
        stop: { button: document.getElementById("stopBtn"), editor: new StopEditor(viewport, world) },
        crossing: { button: document.getElementById("crossingBtn"), editor: new CrossingEditor(viewport, world) },
        start: { button: document.getElementById("startBtn"), editor: new StartEditor(viewport, world) },
    };

    // Expose tools globally
    window.tools = tools;

    // Set up mode switching
    document.getElementById("graphBtn").addEventListener("click", () => setMode("graph"));
    document.getElementById("stopBtn").addEventListener("click", () => setMode("stop"));
    document.getElementById("crossingBtn").addEventListener("click", () => setMode("crossing"));
    document.getElementById("startBtn").addEventListener("click", () => setMode("start"));

    // Initialize the first mode
    setMode("graph");
});


let oldGraphHash = graph.hash()
// setMode("graph")

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
    for (const tool of Object.values(tools)) {
        tool.editor.display(ctx)
    }
    requestAnimationFrame(animate)
}

window.graph = graph; 
window.ctx = ctx
window.graph = graph;
window.viewport = viewport;
window.graphString = graphString
window.graphInfo = graphInfo
window.world = world
window.dispose = dispose;
window.save = save;
window.setMode = setMode
window.disableEditors = disableEditors
window.start = start
window.stop = stop
window.crossing = crossing

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


