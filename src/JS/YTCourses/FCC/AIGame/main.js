import { Car } from "./car";
import { NeuralNetwork } from "./network";
import { Road } from "./road";
import { Visualiser } from "./visualiser";

const carCanvas = document.getElementById("carCanvas");
carCanvas.height = window.innerHeight;
carCanvas.width = 200;
const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.height = window.innerHeight;
networkCanvas.width = 200;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road = new Road(carCanvas.width * 0.5, carCanvas.width * 0.9);

// const car=new Car(road.getLaneCenter(2), 100, 30, 50, "KEYS")
// const car=new Car(road.getLaneCenter(2), 100, 30, 50, "AI")

// const N = 1000;
// const N = 100;
const N = 1;
const cars = generateCars(N);
let bestCar = cars[0];
if (localStorage.getItem("bestBrain")) {
  for (let i = 0; i < cars.length; i++) {
    cars[i].brain = JSON.parse(localStorage.getItem("bestBrain"));
    if (i != 0) {
      NeuralNetwork.mutate(cars[i].brain, 0.1);
    }
  }
}

const traffic = [
  new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2),
  new Car(road.getLaneCenter(0), -300, 30, 50, "DUMMY", 2),
  new Car(road.getLaneCenter(2), -300, 30, 50, "DUMMY", 2),
  new Car(road.getLaneCenter(0), -500, 30, 50, "DUMMY", 2),
  new Car(road.getLaneCenter(1), -500, 30, 50, "DUMMY", 2),
  new Car(road.getLaneCenter(1), -700, 30, 50, "DUMMY", 2),
  new Car(road.getLaneCenter(2), -700, 30, 50, "DUMMY", 2),
];

function generateCars(N) {
  const cars = [];
  for (let i = 1; i <= N; i++) {
    cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, "AI"));
  }
  return cars;
}

animate();

// export function save(){
//     localStorage.setItem("bestBrain",

//         JSON.stringify(bestCar.brain),

//     )
// }
// // window.save = save;

// export function discard(){
//     localStorage.removeItem("bestBrain")
// }
// // window.discard = discard

export function save() {
  try {
    if (!bestCar || !bestCar.brain) {
      console.error("Error: bestCar or bestCar.brain is undefined!");
      return;
    }
    localStorage.setItem("bestBrain", JSON.stringify(bestCar.brain));
    console.log("Saved brain to localStorage:", bestCar.brain);

    const savedBrain = JSON.stringify(bestCar.brain); 
    localStorage.setItem("bestBrain", savedBrain); // Save it to localStorage
    console.log("Brain saved:", savedBrain);
  } catch (error) {
    console.error("Error while saving brain:", error);
  }
}

export function discard() {
  try {
    localStorage.removeItem("bestBrain");
    console.log("Removed 'bestBrain' from localStorage.");
  } catch (error) {
    console.error("Error while discarding brain:", error);
  }
}

function animate(time) {
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].update(road.borders, []);
  }

  for (let i = 0; i < cars.length; i++) {
    cars[i].update(road.borders, traffic);
  }

  // const bestCar = cars.find(
  bestCar = cars.find((c) => c.y == Math.min(...cars.map((c) => c.y)));

  carCanvas.height = window.innerHeight;
  networkCanvas.height = window.innerHeight;

  carCtx.save();

  carCtx.translate(0, -bestCar.y + carCanvas.height * 0.7);
  road.draw(carCtx);
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].draw(carCtx, "mediumvioletred");
  }

  carCtx.globalAlpha = 0.2;
  for (let i = 0; i < cars.length; i++) {
    cars[i].draw(carCtx, "mediumspringgreen");
  }
  carCtx.globalAlpha = 1;
  bestCar.draw(carCtx, "mediumspringgreen", true);

  carCtx.restore();

  networkCtx.lineDashOffset = -time * 0.01;
  Visualiser.drawNetwork(networkCtx, bestCar.brain);
  requestAnimationFrame(animate);
}
