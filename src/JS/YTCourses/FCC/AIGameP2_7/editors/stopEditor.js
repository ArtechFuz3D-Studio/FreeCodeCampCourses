import { getNearestSegment } from "../helpers/math/utils.js";
import { Stop } from "../markings/stop.js";
import { MarkingEditor } from "./markingEditor.js";

export class StopEditor extends MarkingEditor {
  constructor(viewport, world) {
    super(viewport, world, world.laneGuides);
  }

  createMarking(center, directionVector) {
    return new Stop(
      center,
      directionVector,
      world.roadWidth * 0.5,
      world.roadWidth * 0.5,
    )
  }
}
