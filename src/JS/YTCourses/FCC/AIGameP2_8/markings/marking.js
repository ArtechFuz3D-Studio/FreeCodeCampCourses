import { translate } from "../helpers/math/utils.js"
import { Segment } from "../helpers/primitives/segment.js"
import { angle } from "../helpers/math/utils.js"
import { Envelope } from "../helpers/primitives/envelope.js"


export class Marking {
    constructor(center, directionVector, width, height) {
        this.center = center
        this.directionVector = directionVector
        this.width = width
        this.height = height

        this.support = new Segment(
            translate(center, angle(directionVector), height * 0.5),
            translate(center, angle(directionVector), -height * 0.5)
        )

        this.poly = new Envelope(this.support, width, 0).poly


    }

    draw(ctx) {
        this.poly.draw(ctx)
    }
}