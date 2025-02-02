import { Graph } from "./helpers/math/graph.js"
import { addRandomPoint, addRandomSegment, removeRandomSegment, removeRandomPoint, removeAll, setMode,  save, dispose, disableEditors } from "./helpers/controls.js";
import { GraphEditor } from "./editors/graphEditor.js";
import { StopEditor } from "./editors/stopEditor.js";
import { CrossingEditor } from "./editors/crossingEditor.js";
import { StartEditor } from "./editors/startEditor.js";
import {ParkingEditor} from "./editors/parkingEditor.js"
import {LightEditor} from "./editors/lightEditor.js"
import {TargetEditor} from "./editors/targetEditor.js"
import {YieldEditor} from "./editors/yieldEditor.js"
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

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded. Initializing tools...");
    // Set up mode switching
    document.getElementById("graphBtn").addEventListener("click", () => setMode("graph"));
    document.getElementById("stopBtn").addEventListener("click", () => setMode("stop"));
    document.getElementById("crossingBtn").addEventListener("click", () => setMode("crossing"));
    document.getElementById("startBtn").addEventListener("click", () => setMode("start"));

    document.getElementById("parkingBtn").addEventListener("click", () => setMode("parking"));
    document.getElementById("lightBtn").addEventListener("click", () => setMode("light"));
    document.getElementById("targetBtn").addEventListener("click", () => setMode("target"));
    document.getElementById("yieldBtn").addEventListener("click", () => setMode("yield"));


});
export const tools = {

    graph: { button: document.getElementById("graphBtn"), editor: new GraphEditor(viewport, graph) },
    stop: { button: document.getElementById("stopBtn"), editor: new StopEditor(viewport, world) },
    crossing: { button: document.getElementById("crossingBtn"), editor: new CrossingEditor(viewport, world) },
    start: { button: document.getElementById("startBtn"), editor: new StartEditor(viewport, world) },
    parking: { button: document.getElementById("parkingBtn"), editor: new ParkingEditor(viewport, world) },
    light: { button: document.getElementById("lightBtn"), editor: new LightEditor(viewport, world) },
    target: { button: document.getElementById("targetBtn"), editor: new TargetEditor(viewport, world) },
    yield: { button: document.getElementById("yieldBtn"), editor: new YieldEditor(viewport, world) },

};




let oldGraphHash = graph.hash()
setMode("graph");

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

// window.graph = graph; 
window.ctx = ctx
window.viewport = viewport;
window.graphString = graphString
window.graphInfo = graphInfo
window.world = world
window.dispose = dispose;
window.save = save;
window.setMode = setMode
window.disableEditors = disableEditors
window.stop = stop
window.tools = tools;
console.log(tools);



addRandomPoint(graph, ctx, myCanvas);
addRandomSegment(graph, myCanvas, ctx)
removeRandomSegment(graph, myCanvas, ctx)
removeRandomPoint(graph, myCanvas, ctx)
removeAll(graph, myCanvas, ctx)
save(graph, myCanvas, ctx)
dispose(graph, myCanvas, ctx)
// setMode(graph, myCanvas, ctx)
setMode(graph)
// setMode("graph");
disableEditors()
