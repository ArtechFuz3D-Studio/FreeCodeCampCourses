import { Controls } from "./controls";
import { NeuralNetwork } from "./network";
import { Sensor } from "./sensor";
import { polyIntersect } from "./utils";

export class Car {
  constructor(x, y, width, height, controlType, maxSpeed = 6) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acc = 0.5;
    // this.maxSpeed = 3;
    this.maxSpeed = maxSpeed;
    this.freak = 0.09; // shin
    this.angle = 0;
    this.damaged = false;

    this.useBrain = controlType == "AI"

    if (controlType != "DUMMY") {
      this.sensor = new Sensor(this);
      this.brain = new NeuralNetwork(
        [this.sensor.rayCount, 6, 4]
      )
    }

    // this.damaged = this.#assessDamage(roadBorders)
    this.controls = new Controls(controlType);
  }

  update(roadBorders, traffic) {
    if (!this.damaged) {
      this.#move();
      this.polygon = this.#createPolygon();
      this.damaged = this.#assessDamage(roadBorders, traffic);
    }
    if (this.sensor) {
      this.sensor.update(roadBorders, traffic);
      const offsets = this.sensor.readings.map(
        s => s == null ? 0 : 1 - s.offset
      )
      const outputs = NeuralNetwork.feedForward(offsets, this.brain)
      // console.log(outputs)

      if(this.useBrain){
        this.controls.forward = outputs[0]
        this.controls.left = outputs[1]
        this.controls.right = outputs[2]
        this.controls.reverse = outputs[3]
      }
    }
  }

  #assessDamage(roadBorders, traffic) {
    for (let i = 0; i < roadBorders.length; i++) {
      if (polyIntersect(this.polygon, roadBorders[i])) {
        return true;
      }
    }
    for (let i = 0; i < traffic.length; i++) {
      if (polyIntersect(this.polygon, traffic[i].polygon)) {
        return true;
      }
    }
    return false;
  }

  #createPolygon() {
    const points = [];
    const rad = Math.hypot(this.width, this.height) * 0.5;
    const alpha = Math.atan2(this.width, this.height);
    points.push({
      x: this.x - Math.sin(this.angle - alpha) * rad,
      y: this.y - Math.cos(this.angle - alpha) * rad,
    });
    points.push({
      x: this.x - Math.sin(this.angle + alpha) * rad,
      y: this.y - Math.cos(this.angle + alpha) * rad,
    });
    points.push({
      x: this.x - Math.sin(Math.PI + this.angle - alpha) * rad,
      y: this.y - Math.cos(Math.PI + this.angle - alpha) * rad,
    });
    points.push({
      x: this.x - Math.sin(Math.PI + this.angle + alpha) * rad,
      y: this.y - Math.cos(Math.PI + this.angle + alpha) * rad,
    });
    return points;
  }

  #move() {
    if (this.controls.forward) {
      this.speed += this.acc;
    }
    if (this.controls.reverse) {
      this.speed -= this.acc;
    }
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    if (this.speed < -this.maxSpeed * 0.5) {
      this.speed = -this.maxSpeed * 0.5;
    }
    if (this.speed > 0) {
      this.speed -= this.freak;
    }
    if (this.speed < 0) {
      this.speed += this.freak;
    }
    if (Math.abs(this.speed) < this.freak) {
      this.speed = 0;
    }
    // flip for reverse
    if (this.speed != 0) {
      const flip = this.speed > 0 ? 1 : -1;
      // Left
      if (this.controls.left) {
        this.angle += 0.03 * flip;
      }
      // Right
      if (this.controls.right) {
        this.angle -= 0.03 * flip;
      }
    }

    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
  }

  draw(ctx, color, drawSensor=false) {
    if (this.damaged) {
      ctx.fillStyle = "snow";
    } else {
      ctx.fillStyle = color;
    }
    ctx.beginPath();
    ctx.moveTo(this.polygon[0].x, this.polygon[0].y);
    for (let i = 1; i < this.polygon.length; i++) {
      ctx.lineTo(this.polygon[i].x, this.polygon[i].y);
    }
    ctx.fill();

    if (this.sensor && drawSensor) {
      this.sensor.draw(ctx);
    }
  }
}
