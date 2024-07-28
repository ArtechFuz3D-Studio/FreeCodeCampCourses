export class UI {
    constructor(game) {
        this.game = game
        this.fontSize = 28
        this.fontFamily = 'Orbitron'
    }
    draw(context){
        context.save()
        // remove this shadow and use duplicate text if perf suffers
        context.shadowOffsetX = 2
        context.shadowOffsetY = 2
        context.shadowcolor = 'white'
        context.shadowBlur = 0
        context.font = this.fontSize + 'px ' + this.fontFamily
        context.textAlign = 'left'
        context.fillStyle = this.game.fontColor
        // Score
        context.fillText('Score: ' + this.game.score, 16, 32)
        // Timer
        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1) , 20, 80)
        // Game Over
        if (this.game.gameOver){
            context.textAlign = 'center'
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily
            if (this.game.score > 15){
                context.fillText('Oh My!', this.game.width * 0.5, this.game.height * 0.5 -20)
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily
                context.fillText('What are the ghouls of night afraid of? YOU!', this.game.width * 0.5, this.game.height * 0.5 + 20)
            } else {
                context.fillText('Arachnaphobic?', this.game.width * 0.5, this.game.height * 0.5 -20)
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily
                context.fillText("Or are you just afraid of the keyboard?", this.game.width * 0.5, this.game.height * 0.5 + 20)
            }

        }
        context.restore()
    }
}