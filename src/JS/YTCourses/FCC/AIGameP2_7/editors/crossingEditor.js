import { getNearestSegment } from "../helpers/math/utils";
import { Crossing } from "../markings/crossing";
import { MarkingEditor } from "./markingEditor";

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
