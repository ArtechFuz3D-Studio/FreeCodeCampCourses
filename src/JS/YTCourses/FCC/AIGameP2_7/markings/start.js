import { angle } from "../helpers/math/utils"
import { Marking } from "./marking"


export class Start extends Marking {
    constructor(center, directionVector, width, height) {
        super(center, directionVector, width, height)

        this.img = new Image()
        this.img.src = "AIGame/car.png"
    }

    draw(ctx) {
        ctx.save()
        ctx.translate(this.center.x, this.center.y)
        ctx.rotate(angle(this.directionVector) - Math.PI*0.5)

        ctx.drawImage(this.img, -this.img.width *0.5, -this.img.height*0.5)
        ctx.restore()
    }
}