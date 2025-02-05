import { Polygon } from "./polygon"
import { angle, subtract, translate } from "../math/utils"

export class Envelope {
    constructor(skeleton, width, roundness = 1){
        this.skeleton = skeleton
        this.poly = this.#generatePolygon(width, roundness)
    }


#generatePolygon(width, roundness){
    const { p1, p2} = this.skeleton

    const radius = width * 0.5
    // const alpha = Math.atan2(p1.y - p2.y, p1.x - p2.x)
    const alpha = angle(subtract(p1, p2))
    const alpha_cw = alpha + Math.PI * 0.5
    const alpha_ccw = alpha - Math.PI * 0.5
    // const p1_ccw = translate(p1, alpha_ccw, radius)
    // const p2_ccw = translate(p2, alpha_ccw, radius)
    // const p2_cw = translate(p2, alpha_cw, radius)
    // const p1_cw = translate(p1, alpha_cw, radius)
    const points = []
    const step = Math.PI / Math.max(1, roundness)
    const eps = step * 0.5
    for (let i = alpha_ccw; i <= alpha_cw + eps; i+=step){
        points.push(translate(p1, i, radius))
    }
    for (let i = alpha_ccw; i <= alpha_cw + eps; i+=step){
        points.push(translate(p2, Math.PI + i, radius))
    }

    return new Polygon(points)
    // return new Polygon([p1_ccw, p2_ccw, p2_cw, p1_cw])

    }
    draw(ctx, options) {
        this.poly.draw(ctx, options)
        // this.poly.drawSegments(ctx)
    }
}