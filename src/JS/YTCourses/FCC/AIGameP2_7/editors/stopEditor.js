import { getNearestSegment } from "../helpers/math/utils";
import { Stop } from "../markings/stop";
import { MarkingEditor } from "./markingEditor";

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
