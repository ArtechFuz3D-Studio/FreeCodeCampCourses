import { Point } from "./primitives/point";
import { Segment } from "./primitives/segment";
import { tools, world, graph } from "../main";

// myCanvas.width = 600;
// myCanvas.height = 600;

const ctx = myCanvas.getContext("2d");

export function dispose() {
  document.getElementById("dispose").addEventListener("click", () => {
    tools["graph"].editor.dispose();
    world.markings.length = 0;
  });
}
export function save(graph) {
  document.getElementById("save").addEventListener("click", () => {
    localStorage.setItem("graph", JSON.stringify(graph));
  });
}

export function setMode(mode) {

  disableEditors();
  tools[mode].button.style.backgroundColor = "white";
  tools[mode].button.style.filter = "";
  tools[mode].editor.enable();

}

export function disableEditors() {
  for (const tool of Object.values(tools)) {
    tool.button.style.backgroundColor = "gray";
    tool.button.style.filter = "grayscale(100%)";
    tool.editor.disable();
  }
}
export function removeAll() {
  document.getElementById("remall").addEventListener("click", () => {
    graph.dispose();
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    graph.draw(ctx);
  });
}

export function removeRandomSegment(graph, myCanvas, ctx) {
  document.getElementById("remsegment").addEventListener("click", () => {
    if (graph.segments.length == 0) {
      console.log("none segments left to remove");
      return;
    }
    const index = Math.floor(Math.random() * graph.segments.length);
    graph.removeSegment(graph.segments[index]);
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    graph.draw(ctx);
  });
}

export function removeRandomPoint(graph, myCanvas, ctx) {
  document.getElementById("rempoint").addEventListener("click", () => {
    if (graph.points.length == 0) {
      console.log("none points left to remove");
      return;
    }
    const index = Math.floor(Math.random() * graph.points.length);
    graph.removePoint(graph.points[index]);
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    graph.draw(ctx);
  });
}

export function addRandomSegment(graph, myCanvas, ctx) {
  document.getElementById("addsegment").addEventListener("click", () => {
    const index1 = Math.floor(Math.random() * graph.points.length);
    const index2 = Math.floor(Math.random() * graph.points.length);
    let success = false;
    if (index1 != index2) {
      success = graph.tryAddSegment(
        new Segment(graph.points[index1], graph.points[index2])
      );
    }
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    graph.draw(ctx);
    // console.log(success);
  });
}

export function addRandomPoint(graph) {
  document.getElementById("addpoint").addEventListener("click", () => {
    const success = graph.tryAddPoint(
      new Point(Math.random() * myCanvas.width, Math.random() * myCanvas.height)
    );
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    graph.draw(ctx);
    // console.log(success);
  });
}
