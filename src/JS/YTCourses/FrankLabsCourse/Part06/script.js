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
      // this.#addNewEnemy()
      // because of our use of deltatime which standardises the timing intervals, we can pass 1000 as 1000ms(1s)
      //spawns enemy every 1 sec
      this.enemyInterval = 1000
      this.enemyTimer = 0
      // console.log(this.enemies) logs only work with document

      

    }
    update(deltaTime) {
      this.enemies = this.enemies.filter(object => !object.markedForDeletion)
      if (this.enemyTimer > this.enemyInterval){
        this.#addNewEnemy()
        this.enemyTimer = 0
        console.log(this.enemies)
      } else {
        this.enemyTimer += deltaTime
      }
      this.enemies.forEach(object => object.update())
    }
    draw() {
      this.enemies.forEach(object => object.draw(this.ctx))
    }
    #addNewEnemy() {
      this.enemies.push(new Enemy(this))
      // this.enemies.push(new Enemy(this))
      // this.enemies.push(new Enemy(this))
      // this.enemies.push(new Enemy(this))
    }
  }

  // enemy class, handles all enemy movement, sounds, size etc and update & draw calls
  class Enemy {
    constructor(game) {
      this.game = game
      // console.log(this.game)

      this.x = this.game.width
      this.y = Math.random() * this.game.height
      this.width = 100
      this.height = 10
      this.markedForDeletion = false
    }
    update() {
      this.x--

      // disposal
      if (this.x < 0 - this.width) this.markedForDeletion = true
    }
    draw(ctx) {
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  class Worm extends Enemy {
    constructor(){
      
    }
  }

const game = new Game(ctx, canvas.width, canvas.height)
  let lastTime = 1
  // Animation loop
  function animate(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    game.update(deltaTime)
    game.draw()

    // console.group(deltaTime)
    requestAnimationFrame(animate);
  }
  animate(0);

})
