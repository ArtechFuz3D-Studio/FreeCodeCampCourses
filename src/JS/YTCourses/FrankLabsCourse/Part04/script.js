/**
 * @type {HTMLCanvasElement}
 */
import boom from '@assets/boom.png'
import roll from '@assets/roll.wav'
import roll2 from '@assets/roll2.wav'


const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// Sizes
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 700);
const canvasPosition = canvas.getBoundingClientRect();
// console.log(canvasPosition)

const explosions = [];

class Explosion {
  constructor(x, y) {
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    //division in JS is more expensive, instead of diving by 2, multiply by 0.5
    this.width = this.spriteWidth * 0.6;
    this.height = this.spriteHeight * 0.6;
    this.x = x 
    this.y = y 
    this.image = new Image();
    this.image.src = boom;
    this.frame = 0;
    this.timer = 0;
    this.angle = Math.random() * 6.2

    //Audio
    this.sound = new Audio()
    this.sound2 = new Audio()
    this.sound2.src = roll2
    this.sound.src = roll
  }
  update() {
    if (this.frame === 0) this.sound.play() && this.sound2.play()
    // if (this.frame === 0) this.sound2.play()
    this.timer++;
    if (this.timer % 10 === 0) {
      this.frame++;
    }
    // this.frame++;
  }
  draw() {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.angle)
    ctx.drawImage(
      this.image,
      this.spriteWidth * this.frame,
      0,
      this.spriteWidth,
      this.spriteHeight,
      0 - this.width * 0.5,
      0 - this.height * 0.5,
      this.width,
      this.height
    );
    ctx.restore()
  }
}

// window.addEventListener('click', function(e){
//     // console.log(e)
//     let positionX = e.x - canvasPosition.left
//     let positionY = e.y - canvasPosition.top
//     // ctx.fillStyle = 'white'
//     // ctx.fillRect(e.x - canvasPosition.left -25, e.y - canvasPosition.top -25, 50, 50)
//     explosions.push(new Explosion(positionX, positionY))
//     console.log(explosions)
// })

window.addEventListener("click", function (e) {
  createAnimation(e);
});
// window.addEventListener("mousemove", function (e) {
//   createAnimation(e);
// });

function createAnimation(e) {
  let positionX = e.x - canvasPosition.left;
  let positionY = e.y - canvasPosition.top;
  explosions.push(new Explosion(positionX, positionY));
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < explosions.length; i++) {
    explosions[i].update();
    explosions[i].draw();
    if (explosions[i].frame > 5) {
      explosions.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animate);
}
animate();
