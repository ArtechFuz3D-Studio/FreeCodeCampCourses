import { add, scale, translate, perpendicular } from "../helpers/math/utils.js";
import { Segment } from "../helpers/primitives/segment.js";
import { angle } from "../helpers/math/utils.js";
import { Envelope } from "../helpers/primitives/envelope.js";
import { Marking } from "./marking.js";

export class Crossing extends Marking {
  constructor(center, directionVector, width, height) {
super(center, directionVector, width, height)
    this.borders = [this.poly.segments[0], this.poly.segments[2]];
  }

  draw(ctx) {
    const perp = perpendicular(this.directionVector);
    const line = new Segment(
      add(this.center, scale(perp, this.width * 0.5)),
      add(this.center, scale(perp, -this.width * 0.5))
    );
    line.draw(ctx, {
      width: this.height,
      color: "white",
      dash: [11, 11],
    });
    // debug
    //    for (const b of this.borders){
    //     b.draw(ctx)
    //    }
  }
}
