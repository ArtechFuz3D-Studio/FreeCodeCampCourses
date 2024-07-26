# Part 08 - State Design Pattern

## Design Patterns

- tried and tested toolkit solutions in software design

## Creational Design Pattern

- provide us with object creation mechanisms.

## Structural design Pattern

- help us assemble objects into flexible and efficient code structures

## Behavioural Design Patterns

- deal with communication and assigning responsabilities between objects

### State Design Pattern

- is a behavioural dessign that lets an object alter its behaviour when it's internal state changes

As we can imagine, when our game gets even slightly complex, logic like this can quickly become difficult to manage and small changes can often break the entire app and require fixing the entire logic tree.

```js
if (input === 'ArrowUp && player.isStanding'){
  // jump
} else if (input === 'ArrowDown' && (player.isStanding || player.isRunning)){
  //sit
} else if (input === 'ArrowDown' && player.isJumping){
  //dive
}
/*
---
---
---
---
---
---
---
---
---
*/
```

What if instead of complicated if else code we had a:

## Finite State Machine

- eg: if a player is sitting, running, or jumping, it can only be in one of those states at a time and each state will limit the amount of inputs available.

- this way we have a class for each state

- eg: while player is jumping they will only jump for a certain amount of time before falling down or if down key is pressed. while in jumping state, ignore all other inputs. (useful for combat game)

### Module Script Type

```html
<script type='module' src='script.js'></script>
```

allows us to split our code into multiple seperate files and use import / export keywords to connect the data inside

Self contained class that handles all the logic for that object is an example of:
4 principals of object oriented programming:

1. Encapulation - used to protect our data from unwanted outside access, it simplifies maintenance of the code by keeping it organised ad easier to understand.
2. Inheritance
3. Polymorphism - allows methods to display different behaviour depending on which class calls it.
4. Abstraction

Native javascript modules are part of ES6 standard and allow us to split code into seperate files.
Members of these modules (class, functions, variables) can be exported and imported app wide where needed.

Each module can only have 1 'default' export
Named imports require curly brackets, default not.

Remember drawImage can take 3, 5, or 9 args depending on what we want to achieve.
3 image, x, y coord
5 image, x, y coord, size.x, size.y
9 image, sx, sy, sw, sh, destination.x, destination.y, size.x, size.y
The latter being used for cropping and placing image.

### State Design Patterns

- allow objects to change behaviour based on current state.
eg: turning left or right
~capoeira combat mechanism

In each state we can limit what keys the player (class) will react to and we can write logic that defines behaviour for each key press seperately.

```md
An enum, short for "enumeration," is a special data type that allows a variable to be a set of predefined constants. Enums are useful when you have a collection of related values and want to ensure that a variable can only take one of those values. Enums improve code readability and reduce the likelihood of invalid values being assigned to variables.

### Enums in Different Programming Languages

#### TypeScript
In TypeScript, enums are a way of defining named constants. You can define an enum using the `enum` keyword.

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;

console.log(move); // Output: 0
console.log(Direction[0]); // Output: Up
```

#### JavaScript (using Objects)

JavaScript does not have a built-in enum type, but you can achieve similar functionality using objects.

```javascript
const Direction = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right'
};

let move = Direction.UP;

console.log(move); // Output: up
```

### Benefits of Using Enums

1. **Improved Code Readability:** Enums provide meaningful names for sets of values, making code easier to understand.
2. **Compile-Time Checking:** Enums ensure that only valid values are assigned to variables, catching errors at compile time rather than runtime.
3. **Namespace:** Enums group related constants together, reducing the likelihood of naming conflicts.
4. **Refactoring:** Enums make it easier to refactor code, as changing the enum definition will update all its usages.

Enums are a powerful feature that can help you write more maintainable and error-free code by constraining a variable to a set of predefined values.

```md
Polymorphism is a concept in object-oriented programming that refers to the ability of different objects to be treated as instances of the same class through a common interface. This allows for the implementation of different methods for different objects, enabling code reuse and flexibility.

In JavaScript, polymorphism can be achieved through various means, including:

1. **Inheritance and Method Overriding**
2. **Interfaces (using TypeScript)**
3. **Duck Typing**
4. **Function Overloading (though not natively supported)**

### 1. Inheritance and Method Overriding

JavaScript supports polymorphism through prototypal inheritance. Here’s an example:

```javascript
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks');
  }
}

class Cat extends Animal {
  speak() {
    console.log('Cat meows');
  }
}

function makeAnimalSpeak(animal) {
  animal.speak();
}

const dog = new Dog();
const cat = new Cat();

makeAnimalSpeak(dog); // Output: Dog barks
makeAnimalSpeak(cat); // Output: Cat meows
```

### 2. Interfaces (using TypeScript)

TypeScript allows you to define interfaces, which can be used to achieve polymorphism.

```typescript
interface Animal {
  speak(): void;
}

class Dog implements Animal {
  speak() {
    console.log('Dog barks');
  }
}

class Cat implements Animal {
  speak() {
    console.log('Cat meows');
  }
}

function makeAnimalSpeak(animal: Animal) {
  animal.speak();
}

const dog = new Dog();
const cat = new Cat();

makeAnimalSpeak(dog); // Output: Dog barks
makeAnimalSpeak(cat); // Output: Cat meows
```

### 3. Duck Typing

JavaScript uses duck typing, which means that an object's suitability is determined by the presence of certain methods and properties, rather than the actual type of the object.

```javascript
function makeAnimalSpeak(animal) {
  animal.speak();
}

const dog = {
  speak: function() {
    console.log('Dog barks');
  }
};

const cat = {
  speak: function() {
    console.log('Cat meows');
  }
};

makeAnimalSpeak(dog); // Output: Dog barks
makeAnimalSpeak(cat); // Output: Cat meows
```

### 4. Function Overloading

JavaScript does not natively support function overloading, but you can achieve similar functionality through parameter handling.

```javascript
function speak(animal) {
  if (animal instanceof Dog) {
    console.log('Dog barks');
  } else if (animal instanceof Cat) {
    console.log('Cat meows');
  } else {
    console.log('Animal makes a sound');
  }
}

class Dog {}
class Cat {}

const dog = new Dog();
const cat = new Cat();

speak(dog); // Output: Dog barks
speak(cat); // Output: Cat meows
```

### Conclusion

Polymorphism in JavaScript can be achieved through various means, allowing for flexible and reusable code. By using inheritance, interfaces (in TypeScript), duck typing, and function handling, you can implement polymorphism in your JavaScript applications effectively.

MIDPOINT VERSION - BASIC STATE MACHINE(LEFTRIGHT)

```html

    <canvas id="canvas1"></canvas>
    <img id="dogImage" src="/dog_left_right_white.png"  />
    <h1 id="loading">LOADING...</h1>
    <script type="module" src="./script.js"></script>
  </body>
</html>
```

```js
//script.js
import InputHandler from "./input";
import {drawStatusText} from "./utils"
import Player from "./player";

window.addEventListener("load", function () {
  const loading = document.getElementById('loading')
  loading.style.display = 'none'
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const player = new Player(canvas.width, canvas.height)
  // console.log(player)

  const input = new InputHandler()

  function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    // console.log(input.lastKey)
    player.update(input.lastKey)
    player.draw(ctx)
    drawStatusText(ctx, input, player)
    requestAnimationFrame(animate)
  }
  animate()
});
```

```js
//player.js
import { StandingLeft, StandingRight } from "./state";

export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.states = [new StandingLeft(this), new StandingRight(this)]; // these should occur in the same numerical order as their enum
    this.currentState = this.states[1];
    // this.image = document.getElementById("dogImage");
    this.image = dogImage;
    this.width = 200;
    this.height = 181.83;
    this.x = this.gameWidth * 0.5 - this.width * 0.5;
    this.y = this.gameHeight - this.height;
    this.frameX = 1
    this.frameY = 5;
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update(input){
    this.currentState.handleInput(input)
  }
  setState(state){
    this.currentState = this.states[state]
    this.currentState.enter()
  }
}
```

```js
// state.js
export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
}


// to keep track of current state
class State {
    constructor(state){
        this.state = state
    }
}

export class StandingLeft extends State {
    constructor(player){
        super('STANDING LEFT')
        this.player = player
    }
    enter(){
        this.player.frameY = 1

    }
    handleInput(input){
        if (input === 'PRESS right') this.player.setState(states.STANDING_RIGHT) //  sets state to standing right
    }
}
export class StandingRight extends State {
    constructor(player){
        super('STANDING RIGHT')
        this.player = player
    }
    enter(){
        this.player.frameY = 0
    }
    handleInput(input){
        if (input === 'PRESS left') this.player.setState(states.STANDING_LEFT) //  sets state to standing left

    }
}
```

```js
// input.js
export default class InputHandler {
    constructor(){
        this.lastKey = ''
        window.addEventListener('keydown', (e) => {
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "PRESS left"
                    break
                case "ArrowRight":
                    this.lastKey = "PRESS right"
                    break
            }
        })
        window.addEventListener('keyup', (e) => {
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "RELEASE left"
                    break
                case "ArrowRight":
                    this.lastKey = "RELEASE right"
                    break
            }
        })
    }
}
```

```js
//utils.js
export function drawStatusText(context, input, player){
    context.font = '30px Arial'
    context.fillText('Last input: ' + input.lastKey, 120, 150)
    context.fillText('Active state: ' + player.currentState.state, 120, 200)
}
```

LOGIC SUMMARY

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/GFO_txvwK_c?si=yIBHflEAAp9dtptg&amp;start=23727" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

Below is the spritesheet used in this example:
> Art courtesy of [Bevouliin](https://bevouliin.com/category/free_game_asset/)

6:26:13
