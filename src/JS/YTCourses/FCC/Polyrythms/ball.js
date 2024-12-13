import {playSound} from './sound'

export class Ball {
    constructor(track, radius, speed, soundFrequency, hue) {
        this.track = track
        this.radius = radius
        this.speed = speed
        this.soundFrequency = soundFrequency
        this.hue = hue
        this.offset = 0
        // this.direction = 1
        this.round = 0
        this.progress = 0
        this.center = this.track.getPosition(this.offset)
    }

    move(){
        // this.offset += this.speed * this.direction
        this.offset += this.speed
        // this.center = this.track.getPosition(this.offset)
        const res = this.track.getPosition(this.offset)
        this.center = { x: res.x, y: res.y}
        this.progress = res.progress
        if (res.round != this.round) {
        // if (this.center.y > this.track.center.y) {
            // this.direction *= -1
            playSound(this.soundFrequency)
            this.round = res.round
        
    }
    }

    // draw(ctx) {
    //     // const fakeY = 2 * this.track.center.y - this.center.y
    //     // ctx.beginPath()
    //     // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2)
    //     // // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI) // half
    //     // // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI, true) // half flipped

    //     // ctx.strokeStyle = "white"
    //     // ctx.stroke()

    //     const fakeY = 2 * this.track.center.y - this.center.y
    //     if (fakeY > this.center.y) {
    //         ctx.beginPath()
    //         ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2)
    //         ctx.strokeStyle = "white"
    //         ctx.stroke()
    //     } else {
    //         ctx.beginPath()
    //         ctx.arc(this.center.x, fakeY, this.radius, 0, Math.PI * 2)
    //         ctx.strokeStyle = "white"
    //         ctx.stroke()
    //     }
    // }
    draw(ctx) {
            ctx.beginPath()
            ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2)
            // ctx.lineWidth = 2
            // ctx.strokeStyle = "white"
            const lightness = 100 - 50 * this.progress
            ctx.fillStyle = `hsl(${this.hue}, 100%, ${lightness}%)`
            ctx.fill()
            // ctx.stroke()
    }
}