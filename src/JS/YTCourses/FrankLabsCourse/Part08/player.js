export default class Player {
    constructor(gameWidth, gameHeight) {
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      this.states = []
      this.currentState = this.states[0]
      this.image = dogImage;
      this.width = 200;
      this.height = 181.83;
      this.x = 0;
      this.y = 0;


    }

    draw(context) {
      context.drawImage(
        this.image,
        // this.frameX * this.width,
        // this.frameY * this.height,
        // this.width,
        // this.height,
        this.x,
        this.y,
        // this.width,
        // this.height
      );
    }
    update(input, deltaTime, enemies) {
      // collision detection
      enemies.forEach((enemy) => {
        const dx =
          enemy.x + enemy.width * 0.5 - 20 - (this.x + this.width * 0.5);
        const dy =
          enemy.y + enemy.height * 0.5 - (this.y + this.height * 0.5 + 20);
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < enemy.width * 0.4 + this.width * 0.3) {
          gameOver = true;
        }
      });
      // sprite anmiation
      if (this.frameTimer > this.frameInterval) {
        if (this.frameX >= this.maxFrame) this.frameX = 0;
        else this.frameX++;
        this.frameTimer = 0;
      } else {
        this.frameTimer += deltaTime;
      }

      // controls
      if (input.keys.indexOf("ArrowRight") > -1) {
        this.speed = 5;
      } else if (input.keys.indexOf("ArrowLeft") > -1) {
        this.speed = -5;
      } else if (
        (input.keys.indexOf("ArrowUp") > -1 ||
          input.keys.indexOf("swipe up") > -1) &&
        this.onGround()
      ) {
        this.vy -= 32;
      } else {
        this.speed = 0;
      }
      // horizontal movement
      this.x += this.speed;
      if (this.x < 0) this.x = 0;
      else if (this.x > this.gameWidth - this.width)
        this.x = this.gameWidth - this.width;

      // vertical movement
      this.y += this.vy;
      if (!this.onGround()) {
        this.vy += this.weight;
        this.maxFrame = 5; // state change between animation sets
        this.frameY = 1;
      } else {
        this.vy = 0;
        this.maxFrame = 8; // state change between animation sets
        this.frameY = 0;
      }
      if (this.y > this.gameHeight - this.height)
        this.y = this.gameHeight - this.height;
    }
    onGround() {
      return this.y >= this.gameHeight - this.height;
    }
  }