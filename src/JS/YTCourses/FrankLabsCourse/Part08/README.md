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

1. *Encapulation*

- used to protect our data from unwanted outside access, it simplifies maintenance of the code by keeping it organised ad easier to understand.

2. Inheritance

3. Polymorphism

4. Abstraction

Native javascript modules are part of ES6 standard and allow us to split code into seperate files.
Members of these modules (class, functions, variables) can be exported and imported app wide where needed.

Each module can only have 1 'default' export
Named imports require curly brackets, default not.

06:07:20

Below is the spritesheet used in this example:
> Art courtesy of [Bevouliin](https://bevouliin.com/category/free_game_asset/)
