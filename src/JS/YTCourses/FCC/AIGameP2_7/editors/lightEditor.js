import { MarkingEditor } from "./markingEditor.js";
import { Light } from "../markings/light.js";
export class LightEditor extends MarkingEditor {
    constructor(viewport, world) {
       super(viewport, world, world.laneGuides);
    }
 
    createMarking(center, directionVector) {
       return new Light(
          center,
          directionVector,
          world.roadWidth / 2,
          world.roadWidth / 2
       );
    }
 }