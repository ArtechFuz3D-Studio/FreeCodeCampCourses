import { angle } from "../helpers/math/utils.js"
import { Marking } from "./marking.js"


export class Stop extends Marking {
    constructor(center, directionVector, width, height) {
        super(center, directionVector, width, height)
        this.border = this.poly.segments[2]
    }

    draw(ctx) {
        // this.poly.draw(ctx)
        this.border.draw(ctx, {width: 5, color: "white"})

        ctx.save()
        ctx.translate(this.center.x, this.center.y)
        ctx.rotate(angle(this.directionVector) - Math.PI*0.5)
        ctx.scale(1,3)

        ctx.beginPath()
        ctx.textBaseline = "middle"
        ctx.textAlign = "center"
        ctx.fillStyle = "white"
        // ctx.fontFamily = "Zen Dots"
        ctx.font = "bold " + this.height * 0.25 + "px Zen Dots"
        ctx.fillText("STOP", 0, 1)

        ctx.restore()
    }
}