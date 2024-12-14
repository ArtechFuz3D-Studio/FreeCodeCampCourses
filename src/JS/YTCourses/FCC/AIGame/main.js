import {Car} from './car'
import {Road} from './road'
import { Visualiser } from './visualiser'

const carCanvas = document.getElementById("carCanvas")
carCanvas.height=window.innerHeight
carCanvas.width = 200
const networkCanvas = document.getElementById("networkCanvas")
networkCanvas.height=window.innerHeight
networkCanvas.width = 200

const carCtx = carCanvas.getContext("2d")
const networkCtx = networkCanvas.getContext("2d")
const road=new Road(carCanvas.width*0.5, carCanvas.width*0.9)
// const car=new Car(road.getLaneCenter(2), 100, 30, 50, "KEYS")
const car=new Car(road.getLaneCenter(2), 100, 30, 50, "AI")
const traffic = [new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 3)]
// car.draw(ctx)

animate()
function animate(time){

    for(let i = 0; i < traffic.length; i++){
        traffic[i].update(road.borders,[])
    }
    // ctx.clearRect(0,0,canvas.width,canvas.height)
    car.update(road.borders, traffic)
    carCanvas.height=window.innerHeight
    networkCanvas.height=window.innerHeight

    carCtx.save()

    carCtx.translate(0, -car.y+carCanvas.height*0.7)
    road.draw(carCtx)
    for(let i = 0; i < traffic.length; i++){
        traffic[i].draw(carCtx, "mediumvioletred")
    }
    car.draw(carCtx, "mediumspringgreen")

    carCtx.restore()

    networkCtx.lineDashOffset = -time*0.01
    Visualiser.drawNetwork(networkCtx, car.brain)
    requestAnimationFrame(animate)
}

