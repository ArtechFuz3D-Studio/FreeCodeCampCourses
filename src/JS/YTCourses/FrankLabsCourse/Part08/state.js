export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
}


// to keep track of current state
class State {
    constructor(state){
        this.state = state
    }
}

export class StandingLeft extends State {
    constructor(player){
        super('STANDING LEFT')
        this.player = player
    }
    enter(){
        this.player.frameY = 1

    }
    handleInput(input){
        if (input === 'PRESS right') this.player.setState(states.STANDING_RIGHT) //  sets state to standing right
    }
}
export class StandingRight extends State {
    constructor(player){
        super('STANDING RIGHT')
        this.player = player
    }
    enter(){
        this.player.frameY = 0
    }
    handleInput(input){
        if (input === 'PRESS left') this.player.setState(states.STANDING_LEFT) //  sets state to standing left

    }
}