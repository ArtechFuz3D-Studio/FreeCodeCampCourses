import { angle } from "../helpers/math/utils.js";
import { Marking } from "./marking.js";

export class Start extends Marking {
  constructor(center, directionVector, width, height) {
    super(center, directionVector, width, height);

    this.img = new Image();
    // this.img.src = "./car.png";
    this.img.src = "./car1.webp";
    // this.img.onload = () => console.log("Image loaded successfully.");
    // this.img.onerror = () =>
    //   console.error("Failed to load image:", this.img.src);
    // const carImage = new Image();
    // carImage.src = './car.png';
    // carImage.onload = () => {
    //     ctx.drawImage(carImage, x, y); // Replace x and y with coordinates
    // };
    // carImage.onerror = (error) => {
    //     console.error('Failed to load car image:', error);
    // };  
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.center.x, this.center.y);
    ctx.rotate(angle(this.directionVector) - Math.PI * 0.5);

    ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);
    ctx.restore();
  }
}
