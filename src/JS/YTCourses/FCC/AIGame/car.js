import { Controls } from "./controls";
import {Sensor} from './sensor'

export class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acc = 0.2;
    this.maxSpeed = 3;
    this.freak = 0.02; // shin
    this.angle = 0;

    this.sensor = new Sensor(this)
    this.controls = new Controls();
  }

  update() {
  this.#move()
  this.sensor.update()
  }

  #move(){
    if (this.controls.forward) {
        // this.y-=2
        this.speed += this.acc;
      }
      if (this.controls.reverse) {
        // this.y+=2
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
          // this.x-=2
          this.angle += 0.03*flip
        }
        // Right
        if (this.controls.right) {
          // this.x+=2
          this.angle -= 0.03*flip
        }
      }
  
      this.x -= Math.sin(this.angle) * this.speed;
      this.y -= Math.cos(this.angle) * this.speed;
      // this.y-=this.speed
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle);
    ctx.beginPath();
    ctx.rect(
      // this.x -this.width*0.5,
      // this.y -this.height*0.5,
      -this.width * 0.5,
      -this.height * 0.5,
      this.width,
      this.height
    );
    ctx.fill();
    ctx.restore();

    this.sensor.draw(ctx)
  }
}
