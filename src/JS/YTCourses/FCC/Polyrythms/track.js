export class Track {
    constructor(center, radius, hue) {
        this.center = center
        this.radius = radius
        this.hue = hue
        this.period = Math.PI
    }

    getPosition(offset){
        return {
            x: this.center.x + Math.cos(offset) * this.radius,
            // x: this.center.x + Math.cos(offset * 5) * this.radius,
            // y: this.center.y + Math.sin(offset) * this.radius,
            y: this.center.y - Math.abs(Math.sin(offset)) * this.radius,
            round: Math.floor(offset / this.period),
            progress: (offset % this.period) / this.period
        }
    }

    draw(ctx) {
        ctx.beginPath()

        // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2)
        // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI) // half
        // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI, true) // half flipped
        // for (let a = 0; a < Math.PI * 2; a += 0.4) {
        for (let a = 0; a < Math.PI * 2; a += 0.01) {
            const pos = this.getPosition(a)

            ctx.lineTo(
                // this.center.x + Math.cos(a) * this.radius,
                // this.center.x + Math.cos(a* 7) * this.radius,
                // this.center.y + Math.sin(a) * this.radius

                // reuse code from getPosition method
                pos.x, pos.y

            )
        }
        ctx.closePath()
        // ctx.strokeStyle = "white"
        ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`
        ctx.stroke()
    }
}