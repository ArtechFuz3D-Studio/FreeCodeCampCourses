// document.addEventListener('DOMContentLoaded', function(){
window.addEventListener('load', function(){
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 800;



  // Main game class, handles all game update and draw calls
  class Game {
    constructor(ctx, width, height) {
      this.ctx = ctx
      this.width = width
      this.height = height
      this.enemies = [];
      this.#addNewEnemy()
      // console.log(this.enemies) logs only work with document
    }
    update() {
      this.enemies.forEach(object => object.update())
    }
    draw() {
      this.enemies.forEach(object => object.draw())
    }
    #addNewEnemy() {
      this.enemies.push(new Enemy())
    }
  }

  // enemy class, handles all enemy movement, sounds, size etc and update & draw calls
  class Enemy {
    constructor() {
      this.x = 100
      this.y = 100
      this.width = 100
      this.height = 100
    }
    update() {
      this.x--
    }
    draw() {
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

const game = new Game(ctx, canvas.width, canvas.height)
  let lastTime = 1
  // Animation loop
  function animate(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    game.update()
    game.draw()

    // console.group(deltaTime)
    requestAnimationFrame(animate);
  }
  animate(0);

})
