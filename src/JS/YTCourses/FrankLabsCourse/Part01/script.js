let playerState = 'idle'
// Set the animation set when selected in dom
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', function(e){
    playerState = e.target.value
})

document.getElementById('hamburger').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('open');
});


const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

// Sizes
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

// Sprite
const playerImage = new Image()
playerImage.src = '../../../../../public/shadow_dog.png'
const spriteWidth = 575
const spriteHeight = 523



// Variables, dont need these anymore
// let frameX = 0
// let frameY = 0

let gameFrame = 0
let staggerFrames = 3

// Sprite Animations Array
const spriteAnimations = []
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'stun',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'attackbite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'attackreceived',
        frames: 4,
    },
]
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth
        let positionY = index * spriteHeight
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimations[state.name] = frames
})
console.log(spriteAnimations)


// Animation Loop
function animate(){

    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // Math.floor remove decimals, we are working with ints
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length
    let frameX = spriteWidth * position
    let frameY = spriteAnimations[playerState].loc[position].y

    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)


    gameFrame++
    requestAnimationFrame(animate)
}

animate()