# Enemy Types

In this lesson I learned ...

In JS the 'extends' keyword is used to create a so called child class.

The *keyword* '**extends**' used in class declarations to create a subclass (child class) from a parent class. It sets up the prototype chain so that the subclass inherits properties and methods from the parent class.

```js
class Enemy {
    constructor(){
        this.x = 0
        this.y = 0
        this.width = 100
        this.height = 200
    }
    update(){
        this.x++
    }
    draw(){

    }
}

class Ghost extends Enemy {
    constructor(){
        super()
        this.image = 'ghost.png'
    }
}
```

If method name starts with the '#' it indicates a private class method, and can only be called from within the class, to handle some kind of internal functionality.

```js
class Game {
    constructor(){
        this.enemies = []
    }
    update(){

    }
    draw(){

    }
    #addNewEnemy(){
        
    }
}
```

```js
function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height)

    //  requestAnimationFrame(animate) this creates the loop. animate^ will run its code, then call itself again
    requestAnimationFrame(animate)
}

```

To ensre the animation loop and related content only runs once the page is loaded, the logic should be nested inside an evenetlistener.

```js

document.addEventListener('load', function(e){
    const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 800


// Main game class, handles all game update and draw calls
class Game {
    constructor(){
        this.enemies = []
    }
    update(){

    }
    draw(){

    }
    #addNewEnemy(){

    }
}

// enemy class, handles all enemy movement, sounds, size etc and update & draw calls
class Enemy {
    constructor(){

    }
    update(){

    }
    draw(){}
}

// Animation loop
function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height)

    //  requestAnimationFrame(animate) this creates the loop. animate^ will run its code, then call itself again
    requestAnimationFrame(animate)
}
})
```

animation loop runs based on devices refresh rate and performance, its important to standardise this to have a consistent frame rate cross platform.

requestAnimationFrame calcs frame rate based on device refresh rate. counting ms between frames, serving the next at a certain threshold.
by using requestAnimationFrame we get access to the timestamp arg

difference between frames is also called deltatime

Below is the spritesheet

> Art courtesy of [Bevouliin](https://bevouliin.com/category/free_game_asset/)
