export class Point {
    constructor(x,y) {
        this.x = x
        this.y = y
    }

    equals(point){
        return this.x == point.x && this.y == point.y
    }

    // wrapping the props in curlies allows them to be called in any order
    draw(ctx, {size = 18, colorA = "black",colorB = "hotpink",colorC = "white", outline=false, fill=false} = {}) {
        const rad = size * 0.5
        ctx.beginPath()
        ctx.fillStyle = colorA
        ctx.arc(this.x, this.y, rad, 0, Math.PI*2)
        ctx.fill()
        if (outline) {
            ctx.beginPath()
            ctx.lineWidth = 4
            ctx.strokeStyle = colorB
            ctx.arc(this.x, this.y, rad * 0.6, 0, Math.PI * 2)
            ctx.stroke()
        }
        if(fill){
            ctx.beginPath()
            ctx.arc(this.x, this.y, rad * 0.4, 0, Math.PI * 2)
            ctx.fillStyle = colorC
            ctx.fill()
        }
    }
}