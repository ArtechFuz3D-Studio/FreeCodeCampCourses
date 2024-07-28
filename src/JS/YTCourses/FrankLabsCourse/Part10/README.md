# Part 09 - Game

In this lesson we build a 2d game and animate everything
Responsive Keyboards Controls
Animation Spritesheets
Parallax Background
Game Skins
Particle Effects
Enemy Variants

Below is the spritesheet used in this example:
> Art courtesy of [Bevouliin](https://bevouliin.com/category/free_game_asset/)

07:30:50

```js
//main.js
import { InputHandler } from "./input";
import { Player } from "./player";

window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  loading.style.display = "none";

  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;


  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.input = new InputHandler()
    }
    update() {
      this.player.update(this.input.keys)
    }
    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  // console.log(game);

  function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    game.update()
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate();
});
```

```js
//player.js
export class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 91.3;

    this.x = 0;
    this.y = this.game.height - this.height;
    this.vy = 0;
    this.weight = 1
    this.image = playerSheet;

    this.speed = 0;
    this.maxSpeed = 10;
  }
  update(input) {
    // horizontal movemment
    this.x += this.speed;
    if (input.includes("ArrowRight")) this.speed = this.maxSpeed;
    else if (input.includes("ArrowLeft")) this.speed = -this.maxSpeed;
    else this.speed = 0;
    if (this.x < 0) this.x = 0; // block left
    if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width; // block right
    // vertical movement
    if (input.includes('ArrowUp') && this.onGround()) this.vy -= 30
    this.y += this.vy;
    if (!this.onGround()) this.vy += this.weight
    else this.vy = 0
  }
  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  onGround() {
    return this.y >= this.game.height - this.height
  }
}
```

```js
// input.js
export class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (
        (e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          e.key === "Control") &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
      }
      console.log(e.key, this.keys);
    });
    window.addEventListener("keyup", (e) => {
      if (
        e.key === "ArrowDown" || 
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === 'Control'
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
      console.log(e.key, this.keys);
    });
  }
}
```

Tutorial uses Enter key for next part, Id like to use spacebar for the rolling state animation.

```js
export class InputHandler {
  constructor(game) {
    this.game = game
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      console.log('Key pressed:', e.key);
      // empty quotes denotes space bar
      if (e.key === ' ') {
        console.log('The space bar key was pressed.');
    }
  
      if (
        (e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          e.key === "Control") &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
      } else if (e.key === 'd') this.game.debug = !this.game.debug
      // console.log(e.key, this.keys);
    });
    window.addEventListener("keyup", (e) => {
      if (
        e.key === "ArrowDown" || 
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === 'Control'
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
      // console.log(e.key, this.keys);
    });
  }
}
```

09:21:50 - is logic for win condition