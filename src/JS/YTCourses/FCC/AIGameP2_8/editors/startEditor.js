import { Start } from "../markings/start.js";
import { MarkingEditor } from "./markingEditor.js";
// import { world } from "../main.js";

export class StartEditor extends MarkingEditor {
  constructor(viewport, world) {
    super(viewport, world, world.laneGuides);
  }

  createMarking(center, directionVector) {
    return new Start(
      center,
      directionVector,
      world.roadWidth * 0.5,
      world.roadWidth * 0.5,
    )
  }
}
