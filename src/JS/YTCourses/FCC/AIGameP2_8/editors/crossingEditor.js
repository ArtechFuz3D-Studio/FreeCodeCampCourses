import { getNearestSegment } from "../helpers/math/utils.js";
import { Crossing } from "../markings/crossing.js";
import { MarkingEditor } from "./markingEditor.js";

export class CrossingEditor extends MarkingEditor {
  constructor(viewport, world) {
    super(viewport, world, world.graph.segments)
  }

  createMarking(center, directionVector) {
    return new Crossing(
      center,
      directionVector,
      world.roadWidth,
      world.roadWidth * 0.5,
    )
  }
}
