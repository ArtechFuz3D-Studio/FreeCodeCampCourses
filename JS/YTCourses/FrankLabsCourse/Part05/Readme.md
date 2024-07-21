# Part 05 - Point Shooter

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/GFO_txvwK_c?si=Ke_hN-gXTV42yetO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

Part A

```js
/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");


// Sizes
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

// Enemy Amount
const numberOfEnemies = 100

const enemiesArray = []

// NPC temp, simple js object storing loc&size
// enemy1 = {
//     x: 10,
//     y: 50,
//     width: 200,
//     height: 200,
// }

// Creating classes can be likened to creating an instantiator for instancing, basically a react component
class Enemy {
    //constructor
    constructor(){
        // blueprint
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.width = 100
        this.height = 100
        // this creates a random value between -2 and +2
        this.speed = Math.random() * 4 - 2
    }
    update(){
        this.x += this.speed
        this.y += this.speed
    }
    draw(){
        // use this instead of enemy1, enemy2 etc, to call all of the class
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }
}
// const enemy1 = new Enemy()
// const enemy2 = new Enemy()
for (let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy())
}
// console.log(enemiesArray)

// animate npc
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    // enemy1.update()
    // Put these movement calc functionality into the update method above
    // enemy1.x++
    // enemy1.y++
    // enemy2.x+=0.5
    // enemy2.y+=0.5

    // ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height)
    // enemy1.draw()
    
    enemiesArray.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })

    // ctx.fillRect(enemy2.x, enemy2.y, enemy2.width, enemy2.height)
    requestAnimationFrame(animate)
}
animate()
```

Part B

```js
/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");


// Sizes
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

// Enemy Amount
const numberOfEnemies = 10

const enemiesArray = []

// const enemyImage = new Image()
// enemyImage.src = '../../../../public/enemy1.png'

let gameFrame = 0

// Creating classes can be likened to creating an instantiator for instancing, basically a react component
class Enemy {
    //constructor
    constructor(){
        // blueprint

        this.image = new Image()
        this.image.src = '../../../../public/enemy1.png'

       

  
        // this creates a random value between -2 and +2
        // this.speed = Math.random() * 4 - 2

        this.spriteWidth = 293
        this.spriteHeight = 155
        this.width = this.spriteWidth / 2.5
        this.height = this.spriteHeight / 2.5
        //call this after this.width has been declared
        this.x = Math.random() * (canvas.width - this.width)
        this.y = Math.random() * (canvas.height - this.height)
        this.frame = 0
        // random number between 1 and 4
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }
    update(){
        this.x += Math.random() * 5 - 2.5 
        this.y += Math.random() * 5 - 2.5
        // animate sprites
        if (gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++
        }
       
    }
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.frame * this.spriteWidth,0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy())
}

// animate npc
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    enemiesArray.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })
    gameFrame++
    requestAnimationFrame(animate)
}
animate()
```

Part C

```js
/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");


// Sizes
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

// Enemy Amount
const numberOfEnemies = 20

const enemiesArray = []

// const enemyImage = new Image()
// enemyImage.src = '../../../../public/enemy1.png'

let gameFrame = 0

// Creating classes can be likened to creating an instantiator for instancing, basically a react component
class Enemy {
    //constructor
    constructor(){
        // blueprint

        this.image = new Image()
        this.image.src = '../../../../public/enemy2.png'

       

  
        // this creates a random value between -2 and +2
        this.speed = Math.random() * 4 + 1

        this.spriteWidth = 266
        this.spriteHeight = 188
        this.width = this.spriteWidth / 2.5
        this.height = this.spriteHeight / 2.5
        //call this after this.width has been declared
        this.x = Math.random() * (canvas.width - this.width)
        this.y = Math.random() * (canvas.height - this.height)
        this.frame = 0
        // random number between 1 and 4
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)

        // this.angle = 0
        // this.angle = Math.random() * 2
        this.angle = 0
        this.angleSpeed = Math.random() * 0.2
        this.curve = Math.random() * 3
    }
    update(){
        this.x -= this.speed
        // this.y += Math.random() * 15 - 7.5
        this.y += this.curve * Math.sin(this.angle)
        this.angle += this.angleSpeed
        if (this.x + this.width < 0) this.x = canvas.width
        // animate sprites
        if (gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++
        }
       
    }
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.frame * this.spriteWidth,0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy())
}

// animate npc
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    enemiesArray.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })
    gameFrame++
    requestAnimationFrame(animate)
}
animate()
```
Part D

```js
/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");


// Sizes
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

// Enemy Amount
const numberOfEnemies = 200

const enemiesArray = []

// const enemyImage = new Image()
// enemyImage.src = '../../../../public/enemy1.png'

let gameFrame = 0

// Creating classes can be likened to creating an instantiator for instancing, basically a react component
class Enemy {
    //constructor
    constructor(){
        // blueprint

        this.image = new Image()
        this.image.src = '../../../../public/enemy3.png'

       

  
        // this creates a random value between -2 and +2
        this.speed = Math.random() * 4 + 1

        this.spriteWidth = 218
        this.spriteHeight = 177
        this.width = this.spriteWidth / 2.5
        this.height = this.spriteHeight / 2.5
        //call this after this.width has been declared
        this.x = Math.random() * (canvas.width - this.width)
        this.y = Math.random() * (canvas.height - this.height)
        this.frame = 0
        // random number between 1 and 4
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)

        // this.angle = 0
        // this.angle = Math.random() * 2
        this.angle = Math.random() * 500
        this.angleSpeed = Math.random() * 0.5 + 0.5
        // this.curve = Math.random() * 200 +70
    }
    update(){
        this.x = canvas.width/2  * Math.sin(this.angle * Math.PI/90 ) + (canvas.width / 2 - this.width/2)
        this.y = canvas.height/2 * Math.cos(this.angle * Math.PI/280) + (canvas.height / 2 - this.height/2)
        // this.x -= this.speed
        // this.y += Math.random() * 15 - 7.5
        // this.y += this.curve * Math.sin(this.angle)

        this.angle += this.angleSpeed
        if (this.x + this.width < 0) this.x = canvas.width
        // animate sprites
        if (gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++
        }
       
    }
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.frame * this.spriteWidth,0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy())
}

// animate npc
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    enemiesArray.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })
    gameFrame++
    requestAnimationFrame(animate)
}
animate()
```
